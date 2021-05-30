import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { withRouter } from 'react-router';
import { Form, Tooltip, Input } from 'antd';
import { Formik, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
//https://codesandbox.io/s/building-multi-step-form-with-formik-yup-3ro0d?file=/src/App.js
const MasterFormMentee = () => {
  const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error" style={{ color: 'red', display: 'block' }}>
            {meta.error}
          </div>
        ) : null}
      </>
    );
  };

  const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <>
        <label className="checkbox">
          <input {...field} {...props} type="checkbox" />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error" style={{ color: 'red', display: 'block' }}>
            {meta.error}
          </div>
        ) : null}
      </>
    );
  };

  const MySelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? <span>{meta.error}</span> : null}
      </>
    );
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        acceptedTerms: false, // added for our checkbox
        jobType: '', // added for our select
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email addresss`')
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
        type: Yup.string()
          // specify the set of valid values for job type
          // @see http://bit.ly/yup-mixed-oneOf
          .oneOf(
            ['designer', 'development', 'product', 'other'],
            'Invalid Job Type'
          )
          .required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await new Promise((r) => setTimeout(r, 500));
        setSubmitting(false);
      }}
    >
      <Form style={{ display: 'flex', flexDirection: 'column' }}>
        <MyTextInput
          style={{ width: '10vw' }}
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Jane"
        />
        <MyTextInput
          style={{ width: '10vw' }}
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Doe"
        />
        <MyTextInput
          style={{ width: '10vw' }}
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@formik.com"
        />
        <MySelect label="Type" name="typ" style={{ width: '10vw' }}>
          <option value="">Select a type</option>
          <option value="Mentee">Mentee</option>
          <option value="Mentor">Mentor</option>
          <option value="headmanster">headmanster</option>
          <option value="other">Other</option>
        </MySelect>
        <MyCheckbox name="acceptedTerms" style={{ width: '10vw' }}>
          I accept the terms and conditions
        </MyCheckbox>

        <button type="submit" style={{ width: '10vw' }}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default withRouter(connect(null, actions)(MasterFormMentee));
