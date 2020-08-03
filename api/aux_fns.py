import datetime


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
    else:
        return str(am_pm_time) + "am"
