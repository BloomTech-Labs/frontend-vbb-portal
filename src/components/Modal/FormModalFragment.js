import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { withRouter } from 'react-router';
import { Form, Tooltip, Input, Button } from 'antd';

const FormModalContent = (props) => {
  const [student, setStudent] = React.useState(props.user);
  const validateChange = (e) => {
    yup
      .reach(menteeLoginSchema, e.target.name)
      .validate()
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.value]: '',
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };
  const changeHandler = (e) => {
    e.persist();
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
    validateChange(e);
  };
  return (
    <Form className="StudentInfoForm">
      <label className="label">
        First Name
        <br></br>
        <input
          name="first_name"
          onChange={changeHandler}
          value=""
          placeholder="First Name"
        />
      </label>
      <label className="label">
        Last Name
        <br></br>
        <input
          name="last_name"
          onChange={changeHandler}
          value=""
          placeholder="Last Name"
        />
      </label>
      <br></br>
      <label className="label">
        Date of Birth
        <br></br>
        <input
          name="date_of_birth"
          onChange={changeHandler}
          value=""
          placeholder="Date of Birth"
        />
      </label>
      <label className="label">
        Personal Email
        <br></br>
        <input
          name="personal_email"
          onChange={changeHandler}
          value=""
          placeholder="Email"
        />
      </label>
      <label className="label">
        Location
        <br></br>
        <input
          name="city"
          onChange={changeHandler}
          value=""
          placeholder="City Name"
        />
      </label>
      <Button>Save</Button>
    </Form>
  );
};
export default withRouter(connect(null, actions)(FormModalContent));
