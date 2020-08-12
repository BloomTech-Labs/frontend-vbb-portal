from django.urls import path
from .views import *

urlpatterns = [
    path("signup/", first_time_signup),
    path("googlelogin/", GoogleLogin.as_view()),
    path("checksignin/", check_signin),
    path("generate/", generate_appointments),
    path("library/", LibraryListView.as_view()),
    path("language/", LanguageListView.as_view()),
    path("available/", AvailableAppointmentTimeList.as_view()),
    path("myappointments/", MyAppointmentListView.as_view()),
    path("book/", book_appointment),
]