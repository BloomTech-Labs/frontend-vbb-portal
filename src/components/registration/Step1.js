import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { Form, Input, Tooltip, Checkbox, Row, Col, Image } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import MenteePicture from '../../images/vbb-mentee-computer.png';

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
            <Form.Item
              label={
                <span>
                  First Name&nbsp;
                  <Tooltip title="i.e. Jane">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'First name is required.',
                  whitespace: true,
                },
              ]}
            >
              <Input
                name="first name"
                value={registrationForm.firstName}
                onChange={(e) => {
                  const updatedRegForm = {
                    ...registrationForm,
                    firstName: e.target.value,
                  };
                  setRegistrationForm(updatedRegForm);
                }}
              />
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Last Name&nbsp;
                  <Tooltip title="i.e. Doe">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'First name is required.',
                  whitespace: true,
                },
              ]}
            >
              <Input
                name="last name"
                value={registrationForm.lastName}
                onChange={(e) => {
                  const updatedRegForm = {
                    ...registrationForm,
                    lastName: e.target.value,
                  };
                  setRegistrationForm(updatedRegForm);
                }}
              />
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Phone&nbsp;
                  <Tooltip title="USA & Canada country code is +1">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Phone number is required.',
                },
              ]}
            >
              <Input
                name="phone"
                style={{
                  width: '100%',
                }}
                placeholder="+1 (123) 123-4567"
                value={registrationForm.phone}
                onChange={(e) => {
                  const updatedRegForm = {
                    ...registrationForm,
                    phone: e.target.value,
                  };
                  setRegistrationForm(updatedRegForm);
                }}
              />
            </Form.Item>
            <Form.Item
              label="Email"
              rules={[
                {
                  type: 'email',
                  message: 'Please enter a valid email address.',
                },
                {
                  required: true,
                  message: 'Email is required.',
                },
              ]}
            >
              <Input
                name="email"
                value={registrationForm.email}
                onChange={(e) => {
                  const updatedRegForm = {
                    ...registrationForm,
                    email: e.target.value,
                  };
                  setRegistrationForm(updatedRegForm);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox
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
