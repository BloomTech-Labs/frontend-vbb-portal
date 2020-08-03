import datetime
import random

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.db.models import Q
from django.shortcuts import render
from rest_auth.registration.views import SocialLoginView
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.http import HttpResponse


from oauth2client import file, client
from google.oauth2 import service_account
from googleapiclient import discovery
from googleapiclient.discovery import build

from api import aux_fns
from api.models import *
from api.serializers import *

scopes = ['https://www.googleapis.com/auth/calendar']
SERVICE_ACCOUNT_FILE = r"api\service-account.json"
credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=scopes)

delegated_credentials = credentials.with_subject('webdevelopment@villagebookbuilders.org')
service = build('calendar', 'v3', credentials=delegated_credentials)

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client


class LibraryListView(ListAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerializer
    permission_classes = (AllowAny,)


class LanguageListView(ListAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    permission_classes = (AllowAny,)


class AvailableAppointmentTimeList(ListAPIView):
    """
    Returns a list of available appointment times based on a mentor's preference (queries specific fields by primary key).
    URL example:  api/available/?library=1&language=1&min=1&max=24
    """

    queryset = Appointment.objects.all()
    permission_classes = (AllowAny,)

    def get(self, request):
        appts = Appointment.objects.all()
        library_params = self.request.query_params.get("library")
        language_params = self.request.query_params.get("language")
        min_hsm_params = int(self.request.query_params.get("min_hsm"))
        max_hsm_params = int(self.request.query_params.get("max_hsm"))

        # library and mentor filtering
        if library_params is None or library_params == "0":
            appts = (
                appts.filter(mentor=None, language=language_params,)
                .values("hsm")
                .distinct()
            )
        else:
            appts = (
                appts.filter(
                    mentor=None,
                    mentee_computer__library=library_params,
                    language=language_params,
                )
                .values("hsm")
                .distinct()
            )

        # hsm filtering
        if min_hsm_params < 0:
            appts = appts.filter(
                Q(hsm__lt=max_hsm_params) | Q(hsm__gte=168 + min_hsm_params)
            )
        elif max_hsm_params >= 168:
            appts = appts.filter(
                Q(hsm__lt=max_hsm_params - 168) | Q(hsm__gte=min_hsm_params)
            )
        else:
            appts = appts.filter(hsm__gte=min_hsm_params, hsm__lte=max_hsm_params)

        return Response(appts)

def create_event(menteeEmail, mentorEmail, start_time, duration=1):
    timezone = 'America/New_York'
    start_date_time_obj = datetime.strptime(start_time, '%Y-%m-%dT%H:%M:%S')
    end_time = start_date_time_obj + timedelta(hours=duration)
    event = {
        'summary': 'Village Book Builders Mentoring Meeting',
        'start': {
            'dateTime': start_date_time_obj.strftime("%Y-%m-%dT%H:%M:%S"),
            'timeZone': timezone,
        },
        'end': {
            'dateTime': end_time.strftime("%Y-%m-%dT%H:%M:%S"),
            'timeZone': timezone,
        },
        'recurrence': [
            'RRULE:FREQ=WEEKLY;COUNT=3'
        ],
        'attendees': [
            {'email': menteeEmail},
            {'email': mentorEmail}
        ],
        'reminders': {
            'useDefault': False,
            'overrides': [
            {'method': 'email', 'minutes': 24 * 60}, # reminder 24 hrs before event
            {'method': 'popup', 'minutes': 10}, # pop up reminder, 10 min before event
            ],
        },
    }
    return service.events().insert(calendarId='primary', body=event).execute()

@api_view(["GET"])
def temp_create_event(request): # temp to merge with book_appointment
    
    """
    Calls google api create_event function.
    URL example: api/create-event/?mentorEmail="sohan.kalva.test2@villagementors.org"?menteeEmail="shwetha.test1@villagebookbuilders.org"?startTime=2020-07-28T20:00:00
    """
    # url_mentorEmail_params = request.query_params.get("mentorEmail")
    url_mentorEmail_params = "sohan.kalva.test2@villagementors.org"
    
    # url_menteeEmail_params = request.query_params.get("menteeEmail")
    url_menteeEmail_params = "shwetha.test1@villagebookbuilders.org"
    
    # url_startTime_params = request.query_params.get("startTime")
    url_startTime_params = "2020-07-28T20:00:00"

    print('stuff: ', url_mentorEmail_params, url_menteeEmail_params, url_startTime_params)
    
    create_event(url_mentorEmail_params, url_menteeEmail_params, url_startTime_params)
    # return HttpResponse("testing")
    return Response(
        {
            "success": "true",
        }
    )

# FIXME - Change to POST once stable
@api_view(["GET"])
def book_appointment(request):
    """
    Gets an appointment list at a given time based on preferences then randomly picks one appointment and populates it with the mentor's name (queries specific fields by primary key).
    URL example:  api/booking/?library=1&language=1&hsm=1
    """
    appts = Appointment.objects.all()
    library_params = request.query_params.get("library")
    language_params = request.query_params.get("language")
    hsm_params = request.query_params.get("hsm")

    if library_params is None or library_params == "0":
        appts = appts.filter(mentor=None, language=language_params, hsm=hsm_params,)
    else:
        appts = appts.filter(
            mentor=None,
            mentee_computer__library=library_params,
            language=language_params,
            hsm=hsm_params,
        )
    # Check if there are no appointments that match the request.
    if not appts:
        return Response(
            {
                "success": "false",
                "message": "No available appointments exist with those specifications.",
            }
        )
    myappt = random.choice(appts)
    # FIXME - Once you can login to api-auth/ and stay logged in for calls, comment out the next line (assigning a random mentor to the appointment) and uncomment the one after (assigning the authenticated user to the appointment).
    myappt.mentor = request.user
    # myappt.mentor = request.user
    myappt.start_date = datetime.datetime.today() + datetime.timedelta(
        days=(aux_fns.diff_today_dsm(myappt.hsm) + 7)
    )
    myappt.end_date = myappt.start_date + datetime.timedelta(weeks=17)
    myappt.save()
    # FIXME -- CALL TO SHWETHA'S GOOGLE API FUNCTION
    # FIXME - Add try/except/finally blocks for error checking (not logged in, appointment got taken before they refreshed)
    return Response(
        {"success": "true", "user": str(myappt.mentor), "appointment": str(myappt),}
    )


class MyAppointmentListView(ListAPIView):
    """
    Returns a list of the mentor's booked appointments.
    """

    permission_classes = (IsAuthenticated,)
    serializer_class = MyAppointmentListSerializer

    def get_queryset(self):
        return self.request.user.mentor_appointments.all()
