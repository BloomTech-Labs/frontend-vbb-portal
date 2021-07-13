import { meetingStatus } from './meetingStatus';

const {
  CHECKED_IN,
  EXPIRED,
  NOT_CHECK_IN,
  PRE_CHECK_IN,
} = meetingStatus;

export const meetingStatusToClassName = {};

meetingStatusToClassName[CHECKED_IN] = 'checked-in-status';
meetingStatusToClassName[EXPIRED] = 'no-show';
meetingStatusToClassName[NOT_CHECK_IN] = 'pending-status';
meetingStatusToClassName[PRE_CHECK_IN] = 'pending-status';

export default meetingStatusToClassName;
