from rest_framework import serializers

from .models import *


class LibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Library
        fields = "__all__"


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = "__all__"


class DaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Day
        fields = "__all__"


class TimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Time
        fields = [
            "hour",
        ]


class MyAppointmentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ("__str__",)
