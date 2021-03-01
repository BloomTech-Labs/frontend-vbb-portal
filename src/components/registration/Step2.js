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

// export const Step2 = () => {
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
// export default Step2;

// // function Step2(props) {
// //   if (props.currentStep !== 2) {
// //     return null;
// //   }
// //   return (
// //     <div className="form-group step-form">
// //       <div>
// //         <label>Are you 18 years or older?</label>
// //         <select
// //           name="adult"
// //           id="adult"
// //           value={props.state.adult}
// //           onChange={props.handleChange}
// //         >
// //           <option value="No choice">-</option>
// //           <option value="Yes">Yes</option>
// //           <option value="No">No</option>
// //         </select>
// //       </div>
// //       <div>
// //         <label>Which of the following best describes you?</label>
// //         <select
// //           name="occupation"
// //           id="occupation"
// //           onChange={props.handleChange}
// //           value={props.state.occupation}
// //         >
// //           <option value="No choice">-</option>
// //           <option value="Homemaker">Homemaker</option>
// //           <option value="Retired">Retired</option>
// //           <option value="Working Professional">Working Professional</option>
// //           <option value="College_Student">College Student</option>
// //           <option value="HS_Student">High School Student</option>
// //           <option value="Other">Other</option>
// //         </select>
// //       </div>
// //       {props.state.occupation === 'College_Student' && (
// //         <div>
// //           <label>Are you part of VBB Village Mentors Chapter/Club</label>
// //           <select
// //             name="vbb_chapter"
// //             id="vbb_chapter"
// //             value={props.state.vbb_chapter}
// //             onChange={props.handleChange}
// //           >
// //             <option value="No choice">-</option>
// //             <option value="Yes">Yes</option>
// //             <option value="No">No</option>
// //             <option value="Interested">No, but I'm interested!</option>
// //           </select>
// //         </div>
// //       )}
// //       <label htmlFor="affiliation">
// //         What organization or school are you affiliated with?
// //       </label>
// //       <input
// //         className="form-control"
// //         id="affiliation"
// //         name="affiliation"
// //         type="affiliation"
// //         placeholder="ie 'NYU' - If none, leave blank"
// //         value={props.state.affiliation}
// //         onChange={props.handleChange}
// //       />
// //       <label htmlFor="referral_source">
// //         How did you hear about this opportunity?
// //       </label>
// //       <select
// //         name="referral_source"
// //         id="referral_source"
// //         type="referral_source"
// //         value={props.state.referral_source}
// //         onChange={props.handleChange}
// //       >
// //         <option value="No choice">-</option>
// //         <option value="Friend">Friend</option>
// //         <option value="Google">Google</option>
// //         <option value="FaceBook">FaceBook</option>
// //         <option value="Instagram">Instagram</option>
// //         <option value="LinkedIn">LinkedIn</option>
// //         <option value="JustServe">JustServe</option>
// //         <option value="VolunteerMatch">VolunteerMatch</option>
// //         <option value="Through my organization/school">
// //           Through my organization/school
// //         </option>
// //         <option value="Other">Other</option>
// //       </select>

// //       <label htmlFor="languague">
// //         What languages can you speak comfortably?
// //       </label>
// //       <input
// //         className="form-control"
// //         id="languages"
// //         name="languages"
// //         type="languages"
// //         placeholder="ie 'Spanish, English, Some Portuguese'"
// //         value={props.state.languages}
// //         onChange={props.handleChange}
// //       />

// //       <div>
// //         <label htmlFor="time_zone">What timezone are you in?</label>&nbsp;
// //         <select
// //           name="time_zone"
// //           id="time_zone"
// //           onChange={props.handleChange}
// //           value={props.state.time_zone}
// //         >
// //           {moment.tz.names().map((tz) => {
// //             if (tz.includes('Etc/GMT')) return null;
// //             return (
// //               <option key={tz} value={tz}>
// //                 {tz}
// //               </option>
// //             );
// //           })}
// //         </select>
// //       </div>
// //       <br />
// //       <br />
// //     </div>
// //   );
// // }

// // export default Step2;
