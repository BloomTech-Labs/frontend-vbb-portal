import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Form, Tooltip, Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const FirstName = ({ registrationForm, setRegistrationForm }) => {
  return (
    <Form.Item
    label={
      <span>
        First Name&nbsp;
        <Tooltip title="i.e. Jane">
          <QuestionCircleOutlined />
        </Tooltip>
      </span>
    }
    rules={[
      {
        required: true,
        message: 'First name is required.',
        whitespace: true,
      },
    ]}
  >
    <Input
      name="first name"
      value={registrationForm.firstName}
      onChange={(e) => {
        const updatedRegForm = {
          ...registrationForm,
          firstName: e.target.value,
        };
        setRegistrationForm(updatedRegForm);
      }}
    />
    </Form.Item>
  );
};

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(FirstName);
