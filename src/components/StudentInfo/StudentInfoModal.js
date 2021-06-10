import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import SearchModalFragment from './StudentInfoDisplay';
import StudentInfo from './StudentInfoEdit';
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
    <StudentInfo user={user} />
  ) : (
    <SearchModalFragment user={user} />
  );
};

export default connect(null, { setConfig })(StudentInfoModal);
