import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Form, Input } from 'antd';

const LastName = ({ registrationForm, setRegistrationForm }) => {
    return (
      <Form.Item
        label={
          <span>
            Password&nbsp;
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Password is required.',
            whitespace: true,
          },
        ]}
      >
        <Input
          name="password"
          value={registrationForm.password}
          onChange={(e) => {
            const updatedRegForm = {
              ...registrationForm,
              lastName: e.target.value,
            };
            setRegistrationForm(updatedRegForm);
          }}
        />
      </Form.Item>
    )
}

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(Password);
