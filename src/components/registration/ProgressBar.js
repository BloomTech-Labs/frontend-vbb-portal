import React from 'react';
import { Steps, Card } from 'antd';
import {
  IdcardOutlined,
  FormOutlined,
  GiftOutlined,
  CheckOutlined,
} from '@ant-design/icons';

import '../../less/index.less';

export const ProgressBar = (props) => {
  const { Step } = Steps;

  console.log('Progress bar props:', props);

  const progressBarStatus = (step) => {
    if (props.currentStep > step) {
      return 'wait';
    } else if (props.currentStep === step) {
      return 'process';
    } else {
      return 'finish';
    }
  };

  const pageTitle = () => {
    if (props.currentStep === 3) {
      return (
        <h1 className="padding-10-0">Support Your Mentee with a Gift!</h1>
      );
    } else {
      return <h1 className="padding-10-0">Mentor Registration</h1>;
    }
  };

  return (
    <Card className="margin-bottom-50">
      <div>{pageTitle()}</div>
      <Steps
        current={props.currentStep}
        onChange={props.onChange}
        responsive="true"
      >
        <Step status="wait" title="Step 1" icon={<IdcardOutlined />} />
        <Step
          status={progressBarStatus(2)}
          title="Step 2"
          icon={<FormOutlined />}
        />
        <Step
          status={progressBarStatus(3)}
          title="Step 3"
          icon={<GiftOutlined />}
        />
        <Step
          status={progressBarStatus(4)}
          title="Complete"
          icon={<CheckOutlined />}
        />
      </Steps>
    </Card>
  );
};

// const mapStateToProps = (state) => ({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)
export default ProgressBar;
