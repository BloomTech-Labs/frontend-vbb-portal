import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import StudentInfoDisplay from './StudentInfoDisplay';
import StudentInfoEdit from './StudentInfoEdit';
import { setModalConfig } from '../../redux/actions';
import { editUser } from '../../redux/StudentEdit.redux/StudentEdit.actions';

const StudentInfoModal = ({ user, setModalConfig, editUser }) => {
  const [editing, setEditing] = useState(false);
  const [changes, setChanges] = React.useState(user);
  console.log(changes);

  const changeHandler = (e) => {
    setChanges({
      ...changes,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (changes) => {
    editUser(changes);
    setEditing(false);
  };

  useEffect(() => {
    if (editing) {
      setModalConfig({
        footer: undefined, // tells BaseModal to use antd's default footer, instead of no footer
        onOk: () => onSubmit(changes), //replace with appropriate redux actions to submit changes
        onCancel: () => setEditing(false),
        okText: 'Submit',
      });
    } else {
      setModalConfig({
        footer: <Button onClick={() => setEditing(true)}>Edit</Button>,
      });
    }
  }, [editing, changes]);

  return editing ? (
    <StudentInfoEdit user={changes} changeHandler={changeHandler} />
  ) : (
    <StudentInfoDisplay user={user} />
  );
};

export default connect(null, { setModalConfig, editUser })(StudentInfoModal);
