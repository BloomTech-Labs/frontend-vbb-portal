import React from 'react'

const Newsletter= ({ registrationForm, setRegistrationForm }) => {
    return (
      <Form.Item>
        <Checkbox
          checked={registrationForm.subToNewsLetter}
          onChange={(e) => {
            const updatedRegForm = {
              ...registrationForm,
              subToNewsLetter: e.target.checked,
            };
            setRegistrationForm(updatedRegForm);
          }}
        >
          I would like to receive the VBB newsletter.
        </Checkbox>
      </Form.Item>
    )
}

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(Newsletter);
