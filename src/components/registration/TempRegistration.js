import React from 'react';
import { Form, Row, Col, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import FirstName from './step1SubComponents/FirstName';
import LastName from './step1SubComponents/LastName';
import Email from './step1SubComponents/Email';
import Password from './step1SubComponents/Password';
import Phone from './step1SubComponents/Phone';
import TimeZone from './step2SubComponents/TimeZone';
import Address from './step2SubComponents/Address';
import IsAdult from './step2SubComponents/IsAdult';
import UserType from './step1SubComponents/UserType';

const TempRegistration = ({ subUserRegistration, history }) => {
    return (
        <div>
            <Row justify="center" style={{ margin: '1rem 0' }}>
                <h1>User Registration</h1>
            </Row>
            <Row justify="center">
                <Col xs={24} sm={24} md={24} lg={16} xl={12}>
                    <Form name="register" layout="vertical" scrollToFirstError>
                        <FirstName />
                        <LastName />
                        <Email />
                        <Password />
                        <Phone />
                        <TimeZone />
                        <Address />
                        <IsAdult />
                        <UserType />
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
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default TempRegistration

