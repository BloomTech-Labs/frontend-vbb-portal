from django.core.management.base import BaseCommand
from api.models import Appointment
from datetime import date


class Command(BaseCommand):
    help = "Removes appointments that have expired"

    def handle(self, *args, **options):
        booked_appts = Appointment.objects.exclude(mentor=None)
        num_expired_appts = booked_appts.filter(end_date__lt=date.today()).count()

        if num_expired_appts > 0:
            Appointment.objects.filter(end_date__lt=date.today()).update(mentor=None)
            return str(num_expired_appts) + " expired appointment(s) removed."
        else:
            return "No appointments have expired."

