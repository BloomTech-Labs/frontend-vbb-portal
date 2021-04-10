import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import * as actions from '../redux/actions';
import Logo from '../images/vbb-picture-logo.png';

/**
 * HomeSignin.
 * Connected functional component
 * Displays Google Signin button and Register button
 *
 * @param { Type History } history from react router dom
 * @param {redux action} logIn current action from login import as a connected component
 * @param {redux action} manageFailedGoogleLogin current action from login import as a connected component
 */
const HomeSignin = ({ history, logIn, manageFailedGoogleLogin, registrationForm, setRegistrationForm }) => {
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Form.Item
            label="Email"
            rules={[{ required: true, message: 'Email is required.' }]}
          >
            <Input
              prefix={<UserOutlined />}
              type="text"
              value={registrationForm.email}
              onChange={(e)=> {
                const updatedRegForm = {
                  ...registrationForm,
                  email: e.target.value
                }
                setRegistrationForm(updatedRegForm)
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
              value={registrationForm.password}
              onChange={(e)=> {
                const updatedRegForm = {
                  ...registrationForm,
                  password: e.target.value
                }
                setRegistrationForm(updatedRegForm)
              }}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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
          >
            Log In
          </Button>
        </Form.Item>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={(res) => logIn(res.accessToken, history)}
          onFailure={(res) => manageFailedGoogleLogin(res)}
          cookiePolicy={'single_host_origin'}
        />
        <p style={{ margin: '1rem 0' }}>
          Don't have an account with us yet?
          <Button
            style={{ lineHeight: '.5' }}
            type="link"
            href="/signup/"
          >
            Register
          </Button>
        </p>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(HomeSignin);
