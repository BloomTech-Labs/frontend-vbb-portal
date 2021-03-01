import React, { useState } from 'react';
// import { connect } from 'react-redux';

import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const Step1 = (props) => {
  console.log("props:", props)
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label={
          <span>
            Nickname&nbsp;
            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
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
        name="website"
        label="Website"
        rules={[
          {
            required: true,
            message: 'Please input website!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

// const mapStateToProps = (state) => ({
  
// })

// export default connect(mapStateToProps)(Step1)
export default Step1;


// function Step1(props) {
//   if (props.state.currentStep !== 1) {
//     return null;
//   }
//   return (
//     <div className="form-group step-form">
//       {/*delete this later*/}
//       <p>
//         This is a new portal. If you experience any problems, please contact us
//         at mentor@villagebookbuilders.org
//       </p>
//       <label htmlFor="firstname">First Name</label>

//       <input
//         className="form-control"
//         id="firstname"
//         name="firstname"
//         required
//         type="text"
//         placeholder="Enter first name - ie 'John'"
//         value={props.state.firstname}
//         onChange={props.handleChange}
//       />

//       <label htmlFor="lastname">Last Name</label>
//       <input
//         required
//         className="form-control"
//         id="lastname"
//         name="lastname"
//         type="text"
//         placeholder="Enter last name - ie 'Doe'"
//         value={props.state.lastname}
//         onChange={props.handleChange}
//       />

//       <label htmlFor="email">Email Address</label>
//       <input
//         className="form-control"
//         id="email"
//         name="email"
//         required
//         type="mail"
//         placeholder="Enter email (please triple-check spelling!) - ie 'johndoe@gmail.com'"
//         value={props.state.email}
//         onChange={props.handleChange}
//       />

//       <label htmlFor="vbbemail">
//         @villagementors.org email (ONLY if you ALREADY have one)
//       </label>
//       <input
//         className="form-control"
//         id="vbbemail"
//         name="vbbemail"
//         required
//         type="mail"
//         placeholder="Enter your current/existing villagementors.org email - ie 'john.doe@villagementors.org'"
//         value={props.state.vbbemail}
//         onChange={props.handleChange}
//       />

//       <label htmlFor="phone">Phone Number</label>
//       <input
//         className="form-control"
//         id="phone"
//         name="phone"
//         type="tel"
//         placeholder="Enter phone number (digits only) ie '1234567890'"
//         value={props.state.phone}
//         onChange={props.handleChange}
//       />

//       <br />

//       <div>
//         <label>Sign up for newsletter? &nbsp;</label>
//         <input
//           name="newsletter"
//           type="checkbox"
//           id="newsletter"
//           value={props.state.newsletter}
//           onChange={props.handleChange}
//         >
//         </input>
//       </div>
//       <br />
//       <br />
//     </div>
//   );
// }

// export default Step1;
