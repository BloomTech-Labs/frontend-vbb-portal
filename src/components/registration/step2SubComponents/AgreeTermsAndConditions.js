import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Form, Checkbox, Button, Modal } from 'antd';

import '../../../less/index.less';

const AgreeTermsAndConditions = ({ registrationForm, setRegistrationForm }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Form.Item>
      <Button type="primary" onClick={() => setVisible(true)}>
        Terms and Conditions
      </Button>
      <Modal
        title="VBB Mentor Terms & Conditions"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>
          Village Book Builders (“Non-Profit”) owns and operates a
          not-for-profit organization which arranges for mentoring (“mentoring”)
          of school children by volunteer Volunteers. By signing up to provide
          mentoring, you (“Volunteer”) are entering into a binding agreement
          with Non-Profit and agree to terms and conditions herein.
        </p>
        <p>
          WHEREAS, Volunteer desires to provide mentoring services as arranged
          by Non-Profit, and will gain and benefit from being provided such
          mentoring opportunities; and WHEREAS, the parties desire to specify
          the terms under which such mentoring shall be provided;
        </p>
        <p>
          NOW THEREFORE, in consideration below describe covenants and promises
          between the parties, the receipt and sufficiency of which is hereby
          acknowledged, the parties agree as follows:
        </p>
        <ol>
          <li>
            Mentoring. Volunteer shall provide mentoring services as assigned by
            Non-Profit, subject to the terms and requirements of this agreement.
            Volunteer acknowledges and agrees that it shall receive no
            compensation of any kind for any mentoring provided under this
            agreement, and Volunteer covenants that it shall not pursue
            compensation of any kind from the mentored student of the family of
            the mentored student. Volunteer agrees with Non-Profit that the
            education, skill and experience constitute compensation sufficient
            to warrant consideration between the parties.
          </li>
          <li>
            Standards of Conduct. Volunteer shall maintain the highest standard
            of conduct in all interactions with students, other volunteers and
            teachers, and any other person they come into contact with while
            serving as a volunteer with Non-Profit. Volunteer shall not discuss,
            display, or portray lewd,indecent or inappropriate subject, images,
            or pictures at any time. Volunteer shall respect the individuality
            and privacy of all mentored students, and shall treat such students
            with the highest respect.
          </li>
          <li>
            Termination. Non-Profit retains the right to terminate the services
            of Volunteer at any time for any reason or no reason whatsoever.
            This contract constitutes a right to work contract and can be
            terminated by either party at any time and for reason. In the event
            of any breach of this Agreement byVolunteer, this Agreement shall be
            automatically terminated unless Non-Profit notifies Volunteer that
            theAgreement is still in force and effect.
          </li>
          <li>
            Confidentiality. In the course of providing mentoring services,
            Volunteer may acquire confidential information from Non-Profit or
            from mentored students and/or their families. Confidential
            information includes, but is not limited to, all lists, data or
            information of any kind pertaining to Non-Profit or mentored
            students which is not, at the time it is acquired, generally
            available to the public.Volunteer shall not at any time reveal or
            use in any fashion such confidential information without the prior
            express permission of the party who owns the information. This
            provision shall continue in full force and effect after Volunteer
            ceases to provide mentoring services for Non-Profit. Volunteer
            acknowledges that damages which Non-Profit may suffer from a breach
            of this paragraph are difficult or impossible to determine, but in
            no way is such information valued at less than Five Hundred and
            00/100 Dollars ($500.00). This amount constitutes a specified amount
            of minimum damages between the parties and not liquidated damages.
            In addition, Non-Profit may obtain injunctive relief to prevent
            Volunteer from further dissemination of confidential information. If
            Non-Profit is required to take legal action against Volunteer as a
            result of a breach of any of the covenants contained in this
            paragraph 4 or any other clause contained within this employment
            contract, he or she will be responsible for the reasonable
            attorney's fees accumulated as a result of said breach.
          </li>
          <li>
            Indemnification. Each party shall indemnify and holt the other party
            and its offices, agents, and employees harmless from and against all
            liabilities, damages, losses, actions, or causes of action, costs
            and expenses, including reasonable attorney’s fees if related to the
            provision of mentoring services byVolunteer in this agreement, as
            well as any claims related to personal injury or death arising out
            of or in any way contributed to by the acts or failure to act of the
            other party, its agents, employees, officers or assigns, including,
            but not limited to, the careless, reckless, negligent, wanton or
            willful conduct ofVolunteer. Volunteer is responsible to obtain and
            maintain its own insurance, and no insurance will be provided by
            Non-Profit. Non-Profit shall not be liable for any acts of
            Volunteer, regardless of the nature of those acts, the only
            exception being if such acts by Volunteer were part of the day to
            day activities of his or her job with Non Profit and no negligence
            nor intentional conduct on the part of Volunteer occurred.
          </li>
          <li>
            Volunteer. Volunteer understands that, as a volunteer, Volunteer
            will receive no compensation or remuneration for services and will
            not be eligible for any employee benefits. Volunteer acknowledges
            that they are not an employee.
          </li>
          <li>
            Intellectual Property. Volunteer hereby irrevocably permits,
            authorizes, grants, and licenses toNon-Profit and its affiliates,
            successors, and assigns, and their respective licensees, and the
            employees,officers, directors, and agents of each and all of them
            (“Authorized Persons”):
          </li>
          <ul>
            <li>
              (i) the rights to display,publicly perform, exhibit, transmit,
              broadcast, reproduce, record, photograph, digitize, modify, alter,
              edit,adapt, create derivative works, exploit, sell, rent, license,
              otherwise use, and permit others to use my name, image, likeness,
              and all materials created by or on behalf of Non-Profit that
              incorporate any of the foregoing (“Materials”) in perpetuity
              throughout the universe in any medium or format (now existing or
              hereafter created), without further consent from or compensation
              to me (and Non-Profit shall be the exclusive owner of all rights,
              including copyright, in the Materials); and
            </li>
            <li>
              (ii) the entire right, title, and interest, in and to the
              Materials and all intellectual property rights in the Materials
              arising in any jurisdiction throughout the universe in perpetuity,
              including all registration, renewal, and reversion rights,and the
              right to sue to enforce such copyrights against infringers.
              <p>
                By agreeing to these terms and conditions, Volunteer
                acknowledges and agrees that Volunteer has no right to review or
                approve Materials before they are used by Non-Profit, and that
                Non-Profit has no liability to me for any editing or alteration
                of the Materials or for any distortion or other effects
                resulting from Non-Profit’s editing, alteration, or use of the
                Materials, or Non-Profit’s presentation of me. Any credit or
                other acknowledgment of me, if any,shall be determined by
                Non-Profit in Non-Profit’s sole discretion. Non-Profit has no
                obligation to create or use the Materials or to exercise any
                rights given by this Agreement.
              </p>
              <p>
                To the extent permitted by applicable law, Volunteer hereby
                irrevocably waives all legal and equitable rights relating to
                all liabilities,claims, demands, actions, suits, damages, and
                expenses, including but not limited to claims for infringement,
                libel, defamation, invasion of any rights of privacy (including
                intrusion, false light, public disclosure of private facts, and
                misappropriation of name or likeness), violation of rights of
                publicity,physical or emotional injury or distress, or any
                similar claim or cause of action under any other legal theory
                (now known or hereafter known) in any jurisdiction worldwide
                (“Claims”) arising from theAuthorized Persons’ exercise of their
                rights under this Agreement or the use of the Materials, and
                whether resulting by the negligence of Non-Profit or any other
                person, covenant not to make or bring any suchClaim against any
                Authorized Persons, and forever release and discharge the
                Authorized Persons from liability under such Claims. Volunteer
                understands Non-Profit is relying on this Agreement and will
                incur significant expense in its reliance, and Volunteer agrees
                that this Agreement cannot be terminated,rescinded, or modified,
                in whole or in part.
              </p>
            </li>
          </ul>
          <li>
            Entire Agreement. This agreement embodies the entire ”four corners”
            of the agreement between the parties, and replaces any prior
            understandings or discussions of the parties. This Agreement may
            only be changed or modified in writing, signed by both parties.
          </li>
          <li>
            Successors and Assigns. All of the terms and conditions of this
            Agreement are binding on the successors and assigns of both parties.
            Volunteer may not assign this Agreement or its duties under
            thisAgreement to any other party, without the written consent of Non
            Profit. Non Profit may not sell or assign its rights under this
            Agreement without the prior written consent of Volunteer.
          </li>
          <li>
            Governing Law. This Agreement shall be governed by and construed in
            accordance with the laws of the State of Utah. Venue for any legal
            action between the parties shall be Utah County, Utah.
          </li>
          <li>
            Dispute Resolution. In the event of a dispute between the parties
            regarding this Agreement, the parties shall first negotiate in good
            faith to see if such dispute can be resolved. If any claim or action
            is filed in court by either party respecting this Agreement, the
            prevailing party shall be entitled, in addition to all expenses,
            costs or damages, to reasonable attorneys’ fees, whether or not such
            controversy was litigated or prosecuted to judgment.
          </li>
          <li>
            Severability. If any term or provision of this Agreement shall be
            held to be invalid or unenforceable, the remainder of this Agreement
            shall not be affected thereby. Each term and provision of this
            Agreement shall be valid and enforced to the fullest extent
            permitted by law.
          </li>
          <li>
            Notices. Any notice provided for or concerning this agreement shall
            be in writing and be deemed sufficiently given when hand delivered
            or sent by certified or registered mail if sent to the respective
            address of each party.
          </li>
          <li>
            Headings and Drafting. The headings used herein are for purposes of
            convenience only and should not be used in construing or
            interpreting the provisions hereof. In all questions of
            interpretation of this agreement, the parties shall jointly be
            considered to have been the drafters of the same. ThisAgreement may
            be executed in counterparts. Facsimile signatures of this agreement
            shall be considered binding, and the same as original signatures.
          </li>
          <li>
            Compliance with Law. Each party warrants that all times they are and
            will remain in compliance with all applicable federal, state and
            local laws pertaining to the services provided for in this
            agreement. Failure to comply with this paragraph by Volunteer or
            anyone under the employment of Volunteer shall result in the
            immediate breach of this agreement.
          </li>
        </ol>
      </Modal>
      <Checkbox
        className="margin-left-25"
        checked={registrationForm.additionalInformation.agreeTermsAndConditions}
        onChange={(e) => {
          const updatedRegForm = {
            ...registrationForm,
            additionalInformation: {
              ...registrationForm.additionalInformation,
              agreeTermsAndConditions: e.target.checked,
            },
          };
          setRegistrationForm(updatedRegForm);
        }}
      >
        I agree to the terms and conditions.
      </Checkbox>
    </Form.Item>
  );
};

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(AgreeTermsAndConditions);
