from django.urls import path
from .views import *
from .views import SessionDetailView

urlpatterns = [
    path("signup/", first_time_signup),
    path("googlelogin/", GoogleLogin.as_view()),
    path("checksignin/", check_signin),
    path("generate/", generate_sessionslots),
    path("library/", LibraryListView.as_view()),
    path("language/", LanguageListView.as_view()),
    path("available/", AvailableSessionSlotList.as_view()),
    path("session/", SessionSlotListView.as_view()),
    path("session/<pk>", SessionDetailView.as_view()),
    # path("<pk>/update/", SessionDetailView.as_view()),
    path("book/", book_sessionslot),
]
