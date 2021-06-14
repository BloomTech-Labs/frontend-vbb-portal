import React from 'react'
import { Modal, Button, Switch } from 'antd'
import { CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons';

const CheckinModal = (props) => {

    if(!props.details.start) {
        return(
            <>
                loading
            </>
        )
    }

    console.log(props.details)

    const handleOk = () => {
        props.setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        props.setIsModalVisible(false);
      };
    
    const day = props.details.start.toLocaleDateString()
    const start = props.details.start.toLocaleTimeString()
    const end = props.details.end.toLocaleTimeString()


    const checkedIn = props.details.checkedIn

    const handleCheckIn = () => {
        props.setClickSelected({
            ...props.details,
            checkedIn: !props.details.checkedIn
        })
        console.log(props.details)
    }


    return (
        <Modal 
            visible={props.isModalVisiable}
            onOk={handleOk}
            onCancel={handleCancel}
            style={{ textAlign: "center"}}
        >
            <h6 style={{
                textTransform: 'uppercase', 
                fontSize: '.75rem', 
                paddingBottom: '1rem', 
                color: props.details.checkedIn ? '#52c41a' : 'red'
                }}>
                    Status: {checkedIn ? 'checked-in' : 'not checked-in'}</h6>
          <h2>{props.details.title}</h2>
            {
          //If the details haven't loaded yet do not display, to handle toLocalDateString() error
            day &&
            <p>
                <strong>When: </strong> 
                {day} {start} - {end}
            </p>
            }
            <p>
                <strong>Mentor: </strong> 
                {props.details.mentor} 
            </p>
            <p> 
                <strong>Mentee: </strong> 
                {props.details.student}
            </p>
            <p>
              <strong>Computer: </strong> 
              {props.details.resourceId}
            </p>
          <Button
            type={checkedIn ? 'primary' : ''}
            icon={checkedIn ? <CheckCircleTwoTone twoToneColor="primary" /> : ''}
            shape={'round'}
            onClick={handleCheckIn}
          >
            {
                checkedIn 
                ? 'Student is Checked-in'
                : 'Check-in Student'
            }
          </Button>
          {/* <Switch
            checked={checkedIn} 
            checkedChildren="Student Checked In" unCheckedChildren="Check-in Student"
            onChange={handleCheckIn}
        /> */}
      </Modal>
    )
}

export default CheckinModal
