import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import { RightOutlined, LeftOutlined, CheckOutlined } from '@ant-design/icons';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import ProgressBar from './ProgressBar';

const MasterForm = ({
  registerForNewsletter,
  subUserRegistration,
  history,
}) => {
  let [currentStep, setCurrentStep] = useState(1);

  // allows users to navigate form by selecting individual steps
  const onChange = (currentStep) => {
    setCurrentStep(currentStep + 1);
  };

  const next = () => {
    window.scrollTo(0, 0);
    currentStep = currentStep === 4 ? 4 : currentStep + 1;
    setCurrentStep(currentStep);
  };

  const back = () => {
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setCurrentStep(currentStep);
  };

  const backButton = () => {
    if (currentStep === 2 || currentStep === 3) {
      return (
        <Button style={{ marginRight: '10px' }} type="button" onClick={back}>
          <LeftOutlined />
          Previous
        </Button>
      );
    }
    return null;
  };

  const nextButton = () => {
    switch (currentStep) {
      case 1:
        return (
          <Button
            style={{ marginRight: '10px' }}
            type="button"
            onClick={() => {
              //@todo: how do we handle previously submitted user?
              registerForNewsletter();
              next();
            }}
          >
            Next
            <RightOutlined />
          </Button>
        );

      case 2:
        return (
          <Button style={{ marginRight: '10px' }} type="button" onClick={next}>
            Next
            <RightOutlined />
          </Button>
        );
      default:
        return null;
    }
  };

  const registerButton = () => {
    if (currentStep === 3) {
      return (
        <Button
          style={{ marginRight: '10px' }}
          type="button"
          onClick={() => {
            subUserRegistration(history);
          }}
        >
          Register
          <CheckOutlined />
        </Button>
      );
    }
    return null;
  };

  return (
    <div>
      {currentStep < 4 ? (
        <div style={{ margin: '0 0 25px 0' }}>
          <ProgressBar currentStep={currentStep} onChange={onChange} />
        </div>
      ) : (
        <div></div>
      )}

      <div>
        <Step1 currentStep={currentStep} />
        <Step2 currentStep={currentStep} />
        <Step3 currentStep={currentStep} />
        <Step4 currentStep={currentStep} />
        {backButton()}
        {nextButton()}
        {registerButton()}
      </div>
    </div>
  );
};

export default withRouter(connect(null, actions)(MasterForm));
