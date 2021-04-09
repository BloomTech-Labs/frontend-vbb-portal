import React from 'react';
import { Form, Row, Col } from 'antd';

import IsAdult from './step2SubComponents/IsAdult';
import TimeZone from './step2SubComponents/TimeZone';
import Address from './step2SubComponents/Address';

function TempRegistration() {
    return (
        <div>
        <h1>User Registration</h1>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16} xl={12}>
                    <Form name="register" layout="vertical" scrollToFirstError>
                    <IsAdult />
                    <TimeZone />
                    <Address />
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default TempRegistration

