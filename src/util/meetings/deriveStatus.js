import Moment from 'moment';

import { meetingStatus } from '.';

export const deriveStatus = ({ start, end, checkedIn }) => {
  const nowMoment = Moment(Date.now());
  const halfHourBeforeMeetingStart = Moment(start).subtract(30, 'minutes');

  if (checkedIn) {
    return meetingStatus.CHECKED_IN;
  }
  else if (nowMoment.isBefore(halfHourBeforeMeetingStart)) {
    return meetingStatus.PRE_CHECK_IN;
  }
  else if (nowMoment.isAfter(halfHourBeforeMeetingStart) && nowMoment.isBefore(end)) {
    return meetingStatus.NOT_CHECK_IN;
  }
  else {
    return meetingStatus.EXPIRED;
  }
};

export default deriveStatus;
