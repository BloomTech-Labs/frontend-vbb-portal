import Moment from 'moment';

import { meetingStatus } from './meetingStatus';

const {
  CHECKED_IN,
  EXPIRED,
  NOT_CHECK_IN,
  PRE_CHECK_IN,
} = meetingStatus;

export const deriveStatus = ({ start, end, checkedIn }) => {
  console.log('deriveStatus');
  const nowMoment = Moment(Date.now());
  const halfHourBeforeMeetingStart = Moment(start).subtract(30, 'minutes');
  const args = new Set([start, end, checkedIn]);

  if (args.has('') || args.has(undefined)) return EXPIRED;
  else if (checkedIn) return CHECKED_IN;
  else if (nowMoment.isBefore(halfHourBeforeMeetingStart)) return PRE_CHECK_IN;
  else if (nowMoment.isAfter(halfHourBeforeMeetingStart) && nowMoment.isBefore(end)) return NOT_CHECK_IN;
  else return EXPIRED;
};

export default deriveStatus;
