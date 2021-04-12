import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Form, Checkbox } from 'antd';

const IsAdult = ({ registrationForm, setRegistrationForm }) => {
  return (
    <Form.Item label="Are you 18 years of age or older">
      <Checkbox
        checked={registrationForm.is_adult}
        onChange={(e) => {
          const updatedRegForm = {
            ...registrationForm,
            is_adult: e.target.checked,
          };
          setRegistrationForm(updatedRegForm);
        }}
      >
        Yes
      </Checkbox>
      <Checkbox
        checked={!registrationForm.is_adult}
        onChange={(e) => {
          const updatedRegForm = {
            ...registrationForm,
            is_adult: !e.target.checked,
          };
          setRegistrationForm(updatedRegForm);
        }}
      >
        No
      </Checkbox>
    </Form.Item>
  );
};

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(IsAdult);
