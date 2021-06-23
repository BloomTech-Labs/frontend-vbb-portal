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

const mapStateToProps = (state, { userId, userType }) => {
  const user = state.searchBarReducer.results[userType].find(
    (e) => e.id === userId
  );

  return { user };
};

export default connect(mapStateToProps, { setModalConfig, editUser })(
  StudentInfoModal
);
