import React from 'react';
// import { connect } from 'react-redux';
import {
  Form,
  Select,
  Checkbox,
  Row,
  Col,
  Image,
} from 'antd';
import moment from 'moment-timezone';
import ActionPicture from '../../images/vbb-in-action.png';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 16,
  },
};

export const Step2 = (props) => {
  const [form] = Form.useForm();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log('Form values: ', values);
  };

    // For checkbox
    let options = ['English', 'Spanish', 'French', 'German'];

    function onCheckboxChange(checkedValues) {
      console.log('checked = ', checkedValues);
    }

  if (props.currentStep !== 2) {
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
              adult: '',
              occupation: '',
              referral_source: '',
              language: '',
              time_zone: ''
            }}
            scrollToFirstError
          >

            <Form.Item
              name="adult"
              label='Are you 18 years of age or older'
              rules={[
                {
                  required: true,
                  message: 'Age is required.',
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
              name="occupation"
              label='Which of the following best describes you'
              rules={[
                {
                  required: true,
                  message: 'Occupation is required.',
                  whitespace: true,
                },
              ]}
            >
              <Select style={{ width: 200 }} onChange={handleChange}>
                {/* Need to add additional questions if college student is selected */}
                <Option value="Homemaker">Homemaker</Option>
                <Option value="Retired">Retired</Option>
                <Option value="Working Professional">Working Professional</Option>
                <Option value="College_Student">College Student</Option>
                <Option value="HS_Student">High School Student</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="referral_source"
              label='How did you hear about this opportunity'
              rules={[
                {
                  required: true,
                  message: 'Referral field is required.',
                  whitespace: true,
                },
              ]}
            >
              <Select style={{ width: 200 }} onChange={handleChange}>
                <Option value="No choice">-</Option>
                <Option value="Friend">Friend</Option>
                <Option value="Google">Google</Option>
                <Option value="FaceBook">FaceBook</Option>
                <Option value="Instagram">Instagram</Option>
                <Option value="LinkedIn">LinkedIn</Option>
                <Option value="JustServe">JustServe</Option>
                <Option value="VolunteerMatch">VolunteerMatch</Option>
                <Option value="Through my organization/school">
                Through my organization/school
                </Option>
                <Option value="Other">Other</Option>
            </Select>
            </Form.Item>

            <Form.Item
              name="language"
              label='Which languages can you speak comfortably (check all that apply)'
              rules={[
                {
                  required: true,
                  message: 'Language is required.',
                  whitespace: true,
                },
              ]}
            >
              {/* Need to update with languages in backend */}
              <Checkbox.Group options={options} onCheckboxChange={onCheckboxChange} />
            </Form.Item>

            <Form.Item
              name="time_zone"
              label='What timezone are you in'
              rules={[
                {
                  required: true,
                  message: 'Timezone is required.',
                  whitespace: true,
                },
              ]}
            >
              <Select style={{ width: 200 }} onChange={handleChange}>
              {/* Need to update timezone drop downs */}
              {moment.tz.names().map((tz) => {
                  if (tz.includes('Etc/GMT')) return null;
                  return (
                    <Option key={tz} value={tz}>
                      {tz}
                    </Option>
                  );
                })}
            </Select>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <div style={{ padding: '0 10px' }}>
            <Image src={ActionPicture}></Image>
          </div>
        </Col>
    </Row>
    </div>
  );
}

// const mapStateToProps = (state) => ({
  
// })

// export default connect(mapStateToProps)(Step2)
export default Step2;

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
