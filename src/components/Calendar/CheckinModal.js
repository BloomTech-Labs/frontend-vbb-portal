import React, { useEffect, useState } from 'react';
import { Modal, Switch } from 'antd';
import Moment from 'moment';

import '../../less/calendar.less';

const meetingStatus = {
  CHECKED_IN: 'CHECKED_IN',
  PRE_CHECK_IN: 'PRE_CHECK_IN',
  NOT_CHECK_IN: 'NOT_CHECKED_IN',
  EXPIRED: 'EXPIRED',
};

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
  const dayString = start.toLocaleDateString();
  const startString = start.toLocaleTimeString();
  const endString = end.toLocaleTimeString();
  
  const handleOk = () => {
    setIsModalVisible(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };



  const deriveStatus = ({ start, end, checkedIn }) => {
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

  // const [appointmentStatus, setAppointmentStatus] = useState();

  // useEffect(() => {
  //   switchStatusInterval = setInterval(() => {
      
  //   }, 1000);
  // }, []);

  if(!start) {
      return(
          <>
              loading
          </>
      )
  }

  console.log(details)


  const handleCheckIn = () => {
      setClickSelected({
          ...details,
          checkedIn: !checkedIn
      });
      console.log(details);
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
                  Status: {checkedIn ? 'checked-in' : 'not checked-in'}</h6>
        <h2>{title}</h2>
          {
        //If the details haven't loaded yet do not display, to handle toLocalDateString() error
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
          checkedChildren="Student Checked In" unCheckedChildren="Check-in Student"
          disabled={Moment(start).isAfter(Moment(Date.now()).subtract(30, 'minute'))}
          onChange={handleCheckIn}
      />
    </Modal>
  );
}

export default CheckinModal;
