import React from 'react';
// import { connect } from 'react-redux';
import {
  Form,
  Input,
  Tooltip,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

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

export const Step4 = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values: ', values);
  };

  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        firstname: '',
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

    </Form>
  );
}

// const mapStateToProps = (state) => ({
  
// })

// export default connect(mapStateToProps)(Step1)
export default Step4;

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
