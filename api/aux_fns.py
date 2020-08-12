import datetime
from pytz import timezone

def diff_today_dsm(hsm):
    """Calculates the difference in the number of days between today and the selected day of the week.
    Takes: int
    Returns: int"""
    selected_dsm = hsm // 24
    today_dsm = datetime.datetime.today().weekday()
    day_diff = selected_dsm - today_dsm
    if day_diff < 0:
        day_diff = day_diff + 7
    return day_diff


def hsm_to_day_name(hsm):
    """Converts hours since Monday to the name of its day of the week.
    Takes: int
    Returns: string"""
    days_of_week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    day = hsm // 24
    return days_of_week[day]


def hsm_to_12hr(hsm):
    """Converts hours since Monday to an am/pm time.
    Takes: int
    Returns: string"""
    am_pm_time = hsm % 24
    if am_pm_time > 12:
        am_pm_time = am_pm_time - 12
        return str(am_pm_time) + "pm"
    elif am_pm_time == 12:
        return "12pm"
    elif am_pm_time == 0:
        return "12am"
    return str(am_pm_time) + "am"

def date_combine_time(start_date, hsm, min="00", sec="00"):
    """Converts start_date format to timestamp 
    with date, hours, min, sec
    input start_date in "2020-07-31" format
    output  "2020-07-30T23:00:00" """
    # hours since day has started
    print('start_date passed in: ', start_date)
    start_date = str(start_date)[:10] # get first 10 characters
    day_hrs = hsm % 24
    # convert day hours to 2 length string ie. 07
    str_hrs = str(day_hrs)
    if day_hrs < 10: # adding a 0 to beginning 
        str_hrs = "0" + str_hrs
    # concatenate date with time 
    result = start_date + "T" + str_hrs + ":" + min + ":" + sec
    print('result: ', result)
    return result

def display_day(tzname, hsm, end_date=None, show_tz=False):
    print("entering display")
    today = datetime.datetime.now()
    tz2, tz1 = timezone("US/Eastern"), timezone(tzname)
    diff = (
        tz1.localize(today) - tz2.localize(today).astimezone(tz1)
    ).seconds // 3600
    print("getting newsm")
    newhsm = int((hsm - diff + 168) % 168)
    tz_disp = " (" + tzname + " time)" if show_tz else ""
    if end_date is None:
        return (
            hsm_to_day_name(newhsm)
            + "s @ "
            + hsm_to_12hr(newhsm)
            + tz_disp
        )
    return (
        hsm_to_day_name(newhsm)
        + "s @ "
        + hsm_to_12hr(newhsm)
        + tz_disp
        + " until "
        + str(end_date.strftime("%x"))
    )
