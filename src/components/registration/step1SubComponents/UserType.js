import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Form, Select } from 'antd';

const UserType = ({ user, setUser }) => {
  const { Option } = Select;
  return (
    <Form.Item
      name="user type"
      label="What is your affiliation with VBB?"
      rules={[
        {
          required: true,
          message: 'Affiliation is required.',
          whitespace: true,
        },
      ]}
    >
      <Select
        value={user}
        onChange={(e) => {
            const updatedUser = {
              ...user,
              userType: e.target.value
            };
            setUser(updatedUser);
          }}
      >
        <Option value="Mentor">Mentor</Option>
        <Option value="Student">Student</Option>
        <Option value="Teacher">Teacher</Option>
        <Option value="Headmaster">Headmaster</Option>
        <Option value="Director">Director</Option>
        <Option value="Advisor">Advisor</Option>
      </Select>
    </Form.Item>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, actions)(UserType);
