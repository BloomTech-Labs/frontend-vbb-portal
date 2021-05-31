import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  FormOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import * as actions from '../redux/actions';
import { withRouter, Link } from 'react-router-dom';

import Logo from '../images/vbb-picture-logo.png';

/**
 * HomeSignin
 * Connected functional component
 * Displays Google Signin button and Register button
 *
 * @param { Type History } history from react router dom
 * @param {redux store} authToken authentication token from redux store
 * @param {redux store} registrationForm registration form from redux store
 * @param {redux action} setRegistrationForm sets the registration form
 * @param {redux action} logInEmailPassword logs in a user with email and password ( non-google login and dev login route)
 * @param {redux action} logIn action from login import as a connected component
 * @param {redux action} manageFailedGoogleLogin action from login import as a connected component
 */
const HomeSignin = ({
  history,
  authToken,
  registrationForm,
  setRegistrationForm,
  logInEmailPassword,
  logIn, // used for google auth commented out for dev
  manageFailedGoogleLogin, // used for google auth commented out for dev
}) => {
  return (
    <Row justify="center" align="middle">
      <Col
        span={24}
        style={{
          textAlign: 'center',
        }}
      >
        <img
          src={Logo}
          alt="VBB logo icon"
          width="100"
          height="75"
          style={{ margin: '1rem' }}
        ></img>
        <h1 style={{ margin: '1rem 0' }}>Village Portal</h1>
        <h4 style={{ margin: '1rem 0 2rem 0' }}>
          Let's give hope to children through mentoring.
        </h4>
        <Form
          name="Login"
          onSubmit={() => {
            logInEmailPassword(history);
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Form.Item
              label="Email"
              rules={[{ required: true, message: 'Email is required.' }]}
            >
              <Input
                prefix={<UserOutlined />}
                type="text"
                name="Email"
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
            <Form.Item
              label="Password"
              rules={[{ required: true, message: 'Password is required.' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                name="Password"
                value={registrationForm.password}
                onChange={(e) => {
                  const updatedRegForm = {
                    ...registrationForm,
                    password: e.target.value,
                  };
                  setRegistrationForm(updatedRegForm);
                }}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </div>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">
              Forgot password
            </a>
          </Form.Item> */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                logInEmailPassword(history);
              }}
            >
              Log In
              <LoginOutlined style={{ color: 'white' }} />
            </Button>
          </Form.Item>
          {/* GoogleLogin commented out for ease of local development until production ready */}
          {/* <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={(res) => logIn(res.accessToken, history)}
            onFailure={(res) => manageFailedGoogleLogin(res)}
            cookiePolicy={'single_host_origin'}
          /> */}
        </Form>
        <p style={{ margin: '1rem 0' }}>Don't have an account with us yet?</p>
        <Link to="/signupMentor/">
          <Button style={{ lineHeight: '.5' }}>
            Looking to teach? Be A Mentor!
            <FormOutlined />
          </Button>
        </Link>
        <Link to="/signupMentee/">
          <Button style={{ lineHeight: '.5' }}>
            Ready to Learn? Register A Mentee
            <FormOutlined />
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    registrationForm: state.registrationForm,
    authToken: state.authToken,
  };
};

export default withRouter(connect(mapStateToProps, actions)(HomeSignin));
