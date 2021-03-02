import React from 'react';
// import { connect } from 'react-redux';
import { Button } from 'antd';

export const Step4 = (props) => {

  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <div>
      <h5>
      Here's how you can support your mentee. <br />
      Your donation covers more than you think.
      </h5>
      <p>
      A monthly donation of $5 will allow your mentee to have regular access
      to a computer, headphones, Wi-Fi connection, a safe learning
      environment, and Khan Academy's award-winning educational programs.
      </p>
      <Button href='https://www.villagebookbuilders.org/donate/'>Donate</Button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
  
// })

// export default connect(mapStateToProps)(Step4)
export default Step4;