import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'antd';

import StudentInfoDisplay from './StudentInfoDisplay';
import StudentInfoEdit from './StudentInfoEdit';
import { setModalConfig } from '../../redux/actions';
import { editUser } from '../../redux/actions';

const StudentInfoModal = ({ user, setModalConfig, editUser }) => {
  const [editing, setEditing] = useState(false);

  const [form] = Form.useForm();

  const onSubmit = () => {
    form.validateFields().then((values) => {
      console.log('values', values);
      editUser(user.id, values);
      setEditing(false);
    });
  };

  useEffect(() => {
    if (editing) {
      setModalConfig({
        footer: undefined,
        onOk: onSubmit,
        onCancel: () => setEditing(false),
        okText: 'Submit',
      });
    } else {
      setModalConfig({
        footer: <Button onClick={() => setEditing(true)}>Edit</Button>,
      });
    }
  }, [editing]);

  return editing ? (
    <StudentInfoEdit form={form} initialValues={user} />
  ) : (
    <StudentInfoDisplay user={user} />
  );
};

export default connect(null, { setModalConfig, editUser })(StudentInfoModal);
