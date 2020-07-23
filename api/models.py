from django.contrib.auth.models import User
from django.core.validators import (
    MaxValueValidator,
    MinValueValidator,
)  # FIXME - IS THIS THE BEST WAY TO STORE TIME?  HOUR AND DAY?
from django.db import models
from datetime import date

## FIXME - TIMEZONE MODEL REMOVED, FIX OTHER TIME ZONE FIELDS to CHAR FIELDS
## FIXME - LOOK INTO DOCUMENTATION ON ONDELETE MODELS CASCADE


class Library(models.Model):
    name = models.CharField(verbose_name="name", max_length=40, null=True, blank=True)
    time_zone = models.CharField(
        verbose_name="time zone", max_length=40, null=True, blank=True
    )

    class Meta:
        verbose_name_plural = "Libraries"

    def __str__(self):
        return self.name


class Language(models.Model):
    name = models.CharField(verbose_name="name", max_length=40, null=True, blank=True)

    def __str__(self):
        return self.name


class Day(models.Model):
    name = models.CharField(verbose_name="name", max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name


class Time(models.Model):
    # hour = models.IntegerField(verbose_name="hour", null=True, blank=True)
    hour = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(24)], null=True, blank=True
    )
    # min = models.IntegerField(verbose_name="minute", null=True, blank=True)
    min = models.PositiveIntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(60)], null=True, blank=True
    )

    def __str__(self):
        return str(self.hour)


class MentorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="mentor")
    time_zone = models.CharField(
        verbose_name="time zone", max_length=40, null=True, blank=True
    )
    phone_number = models.CharField(
        verbose_name="phone number", max_length=12, null=True, blank=True
    )
    occupation = models.CharField(
        verbose_name="occupation", max_length=70, null=True, blank=True
    )
    organization = models.CharField(
        verbose_name="organization", max_length=70, null=True, blank=True
    )
    contact_source = models.TextField(
        verbose_name="contact source", max_length=200, null=True, blank=True
    )
    involvement = models.TextField(
        verbose_name="involvement", max_length=200, null=True, blank=True
    )

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


class MenteeProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="mentee")
    library = models.ForeignKey(
        Library, on_delete=models.CASCADE, related_name="mentee", null=True, blank=True
    )
    time_zone = models.CharField(
        verbose_name="time zone", max_length=40, null=True, blank=True
    )

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


class Computer(models.Model):
    library = models.ForeignKey(
        Library,
        on_delete=models.CASCADE,
        related_name="computer",
        null=True,
        blank=True,
    )
    language = models.ForeignKey(
        Language,
        on_delete=models.CASCADE,
        related_name="computer",
        null=True,
        blank=True,
    )
    computer_num = models.IntegerField(
        verbose_name="computer number", null=True, blank=True
    )
    computer_email = models.EmailField(
        verbose_name="computer email", max_length=70, null=True, blank=True
    )

    def __str__(self):
        return (
            str(self.library)
            + " "
            + str(self.computer_num)
            + " ("
            + self.computer_email
            + ")"
        )


class Appointment(models.Model):
    mentor = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="mentor_appointments",
        null=True,
        blank=True,
    )
    mentee = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="mentee_appointments",
        null=True,
        blank=True,
    )
    mentee_computer = models.ForeignKey(
        Computer,
        on_delete=models.CASCADE,
        related_name="computer_appointments",
        null=True,
        blank=True,
    )
    language = models.ForeignKey(
        Language,
        on_delete=models.CASCADE,
        related_name="appointment",
        null=True,
        blank=True,
    )
    day_of_week = models.ForeignKey(
        Day, on_delete=models.CASCADE, related_name="appointment", null=True, blank=True
    )
    eastern_time = models.ForeignKey(
        Time,
        on_delete=models.CASCADE,
        related_name="appointment",
        null=True,
        blank=True,
    )
    start_date = models.DateField(verbose_name="start date", null=True, blank=True)
    end_date = models.DateField(verbose_name="end date", null=True, blank=True)
    notes = models.TextField(
        verbose_name="notes", max_length=500, null=True, blank=True
    )

    def __str__(self):
        return (
            str(self.day_of_week)
            + "s @ "
            + str(self.eastern_time)
            + " until "
            + str(self.end_date)
        )
