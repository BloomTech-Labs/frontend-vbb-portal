import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { Button, Form } from 'antd';
import { RightOutlined, LeftOutlined, CheckOutlined } from '@ant-design/icons';
// import * as actions from '../../redux/actions';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import SuccessStep from './SuccessStep';
import ProgressBar from './ProgressBar';

const MasterForm = () => {
  let [currentStep, setCurrentStep] = useState(1);

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
          style={{ marginRight: '10px'}}
          type="button"
          onClick={back}
        >
          <LeftOutlined />
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
          style={{ marginRight: '10px'}}
          type="button"
          onClick={next}
        >
          Next
          <RightOutlined />
        </Button>
      );
    }
    return null;
  }

  const signupButton = () => {
    if (currentStep === 5) {
      return (
        <Button
          type="button"
          onClick={next}
        >
          Register
          <CheckOutlined />
        </Button>
      );
    }
    return null;
  }

  return (
    <div>
      {currentStep < 6 ? (
        <div style={{ margin: '0 0 25px 0' }}>
          <ProgressBar
            currentStep={currentStep}
          />
      </div>
      ) : (
        <div style={{ margin: '0 0 25px 0' }}>
          <ProgressBar
            currentStep={currentStep}
          />
        </div>
      )}

      <Form>
        <Step1
          currentStep={currentStep}
        />
        <Step2
          currentStep={currentStep}
        />
        <Step3
          currentStep={currentStep}
        />
        <Step4
          currentStep={currentStep}
        />
        <Step5
          currentStep={currentStep}
        />
        <SuccessStep
          currentStep={currentStep}
        />
        {backButton()}
        {nextButton()}
        {signupButton()}
      </Form>
    </div>
  );
};

export default MasterForm;
