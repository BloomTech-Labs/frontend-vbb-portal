import React from 'react'
import { Modal, Button } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons';

const CheckinModal = (props) => {
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


    return (
        <Modal 
            visible={props.isModalVisiable}
            onOk={handleOk}
            onCancel={handleCancel}
            style={{ textAlign: "center"}}
        >
            <h6 style={{textTransform: 'uppercase', fontSize: '.75rem', paddingBottom: '1rem', color: 'red'}}>Status: Not Checked-In</h6>
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
            // type={'primary'}
            icon={<CheckCircleOutlined />}
            shape={'round'}
          >
            Check-in Student
          </Button>
      </Modal>
    )
}

export default CheckinModal
