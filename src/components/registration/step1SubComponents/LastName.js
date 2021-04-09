import React from 'react';

const LastName = ({ registrationForm, setRegistrationForm }) => {
    return (
      <Form.Item
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
        <Input
          name="last name"
          value={registrationForm.lastName}
          onChange={(e) => {
            const updatedRegForm = {
              ...registrationForm,
              lastName: e.target.value,
            };
            setRegistrationForm(updatedRegForm);
          }}
        />
      </Form.Item>
    )
}

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(LastName);
