
from oauth2client import file, client
from google.oauth2 import service_account
from googleapiclient import discovery
from googleapiclient.discovery import build
from datetime import datetime, timedelta
from googleapiclient import _auth
from apiclient import errors
import base64
import requests
import requests_oauth2
from requests_oauth2 import OAuth2BearerToken

from email.mime.text import MIMEText
class google_apis:
  ''''
  FUNCTIONS:
  1) account_create(self, firstName, lastName, personalEmail)
    - creates a mentor account 
  2) calendar_event(self, menteeEmail, mentorEmail, start_time, duration=1)
    - creates a calendar event with a google meets link 
  3) email_send(self, to, subject, message_text)
    - sends welcome email
  '''
  __webdev_cred=''
  __mentor_cred=''
  def __init__(self):
      scopes = [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/gmail.compose', 
        'https://www.googleapis.com/auth/admin.directory.user'
      ]
      SERVICE_ACCOUNT_FILE = r"api\service-account.json"
      credentials = service_account.Credentials.from_service_account_file(
              SERVICE_ACCOUNT_FILE, scopes=scopes)

      self.__webdev_cred = credentials.with_subject('webdevelopment@villagebookbuilders.org')
      

      self.__mentor_cred = credentials.with_subject('mentor@villagebookbuilders.org')

  def account_create(self, firstName, lastName, personalEmail):
    http = _auth.authorized_http(self.__webdev_cred)
    self.__webdev_cred.refresh(http._request)
    url = "https://www.googleapis.com/admin/directory/v1/users"
    headers = {
      #'Authorization': 'Bearer' delegated_credentials.token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    # checking if the email id already exists, adds an id to the end to differentiate
    addedID = -1
    def userExists(email):
      url = 'https://www.googleapis.com/admin/directory/v1/users/' + email
      with requests.Session() as s:
        s.auth = OAuth2BearerToken(self.__webdev_cred.token)
        r = s.get(url)
        if (r.status_code == 404):
          return False
        return True

    primaryEmail = firstName + '.' + lastName + '@villagementors.org'
    
    while(userExists(primaryEmail)):
      addedID+=1
      primaryEmail = firstName + '.' + lastName + str(addedID) + '@villagementors.org'
    data = ''' 
    {
      "primaryEmail": "%s",
      "name": {
        "familyName": "%s",
        "givenName": "%s"
      },
      "password": "villageBookBuilders",
      "changePasswordAtNextLogin": "true",
      "recoveryEmail": "%s",
    }
    '''% (primaryEmail, lastName, firstName, personalEmail)

    with requests.Session() as s:
      s.auth = OAuth2BearerToken(self.__webdev_cred.token)
      r = s.post(url, headers=headers, data=data)
      print('in while loop', data)
    return primaryEmail


  def calendar_event(self, menteeEmail, mentorEmail, start_time, duration=1):
      calendar_service = build('calendar', 'v3', credentials=self.__webdev_cred)
      timezone = 'America/New_York'
      start_date_time_obj = datetime.strptime(start_time, '%Y-%m-%dT%H:%M:%S')
      end_time = start_date_time_obj + timedelta(hours=duration)
      print('emails: ',mentorEmail, menteeEmail)
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
      return calendar_service.events().insert(calendarId='primary', body=event).execute()

  def email_send(self, to, subject, message_text):
    http = _auth.authorized_http(self.__mentor_cred)
    email_service = build('gmail', 'v1', http=http)
    def create_message(to, subject, message_text):
      """Create a message for an email.

      Args:
        sender: Email address of the sender.
        to: Email address of the receiver.
        subject: The subject of the email message.
        message_text: The text of the email message.

      Returns:
        An object containing a base64url encoded email object.
      """
      sender = self.__mentor_cred._subject
      message = MIMEText(message_text)
      message['to'] = to
      message['from'] = sender
      message['subject'] = subject
      message_as_bytes = message.as_bytes() # the message should converted from string to bytes.
      message_as_base64 = base64.urlsafe_b64encode(message_as_bytes) #encode in base64 (printable letters coding)
      raw = message_as_base64.decode()  # need to JSON serializable (no idea what does it means)
      return {'raw': raw} 

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
        message = (email_service.users().messages().send(userId=user_id, body=message)
                  .execute())
        print('Message Id: %s' % message['id'])
        return message
      except errors.HttpError as error:
        print('An error occurred: %s' % error)

    msg = create_message(to, subject, message_text)
    send_message(email_service, "me", msg)

# FOR TESTING PURPOSES -- REMOVE LATER
# def testFunction():
#   g = google_apis()
  # g.calendar_event("sohan.kalva.test2@villagementors.org", "shwetha.test1@villagebookbuilders.org", "2020-07-30T23:00:00")
  # g.email_send('shwetha.shinju2@gmail.com', 'testagain', 'testtextagain')
  # print(g.account_create('test','test', 'shwetha.shinju2@gmail.com'))
  