import React from 'react';
import axios from 'axios';
import * as actions from '../redux/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Student extends React.Component {
  state = {
    sessionSlots: [],
  };

  fetchSessionSlotData = () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.props.authToken}`,
    };
    axios
      .get(`${actions.PYTHON_API}v1/session/`)
      .then((res) => {
        this.setState({
          sessionSlots: res.data,
        });
      })
      .catch((err) => {
        console.log('There was an error in retrieving your sessions', err);
        // alert('There was an error in retrieving your sessions', err);
      });
  };

  componentDidMount() {
    this.fetchSessionSlotData();
  }

  render() {
    return (
      <div className="twocol-container cream-bg">
        <div className="column col-card" id="mentoring-session-box">
          <h1 className="vbb-header">Welcome Student!</h1>

          {this.state.sessionSlots && this.state.sessionSlots.length > 0 ? (
            <ul>
              {this.state.sessionSlots.map((apt) => {
                console.log(apt);
                return (
                  <li className="mb-2 mr-2" key={apt.id} value={apt.event_id}>
                    <a
                      className="session-details-link"
                      href={`/sessiondetails/${apt.id}/`}
                    >
                      {apt.display}
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <>
              <h4
                style={{
                  fontSize: '22px',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  textIndent: '0px',
                  color: '#ff914d',
                }}
              >
                <b>Welcome Student, </b> please check out the available resources to help you along your journey
              </h4>
            </>
          )}
        </div>
        <div className="column col-card" id="student-resources-box">
          <div className="twocol-container" id="student-resources-fields">
            <a 
              className="btn btn-light dashboard-btn l6-btn"
              href="https://idroo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whiteboard
            </a>
            <a style={{
              marginLeft: '10px'
            }}
              className="btn btn-light dashboard-btn l2-btn"
              href="https://www.khanacademy.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Khan Academy
            </a>
            <a style={{
              marginLeft: '10px'
            }}
              className="btn btn-light dashboard-btn l4-btn"
              href="https://classroom.google.com/u/0/h"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Classroom
            </a>
            <a style={{
              marginLeft: '10px'
            }}
              className="btn btn-light dashboard-btn l3-btn"
              href="https://www.facebook.com/VillageBookBuilders/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Village Mentors Facebook Page
            </a>
            <a style={{
              marginLeft: '10px'
            }}
              className="btn btn-light dashboard-btn l6-btn"
              href="https://apps.google.com/meet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Meets
            </a>
            <a style={{
              marginLeft: '10px'
            }}
              className="btn btn-light dashboard-btn l8-btn"
              href="https://www.villagebookbuilders.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VBB Home Website
            </a>
          </div>
          <p
            style={{ padding: '20px', paddingLeft: '40px', maxWidth: '900px' }}
          >
            <b>
              If you would like to change a mentoring session, have questions about
              mentoring, or ANY QUESTIONS, please contact your mentor advisor at{' '}
              <a href="mailto:mentor@villagebookbuilders.org">
                mentor@villagebookbuilders.org
              </a>!<br />
            </b>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authToken: state.authToken,
  };
};
export default withRouter(connect(mapStateToProps, actions)(Student));
