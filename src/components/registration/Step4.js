// import React, { useState } from 'react';
// // import { connect } from 'react-redux';

// import {
//   Form,
//   Input,
//   Tooltip,
//   Cascader,
//   Select,
//   Row,
//   Col,
//   Checkbox,
//   Button,
//   AutoComplete,
// } from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';

// const { Option } = Select;

// const residences = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];

// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };

// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

// export const Step4 = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };

//   const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select
//         style={{
//           width: 70,
//         }}
//       >
//         <Option value="86">+86</Option>
//         <Option value="87">+87</Option>
//       </Select>
//     </Form.Item>
//   );
//   const [autoCompleteResult, setAutoCompleteResult] = useState([]);

//   const onWebsiteChange = (value) => {
//     if (!value) {
//       setAutoCompleteResult([]);
//     } else {
//       setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
//     }
//   };

//   const websiteOptions = autoCompleteResult.map((website) => ({
//     label: website,
//     value: website,
//   }));

//   return (
//     <Form
//       {...formItemLayout}
//       form={form}
//       name="register"
//       onFinish={onFinish}
//       initialValues={{
//         residence: ['zhejiang', 'hangzhou', 'xihu'],
//         prefix: '86',
//       }}
//       scrollToFirstError
//     >
//       <Form.Item
//         name="email"
//         label="E-mail"
//         rules={[
//           {
//             type: 'email',
//             message: 'The input is not valid E-mail!',
//           },
//           {
//             required: true,
//             message: 'Please input your E-mail!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//         hasFeedback
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="confirm"
//         label="Confirm Password"
//         dependencies={['password']}
//         hasFeedback
//         rules={[
//           {
//             required: true,
//             message: 'Please confirm your password!',
//           },
//           ({ getFieldValue }) => ({
//             validator(_, value) {
//               if (!value || getFieldValue('password') === value) {
//                 return Promise.resolve();
//               }

//               return Promise.reject(new Error('The two passwords that you entered do not match!'));
//             },
//           }),
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="nickname"
//         label={
//           <span>
//             Nickname&nbsp;
//             <Tooltip title="What do you want others to call you?">
//               <QuestionCircleOutlined />
//             </Tooltip>
//           </span>
//         }
//         rules={[
//           {
//             required: true,
//             message: 'Please input your nickname!',
//             whitespace: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="residence"
//         label="Habitual Residence"
//         rules={[
//           {
//             type: 'array',
//             required: true,
//             message: 'Please select your habitual residence!',
//           },
//         ]}
//       >
//         <Cascader options={residences} />
//       </Form.Item>

//       <Form.Item
//         name="phone"
//         label="Phone Number"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your phone number!',
//           },
//         ]}
//       >
//         <Input
//           addonBefore={prefixSelector}
//           style={{
//             width: '100%',
//           }}
//         />
//       </Form.Item>

//       <Form.Item
//         name="website"
//         label="Website"
//         rules={[
//           {
//             required: true,
//             message: 'Please input website!',
//           },
//         ]}
//       >
//         <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
//           <Input />
//         </AutoComplete>
//       </Form.Item>

//       <Form.Item label="Captcha" extra="We must make sure that your are a human.">
//         <Row gutter={8}>
//           <Col span={12}>
//             <Form.Item
//               name="captcha"
//               noStyle
//               rules={[
//                 {
//                   required: true,
//                   message: 'Please input the captcha you got!',
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Button>Get captcha</Button>
//           </Col>
//         </Row>
//       </Form.Item>

//       <Form.Item
//         name="agreement"
//         valuePropName="checked"
//         rules={[
//           {
//             validator: (_, value) =>
//               value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
//           },
//         ]}
//         {...tailFormItemLayout}
//       >
//         <Checkbox>
//           I have read the <a href="">agreement</a>
//         </Checkbox>
//       </Form.Item>
//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// }

// // const mapStateToProps = (state) => ({
  
// // })

// // export default connect(mapStateToProps)(Step1)
// export default Step4;
// // function Step4(props) {
// //   if (props.state.currentStep !== 4) {
// //     return null;
// //   }
// //   return (
// //     <div className="form-group step-form">
// //       <h5>
// //         Here's how you can support your mentee. <br />
// //         Your donation covers more than you think.
// //       </h5>
// //       <p>
// //         A monthly donation of $5 will allow your mentee to have regular access
// //         to a computer, headphones, Wi-Fi connection, a safe learning
// //         environment, and Khan Academy's award-winning educational programs.
// //       </p>
// //       <a
// //         className="btn btn-light donate-btn"
// //         type="button"
// //         href="https://www.villagebookbuilders.org/donate/"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         style={{ marginLeft: '50px' }}
// //       >
// //         DONATE
// //       </a>
// //       <br />
// //       <br />
// //       {/* <div>
// //           <Donation/>
// //         </div>
// //         <div>
// //           <label htmlFor="donation">Donation:</label>
// //           <input
// //             className="form-control"
// //             id="donation"
// //             name="donation"
// //             type="text"
// //             placeholder="5.00"
// //           />
// //           <label htmlFor="donation">Please confirm donation amount:</label>
// //           <input
// //             className="form-control"
// //             id="donation"
// //             name="donation"
// //             type="text"
// //             placeholder="5.00"
// //           />
// //           <div>
// //             <label htmlFor="monthlyDonation">Monthly Donation</label>
// //             <input type="checkbox" name="mmonthlyDonation" id="monthlyDonation">
// //             </input>
// //           </div>
// //           <label htmlFor="donation">Credit Card Number:</label>
// //           <input
// //             className="form-control"
// //             id="creditCard"
// //             name="creditCard"
// //             type="text"
// //             placeholder="XXXX-XXXX-XXXX-XXXX"
// //           />
// //           <label htmlFor="donation">Name on Credit Card:</label>
// //           <input
// //             className="form-control"
// //             id="cardName"
// //             name="cardName"
// //             type="text"
// //             placeholder="Homer Simpson"
// //           />  
// //         </div> */}
// //     </div>
// //   );
// // }

// // export default Step4;
