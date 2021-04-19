import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Form, Select } from 'antd';

const ReferralSource = ({ registrationForm, setRegistrationForm }) => {
  const { Option } = Select;
  return (
    <Form.Item
      name="referral_source"
      label="How did you hear about this opportunity"
      rules={[
        {
          required: true,
          message: 'Referral field is required.',
          whitespace: true,
        },
      ]}
    >
      <Select
        value={registrationForm.additionalInformation.referralSource}
        onChange={(e) => {
          const updatedRegForm = {
            ...registrationForm,
            additionalInformation: {
              ...registrationForm.additionalInformation,
              referralSource: e,
            },
          };
          setRegistrationForm(updatedRegForm);
        }}
      >
        <Option value="No choice">-</Option>
        <Option value="Friend">Friend</Option>
        <Option value="Google">Google</Option>
        <Option value="FaceBook">FaceBook</Option>
        <Option value="Instagram">Instagram</Option>
        <Option value="LinkedIn">LinkedIn</Option>
        <Option value="JustServe">JustServe</Option>
        <Option value="VolunteerMatch">VolunteerMatch</Option>
        <Option value="Through my organization/school">
          Through my organization/school
        </Option>
        <Option value="Other">Other</Option>
      </Select>
    </Form.Item>
  );
};

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(ReferralSource);
