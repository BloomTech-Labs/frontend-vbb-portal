from datetime import datetime, timedelta
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

from api import aux_fns
from api.models import *
from api.serializers import *
from api.google_apis import *

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
        if library_params is None:
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

@api_view(["GET"])
def temp_create_event(request): # temp to merge with book_appointment
    
    """
    Calls google api create_event function.
    URL example: api/create-event/?mentorEmail="sohan.kalva.test2@villagementors.org"?menteeEmail="shwetha.test1@villagebookbuilders.org"?startTime=2020-07-28T20:00:00
    """
    url_mentorEmail_params = "sohan.kalva.test2@villagementors.org"
    
    # url_menteeEmail_params = request.query_params.get("menteeEmail")
    url_menteeEmail_params = "shwetha.test1@villagebookbuilders.org"
    
    # url_startTime_params = request.query_params.get("startTime")
    url_startTime_params = "2020-07-30T20:00:00"
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

    if library_params is None:
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
    # myappt.mentor = random.choice(User.objects.all())
    print('HELLOOOOOOOOOOOOO')
    myappt.mentor = User.objects.get(username="shwetha")
    print('hey')
    # myappt.mentor = request.user
    myappt.start_date = datetime.today() + timedelta(
        days=(aux_fns.diff_today_dsm(myappt.hsm) + 7)
    )
    myappt.end_date = myappt.start_date + timedelta(weeks=17)
    # myappt.save()
    # FIXME -- CALL TO SHWETHA'S GOOGLE API FUNCTION
    gapi = google_apis()
    start_time = aux_fns.date_combine_time(str(myappt.start_date), myappt.hsm)
    print('mentor: ',  myappt.mentor.mentor)
    gapi.calendar_event(myappt.mentee_computer.computer_email, myappt.mentor.mentor.vbb_email, start_time)
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

@api_view(["GET"])
def testing(request):
    # start_date format: "2020-07-31"
    appts = Appointment.objects.all()
    appts = Appointment.objects.exclude(start_date = None, hsm=None)
    myappt = random.choice(appts)
    start_date = str(myappt.start_date)
    hsm = myappt.hsm
   
    result = aux_fns.date_combine_time(start_date, hsm)
    if myappt.start_date:
        return  Response(
            {
                "success": "true", 
                "start_helper": str(result),
            }
        )
    else:
        return Response(
            {"success": "false"}
        )

