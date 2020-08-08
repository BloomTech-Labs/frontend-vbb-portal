from django.urls import path
from .views import *

urlpatterns = [
    path("sign-up/", first_time_signup),
    path("googlelogin/", GoogleLogin.as_view()),
    path("library/", LibraryListView.as_view()),
    path("language/", LanguageListView.as_view()),
    path("available/", AvailableAppointmentTimeList.as_view()),
    path("myappointments/", MyAppointmentListView.as_view()),
    path("book/", book_appointment),
    path("generate/", generate_appointments),
    path("testing/", testing),
]