import React from 'react';
import { Form, Row, Col, Image } from 'antd';

import ActionPicture from '../../images/vbb-in-action.png';
import IsAdult from './step2SubComponents/IsAdult';
import Occupation from './step2SubComponents/Occupation';
import ReferralSource from './step2SubComponents/ReferralSource';
import Language from './step2SubComponents/Language';
import TimeZone from './step2SubComponents/TimeZone';
import Convicted from './step2SubComponents/Convicted';
import MoreThanFourMonths from './step2SubComponents/MoreThanFourMonths';
import Initials from './step2SubComponents/Initials';
import GetMoreInvolved from './step2SubComponents/GetMoreInvolved';
import Address from './step2SubComponents/Address';
import AgreeTermsAndConditions from './step2SubComponents/AgreeTermsAndConditions';
import DesiredInvolvement from './step2SubComponents/DesiredInvolvement';

export const Step2 = ({ currentStep }) => {
  if (currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={16} xl={12}>
          <Form name="register" layout="vertical" scrollToFirstError>
            <IsAdult />
            <Occupation />
            <ReferralSource />
            <Language />
            <TimeZone />
            <Convicted />
            <MoreThanFourMonths />
            <Initials />
            <GetMoreInvolved />
            <DesiredInvolvement />
            <Address />
            <AgreeTermsAndConditions />
          </Form>
        </Col>
        <Col xs={0} sm={0} md={0} lg={8} xl={12}>
          <div style={{ padding: '0 10px' }}>
            <Image src={ActionPicture}></Image>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Step2;
