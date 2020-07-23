from django.contrib import admin
from .models import *


admin.site.site_header = "Admin - VBB Mentor Portal"
admin.site.site_title = "VBB Mentor Portal"


class LibraryAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "time_zone")
    readonly_fields = ("id",)
    search_fields = ("id", "name", "time_zone")


class LanguageAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    readonly_fields = ("id",)
    search_fields = ("id", "name")


class DayAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    readonly_fields = ("id",)
    search_fields = ("id", "name")


class TimeAdmin(admin.ModelAdmin):
    list_display = ("id", "hour")
    readonly_fields = ("id",)
    search_fields = ("id", "hour")


class MentorProfileAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "__str__",
        "user",
        "time_zone",
        "phone_number",
        "occupation",
        "organization",
        "contact_source",
        "involvement",
    )
    readonly_fields = ("id",)
    search_fields = (
        "id",
        "user",
        "time_zone",
        "organization",
        "contact_source",
        "involvement",
    )


class MenteeProfileAdmin(admin.ModelAdmin):
    list_display = ("id", "__str__", "user", "library", "time_zone")
    readonly_fields = ("id",)
    search_fields = ("id", "user", "library", "time_zone")


class ComputerAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "__str__",
        "library",
        "language",
        "computer_num",
        "computer_email",
    )
    readonly_fields = ("id",)
    search_fields = (
        "id",
        "library",
        "language",
        "computer_num",
        "computer_email",
    )


class AppointmentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "__str__",
        "mentor",
        "mentee",
        "mentee_computer",
        "language",
        "day_of_week",
        "eastern_time",
        "start_date",
        "end_date",
        "notes",
    )
    readonly_fields = ("id",)
    search_fields = (
        "id",
        "mentor",
        "mentee",
        "mentee_computer",
        "language",
        "day_of_week",
        "eastern_time",
        "start_date",
        "end_date",
    )


admin.site.register(Library, LibraryAdmin)
admin.site.register(Language, LanguageAdmin)
admin.site.register(Day, DayAdmin)
admin.site.register(Time, TimeAdmin)
admin.site.register(MentorProfile, MentorProfileAdmin)
admin.site.register(MenteeProfile, MenteeProfileAdmin)
admin.site.register(Computer, ComputerAdmin)
admin.site.register(Appointment, AppointmentAdmin)
