import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Form, Select } from 'antd';

const Occupation = ({ registrationForm, setRegistrationForm }) => {
  const { Option } = Select;
  return (
    <Form.Item
      name="occupation"
      label="Which of the following best describes you"
      rules={[
        {
          required: true,
          message: 'Occupation is required.',
          whitespace: true,
        },
      ]}
    >
      <Select
        value={registrationForm.additionalInformation.workStatus}
        onChange={(e) => {
          const updatedRegForm = {
            ...registrationForm,
            additionalInformation: {
              ...registrationForm.additionalInformation,
              workStatus: e,
            },
          };
          setRegistrationForm(updatedRegForm);
        }}
      >
        {/* Need to add additional questions if college student is selected */}
        <Option value="Homemaker">Homemaker</Option>
        <Option value="Retired">Retired</Option>
        <Option value="Working Professional">Working Professional</Option>
        <Option value="College_Student">College Student</Option>
        <Option value="HS_Student">High School Student</Option>
        <Option value="Other">Other</Option>
      </Select>
    </Form.Item>
  );
};

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(Occupation);
