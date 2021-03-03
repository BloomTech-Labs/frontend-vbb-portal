import React from 'react';
// import { connect } from 'react-redux';
import {
  Form,
  Input,
  Tooltip,
  Checkbox,
  Select,
  Row,
  Col,
  Image,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import countryCodes from 'country-codes-list';
import MenteePicture from '../../images/vbb-mentee-computer.png';

const { Option } = Select;

//Phone number country code dropdown using country-code-list package
const countryCodesObject = countryCodes.customList('countryCode', '+{countryCallingCode}');
const countryCodesArray = Object.values(countryCodesObject)
const countryCodeList = countryCodesArray.map((countryCode) => {
  return (
    <Option value={countryCode}>{countryCode}</Option>
  )
})

//Need to add autocomplete in place of country code prefix dropdown
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 100,
      }}
    >
      { countryCodeList }
    </Select>
  </Form.Item>
);

export const Step1 = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values: ', values);
  };

  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <Row>
        <Col span={12}>
          <Form
            form={form}
            name="register"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              firstname: '',
              lastname: '',
              phone: '',
              email: '',
              newsletter: true,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="firstname"
              label={
                <span>
                  First Name&nbsp;
                  <Tooltip title="i.e. John">
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
              <Input />
            </Form.Item>
            <Form.Item
              name="lastname"
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
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Phone number is required.',
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item
              name="email"
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
              <Input />
            </Form.Item>
            <Form.Item
              name="newsletter"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(),
                },
              ]}
            >
              <Checkbox>
                I would like to receive the VBB newsletter.
              </Checkbox>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <div style={{ padding: '0 10px' }}>
              <Image src={MenteePicture}></Image>
          </div>
        </Col>
      </Row>
    </div>
  );
}

// const mapStateToProps = (state) => ({
  
// })

// export default connect(mapStateToProps)(Step1)
export default Step1;
