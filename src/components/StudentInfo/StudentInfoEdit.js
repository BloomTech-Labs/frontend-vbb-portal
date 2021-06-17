import { Form, Input } from 'antd';

import '../../less/Modal.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const StudentInfoEdit = ({ form, initialValues, lyout }) => {
  return (
    <Form
      name="edit_form"
      form={form}
      initialValues={initialValues}
      className="StudentInfoForm"
      {...lyout ? {...lyout} : {...layout}}
    >
      <Form.Item label="First Name" name="first_name">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name="last_name">
        <Input />
      </Form.Item>
      <Form.Item label="Date of Birth" name="date_of_birth">
        <Input />
      </Form.Item>
      <Form.Item label="Personal Email" name="personal_email">
        <Input />
      </Form.Item>
      <Form.Item label="Location" name="city">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default StudentInfoEdit;
