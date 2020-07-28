import random
from datetime import date

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
#from dateutil.relativedelta import relativedelta
from django.shortcuts import render
from rest_auth.registration.views import SocialConnectView, SocialLoginView
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import *
from .serializers import *


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


class DayListView(ListAPIView):
    queryset = Day.objects.all()
    serializer_class = DaySerializer
    permission_classes = (AllowAny,)


class TimeListView(ListAPIView):
    queryset = Time.objects.all()
    serializer_class = TimeSerializer
    permission_classes = (AllowAny,)


class AvailableAppointmentTimeList(ListAPIView):
    """
    Returns a list of available appointment times based on a mentor's preference (queries specific fields by primary key).
    URL example:  api/available/?library=1&language=1&day=1
    """

    queryset = Appointment.objects.all()
    permission_classes = (AllowAny,)

    def get(self, request):
        appts = Appointment.objects.all()
        url_library_params = self.request.query_params.get("library")
        url_language_params = self.request.query_params.get("language")
        url_day_params = self.request.query_params.get("day")
        if url_library_params is None:
            appts = (
                appts.filter(
                    mentor=None,
                    language=url_language_params,
                    day_of_week=url_day_params,
                )
                .values("eastern_time__hour")
                .distinct()
            )
        else:
            appts = (
                appts.filter(
                    mentor=None,
                    mentee_computer__library=url_library_params,
                    language=url_language_params,
                    day_of_week=url_day_params,
                )
                .values("eastern_time__hour")
                .distinct()
            )
        return Response(appts)


@api_view(["GET"])
def book_appointment(request):
    """
    Gets an appointment list at a given time based on preferences then randomly picks one appointment and populates it with the mentor's name (queries specific fields by primary key).
    URL example:  api/booking/?library=1&language=1&day=1&time=1
    """
    appts = Appointment.objects.all()
    url_library_params = request.query_params.get("library")
    url_language_params = request.query_params.get("language")
    url_day_params = request.query_params.get("day")
    url_time_params = request.query_params.get("time")
    if url_library_params is None:
        appts = appts.filter(
            mentor=None,
            language=url_language_params,
            day_of_week=url_day_params,
            eastern_time=url_time_params,
        )
    else:
        appts = appts.filter(
            mentor=None,
            mentee_computer__library=url_library_params,
            language=url_language_params,
            day_of_week=url_day_params,
            eastern_time=url_time_params,
        )
    myappt = random.choice(appts)
    myappt.mentor = request.user
    myappt.start_date = date.today()
    #myappt.end_date = date.today() + relativedelta(months=+4)
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
