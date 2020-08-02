import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
// import {
//   Form,
//   Input,
// }
//   from 'antd';



class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.selectChange = this.selectChange.bind(this);
    this.state = {
      currentStep: 1,
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      stage: '',
      lifeStage: '',
      isLoggedIn: false,
    }
  }

  selectChange(event) {
    console.log("Select was changed!")
    console.log(event.target.value)
    let testVal = event.target.value
    this.setState(() =>({lifeStage: testVal}))
  }


  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, firstname, lastname, password, stage, phone, age, affiliation,
    opportunity, language, timeZone, availability, newsletter, termsCond, 
    molestation, mentor4months, acceptCommitment, moreInvolved, howInvolved, city,
    } = this.state
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           First name: ${firstname} \n
           Last name: ${lastname} \n
           Stage: ${stage} \n
           phone: ${phone} \n
           age: ${age} \n
           Status: ${lifeStage} \n
           Affiliation: ${affiliation} \n
           Opportunity: ${opportunity} \n
           Language: ${language} \n
           Time zone: ${timeZone} \n
           Availability: ${availability} \n
           Newsletter: ${newsletter} \n
           Terms and Conditions: ${termsCond} \n
           molestation: ${molestation} \n
           mentor for 4 months: ${mentor4months} \n
           Accept the commitment: ${acceptCommitment} \n
           More Involved: ${moreInvolved} \n
           How involved: ${howInvolved} \n
           City: $${city} \n 
           Password: ${password}`)
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 4 ? 5 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  *button functions
  */

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 5) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
          Next
        </button>
      )
    }
    return null;
  }

  render() {
    return (

      <React.Fragment>
        <h1>Mentor Registration</h1>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>

          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            firsname={this.state.firstname}
            lastname={this.state.lastname}
            password={this.state.password}
            
            handleMultiChange={this.handleMultiChange}
            setState={this.setState}
            state={this.state}
            selectChange={this.selectChange}

          />

          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleMultiChange={this.handleMultiChange}
            setState={this.setState}
            state={this.state}
            selectChange={this.selectChange}
            phone={this.state.phone}
          />

          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            state={this.state}
            selectChange={this.selectChange}
          />

          <Step4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            state={this.state}
            selectChange={this.selectChange}
          />

          <Step5
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            state={this.state}
            selectChange={this.selectChange}
          />  

          
          {this.previousButton()}
          {this.nextButton()}



        </form>

      </React.Fragment>
    );
  }

  // App() {

  //   const [name, setName] = useState('')
  //   const [Homemaker, setHomemaker] = useState('')
  //   const [password, setPassword] = useState('')

  //   let message = ''
  //   if(Homemaker === 'Homemaker') {
  //     message = 'Hello admin'
  //   } else {
  //     message = 'Get lost'
  //   }

  //   return (
  //     <div>
  //       <span>{message}</span>
  //       <option value={Homemaker}>Homemaker</option>
  //       <input type="text" value={name} />
  //       <input type="password" value={password}/>

  //     </div>
  //   )
  // }


}


function handleMultiChange(value, lifeStage) {
  if (lifeStage == "lifeStage") {
    lifeStage = value;
  }
  return lifeStage;
}

/*Step 1*/

function Step1(props) {

  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div className="form-group">
      
      <label htmlFor="firstname">First Name</label>
      
      <input
        className="form-control"
        id="firstname"
        name="firstname"
        type="text"
        placeholder="Enter first name"
        value={props.firstname}
        onChange={props.handleChange}
      />
      
      <label htmlFor="lastname">Last Name</label>
      <input
        className="form-control"
        id="lastname"
        name="lastname"
        type="text"
        placeholder="Enter last name"
        value={props.firstname}
        onChange={props.handleChange}
      />

      <label htmlFor="email">Email adress</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
        /> 

    </div>
  );
}

/*Step 1*/
var lifeStage = '';

function RetiredQuestion(props) {
  if (props.lifeStage === "Retired") {
    return <h1>This fool's retired</h1>
  } else {
    return <h1>Retirement is so close I can taste it</h1>
  }
}

function Step2(props) {

  if (props.currentStep !== 2) {
    return null
  }
  return (
    <div className="form-group">

      <label htmlFor="phone">Phone Number</label>
      <input
        className="form-control"
        id="phone"
        name="phone"
        type="phone"
        placeholder="Enter phone number"
        value={props.phone}
        onChange={props.handleChange}
        
        /> 

      <div>
        <p>Are you 18 years or older?</p>
        <select name="age" id="age" value={props.age}
        onChange={props.handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>


      <div>
        <p>Which of the following best describes you?</p>
        <select name="describes" id="describes" onChange={props.selectChange}
        value={props.lifeStage}>
          {console.log(lifeStage)}

          <option value="Homemaker">Homemaker</option>
          <option value="Retired">Retired</option>
          <option value="Working Professional">Working Professional</option>
          {/* <option value="Homemaker" onChange={this.App()}>Homemaker</option> */}

          <option value="College_Student">College Student</option>
          <option value="HS_Student">High School Student</option>
          <option value="Other">Other</option>
        </select>
        <RetiredQuestion 
        lifeStage={props.state.lifeStage}
        />
      </div>

      {
        props.lifeStage == "Retired" && (

          <div>
            <p>This fool's retired!</p>
            {console.log("I'm here")}
          </div>)
      }



 {/*this is to delete */}

      {/* <Form.Item
        name="affiliation"
        id="affiliation"
        label="What organization or school are you affiliated with?"
        value={props.affiliation}
        onChange={props.handleChange}
        rules={[
          {
            type: '',
            message: 'If none, leave blank',
          },
          {
            required: false,
            message: 'Please enter your fist and last name!',
          },
        ]}
      >
        <Input placeholder="If none, leave blank" />

      </Form.Item> */}

      <label htmlFor="affiliation">What organization or school are you affiliated with?</label>
      <input
        className="form-control"
        id="affiliation"
        name="affiliation"
        type="affiliation"
        placeholder="If none, leave blank"
        value={props.affiliation}
        onChange={props.handleChange}
        
        /> 

      <label htmlFor="opportunity">How did you hear about this opportunity?</label>  
      <select name="opportunity" id="opportunity" type="opportunity"
       value={props.opportunity}
        onChange={props.handleChange} >
        <option value="Friend">Friend</option>
        <option value="Google">Google</option>
        <option value="FaceBook">FaceBook</option>
        <option value="Instagram">Instagram</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="JustServe">JustServe</option>
        <option value="VolunteerMatch">VolunteerMatch</option>
        <option value="Through my organization/school">Through my organization/school</option>
        <option value="Other">Other</option>
      </select>

      {/* <Form.Item
        name="languague"
        label="What languages can you speak comfortably?"
        rules={[
          {
            type: 'language',
            message: '',
          },
          {
            required: false,
            message: '',
          },
        ]}
      >
        <Input placeholder="Language" />
      </Form.Item> */}

      <label htmlFor="languague">What languages can you speak comfortably?</label>
      <input
        className="form-control"
        id="language"
        name="language"
        type="language"
        placeholder="English, Spanish, Portuguese, Italian, etc"
        value={props.language}
        onChange={props.handleChange}
        
        />     

      {/* <Form.Item
        name="timeZone"
        label="What is your time zone? (ex MST, CST)"
        rules={[
          {
            type: 'time',
            message: '',
          },
          {
            required: false,
            message: '',
          },
        ]}
      >
        <Input placeholder="MTC, CST, ET" />
      </Form.Item> */}

      <label htmlFor="timeZone">What is your time zone? (ex MST, CST)</label>
      <input
        className="form-control"
        id="timeZone"
        name="timeZone"
        type="timeZone"
        placeholder="MST, CST, etc"
        value={props.timeZone}
        onChange={props.handleChange}
        
        />  


      {/* <Form.Item
        name=""
        label="Please list our three times you would 
        be Available weekly for your 30 minutes time 
        slot with your mentee (ex Monday 7pm to 9pm CST)"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: true,
            message: 'Please enter your availability',
          },
        ]}
      >
        <Input placeholder="Monday 7pm to  7:30pm CST" />
      </Form.Item> */}

      <label htmlFor="availability">Please list our three times you would 
        be Available weekly for your 30 minutes time 
        slot with your mentee (ex Monday 7pm to 9pm CST)</label>
      <input
        className="form-control"
        id="availability"
        name="availability"
        type="availability"
        placeholder=""
        value={props.availability}
        onChange={props.handleChange}
        
        />    
      
      <label htmlFor="newsletter">Sign up for newsletter?</label>
      <input className="form-control"
      id="newsletter"
      type="checkbox"
      value={props.newsletter}
      onChange={props.handleChange} 
      /> 


    </div>
  );
}
/*Step 2 */

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <div className="form-group">
      <h1>Terms and Conditions</h1>
      <p className="useragreement">WHEREAS, Non-Profit own and operates
      a not for profit organization which arranges for tutoring of school children by volunteer independent contractors;  and

      WHEREAS, Independent Contractor desires to provide tutoring services as
      arranged by Non-Profit, and will gain and benefit from being provided such tutoring opportunities; and

      WHEREAS, the parties desire to specify the terms under which such
      tutoring shall be provided;

      NOW THEREFORE, in consideration below describe covenants and promises
      between the parties, the receipt and sufficiency of which is hereby
      acknowledged, the parties agree as follows:

      1. Tutoring. Independent Contractor shall provide tutoring services
      as assigned by Non-Profit, subject to the terms and requirements of this
      agreement. Independent Contractor acknowledges and agrees that it shall
      receive no compensation of any kind for any tutoring provided under this
      agreement, and Independent Contractor covenants that it shall not pursue
      compensation of any kind from the tutored student of the family of the
      tutored student. Independent Contractor agrees with Non-Profit that the
      education, skill and experience constitute compensation sufficient to
      warrant consideration between the parties.

      2. Standards of Conduct. Independent Contractor shall maintain the
      highest standard of conduct in all interactions with students, other
      volunteers and teachers, and any other person they come into contact
      with while serving as a volunteer with Non-Profit. Independent
      Contractor shall not discuss, display, or portray lewd, indecent or
      inappropriate subject, images, or pictures at any time. Independent
      Contractor shall respect the individuality and privacy of all
      tutored students, and shall treat such students with the highest respect.

      3. Termination. Non-Profit retains the right to terminate
      the services of Independent Contractor at any time for
      any reason or no reason whatsoever. This contract constitutes a
      right to work contract and can be terminated by either party at
      any time and for reason. In the event of any breach of this
      Agreement by Independent Contractor, this Agreement shall be
      automatically terminated unless Non-Profit notifies Independent
      Contractor that the Agreement is still in force and effect.

      4. Confidentiality. In the course of providing tutoring
      services, Independent Contractor may acquire confidential
      information from Non-Profit or from tutored students
      and/or their families. Confidential information
      includes, but is not limited to, all lists, data
      or information of any kind pertaining to Non-Profit
      or tutored students which is not, at the time it
      is acquired, generally available to the public.
      Independent Contractor shall not at any time
      reveal or use in any fashion such confidential
      information without the prior express permission of the
      party who owns the information. This provision shall
      continue in full force and effect after Independent
      Contractor ceases to provide tutoring services for
      Non-Profit. Independent Contractor acknowledges
      that damages which Non-Profit may suffer from a
      breach of this paragraph are difficult or impossible
      to determine, but in no way is such information
      valued at less than Five Hundred and 00/100
      Dollars ($500.00). This amount constitutes
      a specified amount of minimum damages
      between the parties and not liquidated damages.

      In addition, Non-Profit may obtain injunctive
      relief to prevent Independent Contractor from further
      dissemination of confidential information. If Non-Profit
      is required to take legal action against Independent
      Contractor as a result of a breach of any of the
      covenants contained in this paragraph 4 or any other
      clause contained within this employment contract,
      he or she will be responsible for the reasonable
      attorney's fees accumulated as a result of said breach.

      5.  Indemnification.  Each party shall indemnify
      and holt the other party and its offices,
      agents, and employees harmless from and
      against all liabilities, damages, losses,
      actions, or causes of action, costs
      and expenses, including reasonable
      attorney’s fees if related to the
      provision of tutoring services by
      Independent Contractor in this agreement,
      as well as any claims related to personal
      injury or death arising out of or in any
      way contributed to by the acts or failure
      to act of the other party, its agents,
      employees, officers or assigns, including,
      but not limited to, the careless, reckless,
      negligent, wanton or willful conduct of
      Independent Contractor.

      Independent Contractor is responsible to obtain
      and maintain its own insurance, and no insurance
      will be provided by Non-Profit.  Non-Profit
      shall not be liable for any acts of Independent
      Contractor, regardless of the nature of those
      acts, the only exception being if such acts
      by Independent Contractor were part of the
      day to day activities of his or her job with
      Non Profit and no negligence nor intentional
      conduct on the part of Independent Contractor occurred.

      6.  Independent Contractor.  The parties acknowledge
      that Independent Contractor and its supplied
      laborers are independent contractors.
      Non-Profit has no obligation to provide withholding
      of taxes or other employee services on their behalf,
      and Independent Contractor and its supplied
      laborers shall not have the power to enter into
      any contracts, agreements or any other commitments
      on behalf of Non-Profit.  Independent Contractor
      hereby acknowledges that should the law in the
      locale in which the tutoring is to take place
      require worker’s compensation insurance to be
      carried, that is solely the responsibility of
      the independent contractor.

      7.  Entire Agreement.  This agreement embodies the
      entire ”four corners” of the agreement between
      the parties, and replaces any prior understandings
      or discussions of the parties.  This Agreement
      may only be changed or modified in writing,
      signed by both parties.

      8.  Successors and Assigns.  All of the terms
      and conditions of this Agreement are binding
      on the successors and assigns of both parties.
      Independent contractor may not assign this
      Agreement or its duties under this Agreement
      to any other party, without the written consent
      of Non Profit.  Non Profit may not sell or
      assign its rights under this Agreement without
      the prior written consent of Independent Contractor.

      9.  Governing Law.  This Agreement shall be governed
      by and construed in accordance with the laws of
      the State of Utah.  Venue for any legal action
      between the parties shall be Utah County, Utah.

      10. Dispute Resolution.  In the event of a dispute
      between the parties regarding this Agreement,
      the parties shall first negotiate in good faith
      to see if such dispute can be resolved.  If any
      claim or action is filed in court by either
      party respecting this Agreement, the prevailing
      party shall be entitled, in addition to all
      expenses, costs or damages, to reasonable
      attorneys’ fees, whether or not such controversy
      was litigated or prosecuted to judgment.

      11.  Severability. If any term or provision of
      this Agreement shall be held to be invalid or
      unenforceable, the remainder of this Agreement
      shall not be affected thereby.  Each term and
      provision of this Agreement shall be valid
      and enforced to the fullest extent permitted
      by law.

      12. Notices. Any notice provided for or concerning
      this agreement shall be in writing and be deemed
      sufficiently given when hand delivered or sent
      by certified or registered mail if sent to the
      respective address of each party:

      13. Headings and Drafting.  The headings used
      herein are for purposes of convenience only and
      should not be used in construing or interpreting
      the provisions hereof.  In all questions of
      interpretation of this agreement, the parties
      shall jointly be considered to have been the
      drafters of the same.  This Agreement may be
      executed in counterparts.  Facsimile signatures
      of this agreement shall be considered binding,
      and the same as original signatures.

      14. Compliance with Law. Each party warrants
      that all times they are and will remain in
      compliance with all applicable federal, state
      and local laws pertaining to the services
      provided for in this agreement.  Failure
      to comply with this paragraph by an
      independent contractor or anyone under
      the employment of an Independent Contractor
      shall result in the immediate breach of this agreement.</p>

      
       
      <div>
        <label htmlFor="termsCond">Do you agree to the Terms and 
        Conditions as explained above?</label>
        <select name="termsCond" id="termsCond" value={props.termsCond}
        onChange={props.handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>      
      
      <div>
        <label htmlFor="molestation">Have you ever been arrested, charged,
        or convicted of child abuse or molestation of any form?</label>
        <select name="molestation" id="molestation" value={props.molestation}
        onChange={props.handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label htmlFor="metor4Months">Can you commit to being a mentor 
        for a minimun of 4 months?</label>
        <select name="metor4Months" id="metor4Months" value={props.metor4Months}
        onChange={props.handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <label htmlFor="acceptCommitment">Do you agree to the above terms and
      conditions and a 4 months commitment?(Sign by putting your initials)</label>
      <input
        className="form-control"
        id="acceptCommitment"
        name="acceptCommitment"
        type="text"
        placeholder="Initials"
        value={props.acceptCommitment}
        onChange={props.handleChange}
        
        /> 

      {/* <Form.Item
        name=""
        label="Have you ever been arrested, charged, 
        or convected of child abuse or molestation of any form?"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: true,
            message: 'Please answer',
          },
        ]}
      >
        <Input placeholder="Yes, No" />
      </Form.Item>

      <Form.Item
        name=""
        label="Can you commit to being a mentor for a min of 4 months?"
        rules={[
          {
            type: 'string',
            message: 'Please yes or no',
          },
          {
            required: true,
            message: 'Please enter your availability',
          },
        ]}
      >
        <Input placeholder="Yes, No" />
      </Form.Item> */}

    </div>
  );
}

/** Step 4*/

function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  }
  return (

    <div className="form-group">
      
      <div>
        <h1>Here is how you can
            support your mentee. Your donation covers more than you think.</h1>
        <p>A monthly donation of $5 will allow your mentee to have regular
        access to a computer, headphones, WIFI connection, a safe
        learning environment, and Khan Academy's award-winning
        educational programs.
            </p>
      </div>

      <label htmlFor="donation">Donation:</label>
      <input
        className="form-control"
        id="donation"
        name="donation"
        type="text"
        placeholder="5.00"

        />

      <label htmlFor="donation">Please confirm donation amount:</label>
      <input
        className="form-control"
        id="donation"
        name="donation"
        type="text"
        placeholder="5.00"

        />

      <div>
        <label htmlFor="monthlyDonation">Monthly Donation</label>
        <input type="checkbox" name="mmonthlyDonation" id="monthlyDonation">
        </input>
      </div>

      <label htmlFor="donation">Credit Card Number:</label>
      <input
        className="form-control"
        id="creditCard"
        name="creditCard"
        type="text"
        placeholder="XXXX-XXXX-XXXX-XXXX"

        />

      <label htmlFor="donation">Name on Credit Card:</label>
      <input
        className="form-control"
        id="cardName"
        name="cardName"
        type="text"
        placeholder="Homer Simpson"

        />  
      {/* <Form.Item
        name=""
        label="Donation"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: false,
            message: '',
          },
        ]}
      >
        <Input placeholder="$5" />
      </Form.Item>

      <Form.Item
        name=""
        label="Stripe Credit Card"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: false,
            message: 'Please enter your credit card number',
          },
        ]}
      >
        <Input placeholder="XXXX-XXXX-XXXX-XXXX" />
      </Form.Item>

      <Form.Item
        name=""
        label="Name on Card"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: false,
            message: 'Please enter Card Name',
          },
        ]}
      >
        <Input placeholder="Visa, MasterCard" />
      </Form.Item> */}
    </div>

  );
}


{/**Step 5 */}

function Step5(props) {
  if (props.currentStep !== 5) {
    return null
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <div>
          <h1>One last thing, how you can get more involved</h1>
          <p>Our organization is built by voluneteers like you,
            we need your help to help spread hope through books</p>

        </div>

        <div>
          <select name="moreInvolved" id="moreInvolved" value={props.moreInvolved}
            onChange={props.handleChange}>
            <label>Would you like to get more involved?</label>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div>
          <select name="howInvolved" id="howInvolved" value={props.howInvolved}
            onChange={props.handleChange}>
            <label>How would you like to get more
           involved (Select all that apply)?</label>

          <input type="checkbox" id="checkbox" name="howInvolved" value="fundraiser"></input>
          <label for="howInvolved"> Run or help with a fundraiser</label>

          <input type="checkbox" id="checkbox" name="howInvolved" value="social media"></input>
          <label for="howInvolved"> Be a social media advocate or an ambassador</label>

          <input type="checkbox" id="checkbox" name="vhowInvolved" value="vbb mentor chapter"></input>
          <label for="howInvolved"> Start/Join a VBB Village Mentors Chapter at your school
          or company (A club of fellow mentors)</label>

          <input type="checkbox" id="checkbox" name="howInvolved" value="book club"></input>
          <label for="howInvolved"> Start/Join a Book Club</label>

          <input type="checkbox" id="checkbox" name="howInvolved" value="research"></input>
          <label for="howInvolved"> Research</label>

          <input type="checkbox" id="checkbox" name="howInvolved" value="other"></input>
          <label for="howInvolved"> Other</label>
        </select>
        </div>

        <label htmlFor="city">What city and state/province do you live in?</label>
        <input
        className="form-control"
        id="city"
        name="city"
        type="text"
        placeholder="Philadelphia, PA"
        value={props.city}
        onChange={props.handleChange}
        
        /> 
        {/* <div>
          <Form.Item
            name=""
            label="What city and state/province do you live in?"
            rules={[
              {
                type: 'string',
                message: 'Please enter city and state/province',
              },
              {
                required: true,
                message: 'Please enter your availability',
              },
            ]}
          >
            <Input placeholder="Philadelphia, PA" />
          </Form.Item>
        </div> */}

      </div>
      <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}
ReactDOM.render(<MasterForm />, document.getElementById('root'))
export default MasterForm;
