import React from 'react';
import { Form, Row, Col } from 'antd';

import Email from './step1SubComponents/Email';
import FirstName from './step1SubComponents/FirstName';
import LastName from './step1SubComponents/LastName';
import Newsletter from './step1SubComponents/Newsletter';
import Phone from './step1SubComponents/Phone';
import TimeZone from './step2SubComponents/TimeZone';
import Address from './step2SubComponents/Address';

function TempRegistration() {
    return (
        <div>
        <h1>User Registration</h1>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16} xl={12}>
                    <Form name="register" layout="vertical" scrollToFirstError>
                        <Email />
                        <FirstName />
                        <LastName />
                        <Newsletter />
                        <Phone />
                        <TimeZone />
                        <Address />
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default TempRegistration

