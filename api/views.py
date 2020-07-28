import random
from datetime import date

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
