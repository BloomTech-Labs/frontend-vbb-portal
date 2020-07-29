import random

# from datetime import date
import datetime

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.db.models import Q

from dateutil.relativedelta import relativedelta
from django.shortcuts import render
from rest_auth.registration.views import SocialLoginView
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import *
from .serializers import *


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
    myappt = random.choice(appts)
    # FIXME - Once you can login to api-auth/ and stay logged in for calls, comment out the next line (assigning a random mentor to the appointment) and uncomment the one after (assigning the authenticated user to the appointment).
    myappt.mentor = random.choice(User.objects.all())
    # myappt.mentor = request.user
    # myappt.start_date = date.today()

    call function to convert from hsm to day of week, store that day of week in var called start_day_of_week
    convert start_day_of_week to enum

    weekday =
    myappt.start_date = date.today() + datetime.timedelta(7)

    # days_till_first_appt = [selected date enum] - [today day of week enum] + [7]
    # start_date = [date.today()] + [relative_delta(days_till_first_appt)]

    # def next_weekday(d, weekday):
    #     days_ahead = weekday - d.weekday() + 7
    #     return d + datetime.timedelta(days_ahead)

    # d = datetime.date(2011, 7, 2)
    # next_monday = next_weekday(d, 0) # 0 = Monday, 1=Tuesday, 2=Wednesday...
    # print(next_monday)

    myappt.end_date = myappt.start_date + relativedelta(months=+4)
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
