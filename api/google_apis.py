
from oauth2client import file, client
from google.oauth2 import service_account
from googleapiclient import discovery
from googleapiclient.discovery import build
from datetime import datetime, timedelta

# from email.mime.text import MIMEText

scopes = ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/gmail.compose']
SERVICE_ACCOUNT_FILE = r"api\service-account.json"
credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=scopes)

delegated_credentials = credentials.with_subject('webdevelopment@villagebookbuilders.org')
service = build('calendar', 'v3', credentials=delegated_credentials)
# http = credentials.authorize(httplib2.Http())
# email_service = build('gmail', 'v1', http=http)

def create_message(sender, to, subject, message_text):
  """Create a message for an email.

  Args:
    sender: Email address of the sender.
    to: Email address of the receiver.
    subject: The subject of the email message.
    message_text: The text of the email message.

  Returns:
    An object containing a base64url encoded email object.
  """
  message = MIMEText(message_text)
  message['to'] = to
  message['from'] = sender
  message['subject'] = subject
  return {'raw': base64.urlsafe_b64encode(message.as_string())}

def send_message(service, user_id, message):
  """Send an email message.

  Args:
    service: Authorized Gmail API service instance.
    user_id: User's email address. The special value "me"
    can be used to indicate the authenticated user.
    message: Message to be sent.

  Returns:
    Sent Message.
  """
  try:
    message = (service.users().messages().send(userId=user_id, body=message)
               .execute())
    print('Message Id: %s' % message['id'])
    return message
  except errors.HttpError as error:
    print('An error occurred: %s' % error)


def create_event(menteeEmail, mentorEmail, start_time, duration=1):
    timezone = 'America/New_York'
    start_date_time_obj = datetime.strptime(start_time, '%Y-%m-%dT%H:%M:%S')
    end_time = start_date_time_obj + timedelta(hours=duration)
    event = {
        'summary': 'Village Book Builders Mentoring Meeting',
        'start': {
            'dateTime': start_date_time_obj.strftime("%Y-%m-%dT%H:%M:%S"),
            'timeZone': timezone,
        },
        'end': {
            'dateTime': end_time.strftime("%Y-%m-%dT%H:%M:%S"),
            'timeZone': timezone,
        },
        'recurrence': [
            'RRULE:FREQ=WEEKLY;COUNT=3'
        ],
        'attendees': [
            {'email': menteeEmail},
            {'email': mentorEmail}
        ],
        'reminders': {
            'useDefault': False,
            'overrides': [
            {'method': 'email', 'minutes': 24 * 60}, # reminder 24 hrs before event
            {'method': 'popup', 'minutes': 10}, # pop up reminder, 10 min before event
            ],
        },
    }
    return service.events().insert(calendarId='primary', body=event).execute()