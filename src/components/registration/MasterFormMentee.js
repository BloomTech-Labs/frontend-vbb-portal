import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  setModalConfig,
  closeModal,
  registerMentee,
} from '../../redux/actions';
import { Form, Input } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const MasterFormMentee = ({ setModalConfig, closeModal, registerMentee }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    setModalConfig({
      footer: undefined,
      onOk: () => {
        form
          .validateFields()
          .then((values) => {
            registerMentee({ ...values, user_type: 'student' });
            closeModal();
          })
          .catch(() => {});
      },
      onCancel: () => closeModal(),
      okText: 'Submit',
    });
  }, []);

  return (
    <Form className="StudentInfoForm" {...layout} form={form}>
      <Form.Item
        name="first_name"
        label="First Name"
        rules={[{ required: true, message: 'First Name Required' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="last_name"
        label="Last Name"
        rules={[{ required: true, message: 'Last Name Required' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="date_of_birth"
        label="Date of Birth"
        rules={[{ required: true, message: 'DOB Required' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="personal_email"
        label="Personal Email"
        rules={[{ required: true, message: 'Email Required' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="Location"
        rules={[{ required: true, message: 'Location Required' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default connect(null, { setModalConfig, closeModal, registerMentee })(
  MasterFormMentee
);
