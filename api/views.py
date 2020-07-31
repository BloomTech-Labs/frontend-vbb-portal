import random
from datetime import date, datetime, timedelta

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.db.models import Q

from dateutil.relativedelta import relativedelta
from django.shortcuts import render
from rest_auth.registration.views import SocialConnectView, SocialLoginView
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.http import HttpResponse


from oauth2client import file, client
from google.oauth2 import service_account
from googleapiclient import discovery
from googleapiclient.discovery import build

from .models import *
from .serializers import *

scopes = ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/gmail.compose']
SERVICE_ACCOUNT_FILE = r"api\service-account.json"
credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=scopes)

delegated_credentials = credentials.with_subject('webdevelopment@villagebookbuilders.org')
service = build('calendar', 'v3', credentials=delegated_credentials)

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client


class GoogleConnect(SocialConnectView):
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
        url_library_params = self.request.query_params.get("library")
        url_language_params = self.request.query_params.get("language")
        url_min_params = self.request.query_params.get("min")
        url_max_params = self.request.query_params.get("max")

        # library and mentor filtering
        if url_library_params is None:
            appts = (
                appts.filter(mentor=None, language=url_language_params,)
                .values("hsm")
                .distinct()
            )
        else:
            appts = (
                appts.filter(
                    mentor=None,
                    mentee_computer__library=url_library_params,
                    language=url_language_params,
                )
                .values("hsm")
                .distinct()
            )

        # hsm filtering
        if url_min_params < 0:
            appts = appts.filter(
                Q(hsm__lt=url_max_params) | Q(hsm__gte=168 + url_min_params)
            )
        elif url_max_params >= 168:
            appts = appts.filter(
                Q(hsm__lt=168 - url_max_params) | Q(hsm__gte=url_min_params)
            )
        else:
            appts = appts.filter(hsm_gte=url_min_params, hsm_lte=url_max_params)

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
    url_library_params = request.query_params.get("library")
    url_language_params = request.query_params.get("language")
    url_hsm_params = request.query_params.get("hsm")

    if url_library_params is None:
        appts = appts.filter(
            mentor=None, language=url_language_params, hsm=url_hsm_params,
        )
    else:
        appts = appts.filter(
            mentor=None,
            mentee_computer__library=url_library_params,
            language=url_language_params,
            hsm=url_hsm_params,
        )
    myappt = random.choice(appts)
    myappt.mentor = request.user
    myappt.start_date = date.today()
    myappt.end_date = date.today() + relativedelta(months=+4)
    myappt.save()
    # FIXME -- CALL TO SHWETHA'S GOOGLE API FUNCTION
    # FIXME - Add try/except/finally blocks for error checking (not logged in, appointment got taken before they refreshed)
    return Response(
        {
            "success": "true",
            "user": str(request.user),
            "random": str(random.choice(appts)),
        }
    )


class MyAppointmentListView(ListAPIView):
    """
    Returns a list of the mentor's booked appointments.
    """

    permission_classes = (IsAuthenticated,)
    serializer_class = MyAppointmentListSerializer

    def get_queryset(self):
        return self.request.user.mentor_appointments.all()
