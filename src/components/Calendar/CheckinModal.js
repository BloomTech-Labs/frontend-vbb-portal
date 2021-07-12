import React, { useState } from 'react';
import { Modal, Switch } from 'antd';

import {
  meetingStatus,
  deriveStatus,
} from '../../util';

import '../../less/calendar.less';
import useManageStatus from '../../hooks/useManageStatus';

const {
  PRE_CHECK_IN,
} = meetingStatus;

const CheckinModal = ({
  details,
  isModalVisible,
  setClickSelected,
  setIsModalVisible,
}) => {
  const {
    checkedIn = false,
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

  useManageStatus({
    checkedIn,
    end,
    setStatus,
    start,
    status,
  });

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
        checkedIn: !checkedIn,
    });
  }

  return (
    <Modal 
      visible={isModalVisible}
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
      <h6>ExactStatus: {status}</h6>
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
          disabled={status === PRE_CHECK_IN}
          onChange={handleCheckIn}
        />
    </Modal>
  );
};

export default CheckinModal;
