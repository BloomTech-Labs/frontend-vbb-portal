import { useEffect, useState } from 'react';

import {
  meetingStatus,
  deriveStatus,
} from '../util';

export const useManageStatus = ({
  end,
  checkedIn,
  start,
  status,
  setStatus,
}) => {
  const {
    NOT_CHECK_IN,
    PRE_CHECK_IN,
  } = meetingStatus;
  const [manageStatusInterval, setManageStatusInterval] = useState(0);

  const updateStatus = () => {
    const newStatus = deriveStatus({ start, end, checkedIn });
    if (status !== newStatus) setStatus(newStatus);
  };

  const clearManageStatusInterval = () => {
    if (manageStatusInterval !== 0) {
      clearInterval(manageStatusInterval);
      setManageStatusInterval(0);
    }
  };

  const getNewInterval = () => {
    clearManageStatusInterval();
    return setInterval(updateStatus, 1000);
  };

  const manageStatus = () => {
    if ([PRE_CHECK_IN, NOT_CHECK_IN].includes(status)) setManageStatusInterval(getNewInterval);
    else updateStatus();
  };

  useEffect(() => {
    manageStatus();
  }, [status]);
    
  useEffect(() => {
    return clearManageStatusInterval;
  }, [manageStatusInterval]);
};

export default useManageStatus;
