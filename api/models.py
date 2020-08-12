import datetime
from pytz import timezone

from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from api import aux_fns


class Library(models.Model):
    name = models.CharField(max_length=40, null=True, blank=True)
    time_zone = models.CharField(max_length=40, null=True, blank=True)
    calendar_id = models.CharField(max_length=120, null=True)
    whatsapp_group = models.CharField(max_length=60, null=True)
    program_director_name = models.CharField(max_length=50, null=True, blank=True)
    program_director_phone = models.CharField(max_length=15, null=True, blank=True)
    program_director_email = models.EmailField(max_length=50, null=True, blank=True)
    library_gmail_group = models.CharField(max_length=50, null=True, blank=True)
    library_classroom = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Libraries"

    def __str__(self):
        return self.name


class Language(models.Model):
    name = models.CharField(max_length=40, null=True, unique=True)

    def __str__(self):
        return self.name


class MentorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="mp", null=True, blank=True)
    time_zone = models.CharField(max_length=40, null=True)
    first_name = models.CharField(max_length=60, null=True)
    last_name = models.CharField(max_length=60, null=True)
    personal_email = models.EmailField(max_length=60, null=True, unique=True)
    vbb_email = models.EmailField(max_length=60, null=True, unique=True)
    phone_number = models.CharField(max_length=12, null=True, blank=True)
    occupation = models.CharField(max_length=70, null=True, blank=True)
    affiliation = models.CharField(max_length=70, null=True, blank=True)
    referral_source = models.TextField(max_length=200, null=True, blank=True)
    desired_involvement = models.TextField(max_length=200, null=True, blank=True)
    initials = models.CharField(max_length=6, null=True)
    advisor_notes = models.TextField(max_length=256,null=True,blank=True)

    def __str__(self):
        return self.first_name + " " + self.last_name

class Computer(models.Model):
    library = models.ForeignKey(
        Library,
        on_delete=models.SET_NULL,
        related_name="computers",
        null=True,
        blank=True,
    )
    language = models.ForeignKey(
        Language,
        on_delete=models.SET_NULL,
        related_name="computers",
        null=True,
    )
    computer_number = models.IntegerField(null=True)
    computer_email = models.EmailField( max_length=70, null=True)
    room_id = models.CharField(max_length=100, null=True)

    def __str__(self):
        return (
            str(self.library)
            + " "
            + str(self.computer_number)
            + " ("
            + self.computer_email
            + ")"
        )


class SessionSlot(models.Model):
    mentor = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        related_name="sessionslots",
        null=True,
        blank=True,
    )
    mentee_computer = models.ForeignKey(
        Computer,
        on_delete=models.SET_NULL,
        related_name="sessionslots",
        null=True,
    )
    language = models.ForeignKey(Language, on_delete=models.SET_NULL, null=True)
    hsm = models.FloatField(
        verbose_name="hours since monday at 12am (eastern time)",
        null=True,
        validators=[MinValueValidator(0.0), MaxValueValidator(167.999)],
    )
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    event_id = models.CharField(max_length=60, null=True, blank=True)
    mentor_notes = models.TextField(max_length=500, null=True, blank=True)

    def __str__(self):
        if self.hsm is None:
            return "** Add time **"
        newhsm = int(self.hsm)
        if self.end_date is None:
            return (
                aux_fns.hsm_to_day_name(newhsm)
                + "s @ "
                + aux_fns.hsm_to_12hr(newhsm)
            )
        return (
            aux_fns.hsm_to_day_name(newhsm)
            + "s @ "
            + aux_fns.hsm_to_12hr(newhsm)
            + " until "
            + str(self.end_date.strftime("%x"))
        )

    def display(self):
        today = datetime.datetime.now()
        tz2, tz1 = timezone("US/Eastern"), timezone(self.mentor.mp.time_zone)
        diff = (
            tz1.localize(today) - tz2.localize(today).astimezone(tz1)
        ).seconds // 3600
        newhsm = (self.hsm - diff + 168) % 168
        tz1, tz2 = timezone("US/Eastern"), timezone(self.mentor.mp.time_zone)
        diff = (
            tz1.localize(today) - tz2.localize(today).astimezone(tz1)
        ).seconds // 3600
        return (
            aux_fns.hsm_to_day_name(newhsm)
            + "s @ "
            + aux_fns.hsm_to_12hr(newhsm)
            + " until "
            + str(self.end_date.strftime("%x"))
        )
