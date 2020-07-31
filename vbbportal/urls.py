from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

from api.views import *

urlpatterns = [
    # New Auth
    path("googlelogin/", GoogleLogin.as_view()),
    path("accounts/", include("allauth.urls")),
    path("rest-auth/registration/", include("rest_auth.registration.urls")),
    path("rest-auth/", include("rest_auth.urls")),
    # Django
    path("api/library/", LibraryListView.as_view()),
    path("api/language/", LanguageListView.as_view()),
    path("api/available/", AvailableAppointmentTimeList.as_view()),
    path("api/myappointments/", MyAppointmentListView.as_view()),
    path("api/booking/", book_appointment),
    path("api/create-event/", temp_create_event),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("admin/", admin.site.urls),
    # React
    re_path(r".*", TemplateView.as_view(template_name="index.html")),
]
