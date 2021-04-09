import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Form, Select } from 'antd';

const UserType = ({ registrationForm, setRegistrationForm }) => {
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
        value={registrationForm}
        onChange={(e) => {
            const updatedRegForm = {
              ...registrationForm,
              userType: e.target.value
            };
            setRegistrationForm(updatedRegForm);
          }}
      >
        <Option value="Mentor">Homemaker</Option>
        <Option value="Student">Retired</Option>
        <Option value="Headmaster">Working Professional</Option>
        <Option value="Library Administrator">College Student</Option>
        <Option value="Teacher">High School Student</Option>
        <Option value="Other">Other</Option>
      </Select>
    </Form.Item>
  );
};

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(UserType);
