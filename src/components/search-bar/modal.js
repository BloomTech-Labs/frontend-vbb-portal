import React from "react";
import { Modal, Button} from 'antd';

const UserModal = () => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');
      
    const showModal = () => {
        setVisible(true);
    };
      
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
        }, 2000);
    };
      
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                this will be the search bar
            </Button> */}
            <Modal
                title="Mentee Name"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>Mentee data</p>
                <p>Mentee data</p>
                <p>Mentee data</p>
            <Button>
                Edit mentee
            </Button>
            </Modal>
      </>
    );
};

export default UserModal;