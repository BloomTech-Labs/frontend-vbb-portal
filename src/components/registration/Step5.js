import React from 'react';
// import { connect } from 'react-redux';
import {
  Form,
  Select,
  Input,
  Tooltip,
  Checkbox
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

export const Step5 = (props) => {
  const [form] = Form.useForm();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log('Form values: ', values);
  };

  // For checkbox
  let options = ['Run or help with a fundraiser', ' Be a social media advocate or an ambassador', 'Start/join a VBB Village Mentors Chapter at your school or company (a club of fellow mentors)', 'Start/Join a Book Club', 'Research', 'Other'];

  function onCheckboxChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  if (props.currentStep !== 5) {
    return null;
  }

  return (
    <div>
    <Form
      form={form}
      name="register"
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
        <Select style={{ width: 120 }} onChange={handleChange}>
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
            // message: 'Please select at least one box.',
            whitespace: true,
          },
        ]}
      >
        <Checkbox.Group options={options} onCheckboxChange={onCheckboxChange} />
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
    </div>
  );
}

// const mapStateToProps = (state) => ({
  
// })

// export default connect(mapStateToProps)(Step5)
export default Step5;