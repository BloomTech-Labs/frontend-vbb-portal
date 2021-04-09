import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { Form, Row, Col, Image } from 'antd';

import MenteePicture from '../../images/vbb-mentee-computer.png';
import FirstName from '../registration/step1SubComponents/FirstName';
import LastName from '../registration/step1SubComponents/LastName';
import Phone from '../registration/step1SubComponents/Phone';
import Email from '../registration/step1SubComponents/Email';
import Newsletter from '../registration/step1SubComponents/Newsletter';

export const Step1 = ({
  currentStep,
  registrationForm,
  setRegistrationForm,
}) => {
  if (currentStep !== 1) {
    return null;
  }
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={16} xl={12}>
          <Form layout="vertical" scrollToFirstError>
            <FirstName />
            <LastName />
            <Phone />
            <Email />
            <Newsletter />
          </Form>
        </Col>
        <Col xs={0} sm={0} md={0} lg={8} xl={12}>
          <div style={{ padding: '0 10px' }}>
            <Image src={MenteePicture}></Image>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(Step1);
