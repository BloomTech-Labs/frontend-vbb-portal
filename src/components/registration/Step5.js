import React from 'react';
// import { connect } from 'react-redux';
import {
  Form,
  Select,
  Input,
  Tooltip,
  Checkbox,
  Row,
  Col,
  Image
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import MenteePicture from '../../images/vbb-mentee-computer.png';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 16,
  },
};

export const Step5 = (props) => {
  const [form] = Form.useForm();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log('Form values: ', values);
  };

  // For checkbox
  function onCheckboxChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  if (props.currentStep !== 5) {
    return null;
  }

  return (
    <div>
      <Row>
        <Col span={12}>
          <Form
            {...layout}
            form={form}
            name="register"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              more_involved: '',
              desired_involvement: '',
              city: ''
            }}
            scrollToFirstError
          >
            <Form.Item
              name="more_involved"
              label={
                <span>
                  Our organization is built by volunteers like you, and we need your help to spread hope through books. Would you like to get more involved?
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'This field is required.',
                  whitespace: true,
                },
              ]}
            >
              <Select onChange={handleChange}>
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="desired_involvement"
              label='How would you like to get more involved (check all that apply)'
              rules={[
                {
                  required: true,
                  message: 'Please select at least one box.',
                  whitespace: true,
                },
              ]}
            >
              <Checkbox.Group style={{ width: '100%' }} onCheckboxChange={onCheckboxChange}>
                <Row>
                  <Col span={16}>
                    <Checkbox value="A">Run or help with a fundraiser</Checkbox>
                  </Col>
                  <Col span={16}>
                    <Checkbox value="B">Be a social media advocate or an ambassador</Checkbox>
                  </Col>
                  <Col span={16}>
                    <Checkbox value="C">Start / join a VBB Village Mentors Chapter</Checkbox>
                  </Col>
                  <Col span={16}>
                    <Checkbox value="D">Start / Join a Book Club</Checkbox>
                  </Col>
                  <Col span={16}>
                    <Checkbox value="E">Research</Checkbox>
                  </Col>
                  <Col span={16}>
                    <Checkbox value="E">Other</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              name="city"
              label={
                <span>
                  What city and state/province do you live in&nbsp;
                  <Tooltip title="i.e. New York, NY">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Location is required.',
                  whitespace: true,
                },
              ]}
            >
              <Input />
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

// export default connect(mapStateToProps)(Step5)
export default Step5;