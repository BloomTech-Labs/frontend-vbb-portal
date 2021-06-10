import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import StudentInfoDisplay from './StudentInfoDisplay';
import StudentInfoEdit from './StudentInfoEdit';
import { setConfig } from '../../redux/actions';

const StudentInfoModal = ({ user, setConfig }) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (editing) {
      setConfig({
        // replace the onClick function for 'Submit' button with a call to appropriate redux action
        footer: (
          <>
            <Button onClick={() => setEditing(false)}>Cancel</Button>
            <Button onClick={() => setEditing(false)}>Submit</Button>
          </>
        ),
      });
    } else {
      setConfig({
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

export default connect(null, { setConfig })(StudentInfoModal);
