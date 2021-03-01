import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { Button } from 'antd';
// import timezone from 'moment-timezone';
// import * as actions from '../../redux/actions';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import SuccessStep from './SuccessStep';

const initialFormValues = {
  currentStep: 1,
  firstname: '',
  lastname: '',
  email: '',
  vbbemail: '',
  phone: '',
  newsletter: '',
  adult: '',
  occupation: '',
  vbb_chapter: '',
  affiliation: '',
  referral_source: '',
  languages: '',
  time_zone: '',
  termsCond: '',
  charged: '',
  commit: '',
  initials: '',
  more_involved: '',
  desired_involvement: '',
  city: '',
};

const MasterForm = () => {
  let [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState(initialFormValues);

  const next = () => {
    window.scrollTo(0, 0);
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    setCurrentStep(currentStep);
  };

  const back = () => {
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setCurrentStep(currentStep);
  };

  const backButton = () => {
    if (currentStep !== 1) {
      return (
        <Button
          type="button"
          onClick={back}
        >
          Back
        </Button>
      );
    }
    return null;
  }

  const nextButton = () => {
    if (currentStep < 5) {
      return (
        <Button
          type="button"
          onClick={next}
        >
          Next
        </Button>
      );
    }
    return null;
  }

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = ((event) => {
    event.preventDefault();
    setCurrentStep(6);
  });

  return (
    <div className="signup-form">
      {currentStep < 6 ? (
        <h1 id="signup-header">
          Mentor Registration: Step {currentStep} of 5
        </h1>
      ) : (
        <h1 id="signup-header">Form Submitted!</h1>
      )}
      <form onSubmit={handleSubmit}>
        <Step1
          currentStep={currentStep}
          handleChange={handleChange}
        />

        <Step2
          currentStep={currentStep}
          handleChange={handleChange}
        />

        <Step3
          currentStep={currentStep}
          handleChange={handleChange}
        />

        <Step4
          currentStep={currentStep}
          handleChange={handleChange}
        />

        <Step5
          currentStep={currentStep}
          handleChange={handleChange}
        />

        <SuccessStep
          currentStep={currentStep}
          handleChange={handleChange}
        />

        {backButton()}
        {nextButton()}
      </form>
    </div>
  );
};

export default MasterForm;
