import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import StudentInfoDisplay from './StudentInfoDisplay';
import StudentInfoEdit from './StudentInfoEdit';
import { setModalConfig } from '../../redux/actions';

const StudentInfoModal = ({ user, setModalConfig }) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (editing) {
      setModalConfig({
        footer: undefined, // tells BaseModal to use antd's default footer, instead of no footer
        onOk: () => setEditing(false), //replace with appropriate redux actions to submit changes
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
    <StudentInfoEdit user={user} />
  ) : (
    <StudentInfoDisplay user={user} />
  );
};

export default connect(null, { setModalConfig })(StudentInfoModal);
