import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { Button } from 'antd';
// import * as actions from '../../redux/actions';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import SuccessStep from './SuccessStep';

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

  const signupButton = () => {
    if (currentStep === 5) {
      return (
        <Button
          type="button"
          onClick={next}
        >
          Signup
        </Button>
      );
    }
    return null;
  }

  return (
    <div>
      {currentStep < 6 ? (
        <h1>
          Mentor Registration
        </h1>
      ) : (
        <h1>Form Submitted!</h1>
      )}

      <form>
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
      </form>
    </div>
  );
};

export default MasterForm;
