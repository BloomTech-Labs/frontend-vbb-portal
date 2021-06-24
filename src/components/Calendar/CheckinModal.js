import React, { useEffect, useState } from 'react';
import { Modal, Switch } from 'antd';

import {
  meetingStatus,
  deriveStatus,
} from '../../util';

import '../../less/calendar.less';

const CheckinModal = ({
  details,
  isModalVisiable,
  setClickSelected,
  setIsModalVisible,
}) => {
  const {
    checkedIn,
    end,
    mentor,
    resourceId,
    start,
    student,
    title,
  } = details;
  const dayString = start ? start.toLocaleDateString() : '';
  const startString = start ? start.toLocaleTimeString() : '';
  const endString = end ? end.toLocaleTimeString() : '';

  const [status, setStatus] = useState(deriveStatus({ start, end, checkedIn }));
  const [statusUpdateInterval, setStatusUpdateInterval] = useState(0);

  const updateStatus = () => {
    const curStatus = deriveStatus({ start, end, checkedIn });

    if (status !== curStatus) {
      setStatus(curStatus);
    }
  };

  const clearStatusUpdateInterval = () => {
    if (statusUpdateInterval !== 0) {
      clearInterval(statusUpdateInterval);
    }
  };

  useEffect(() => {
    switch (status) {
      case meetingStatus.PRE_CHECK_IN:
      case meetingStatus.NOT_CHECK_IN:
        setStatusUpdateInterval(() => {
          clearStatusUpdateInterval();
          return setInterval(updateStatus, 1000);
        });
        return clearStatusUpdateInterval;
      default:
        break;
    }
  }, [status]);
    
  useEffect(() => {
    return clearStatusUpdateInterval;
  }, [statusUpdateInterval]);

  const handleOk = () => {
    setIsModalVisible(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!start) return (<>loading</>);



  const handleCheckIn = () => {
      setClickSelected({
          ...details,
          checkedIn: !checkedIn
      });
  }

  return (
    <Modal 
      visible={isModalVisiable}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ textAlign: "center"}}
    >
      <h6 style={{
          textTransform: 'uppercase', 
          fontSize: '.75rem', 
          paddingBottom: '1rem', 
          color: checkedIn ? '#52c41a' : 'red'
      }}>
        Status: {checkedIn ? 'checked-in' : 'not checked-in'}
      </h6>
      <h2>{title}</h2>
        {
        // If the details haven't loaded yet do not display, to handle toLocalDateString() error
        dayString &&
        <p>
          <strong>When: </strong> 
          {dayString} {startString} - {endString}
        </p>
        }
        <p>
          <strong>Mentor: </strong> 
          {mentor} 
        </p>
        <p> 
          <strong>Student: </strong> 
          {student}
        </p>
        <p>
          <strong>Computer: </strong> 
          {resourceId}
        </p>
        <Switch
          checked={checkedIn} 
          checkedChildren="Student Checked In"
          unCheckedChildren="Check-in Student"
          disabled={status === meetingStatus.PRE_CHECK_IN}
          onChange={handleCheckIn}
        />
    </Modal>
  );
};

export default CheckinModal;
