import React from 'react';
import { Modal, Button, Switch } from 'antd';
import { CheckCircleOutlined, CheckCircleTwoTone, PropertySafetyFilled } from '@ant-design/icons';
import Moment from 'moment';

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

  if(!start) {
      return(
          <>
              loading
          </>
      )
  }

  console.log(details)

  const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
  const dayString = start.toLocaleDateString();
  const startString = start.toLocaleTimeString();
  const endString = end.toLocaleTimeString();


  const isCheckedIn = checkedIn

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
                  Status: {isCheckedIn ? 'checked-in' : 'not checked-in'}</h6>
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
          checked={isCheckedIn} 
          checkedChildren="Student Checked In" unCheckedChildren="Check-in Student"
          disabled={Moment(start).isAfter(Moment(Date.now()).subtract(30, 'minute'))}
          onChange={handleCheckIn}
      />
    </Modal>
  );
}

export default CheckinModal;
