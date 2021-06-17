import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Form, Checkbox } from 'antd';

import '../../../less/index.less';

const Newsletter = ({ registrationForm, setRegistrationForm }) => {
  return (
    <Form.Item>
      <Checkbox
        className="border-radius-10"
        checked={registrationForm.subToNewsLetter}
        onChange={(e) => {
          const updatedRegForm = {
            ...registrationForm,
            subToNewsLetter: e.target.checked,
          };
          setRegistrationForm(updatedRegForm);
        }}
      >
        I would like to receive the VBB newsletter.
      </Checkbox>
    </Form.Item>
  );
};

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(Newsletter);
