import React from 'react';
import axios from 'axios';
import * as actions from '../redux/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

import Whiteboard from '../images/Whiteboard.jpeg';
import Khan from '../images/Khan-Academy.png';
import Classroom from '../images/google-classroom.jpg';
import Facebook from '../images/VBB-FB.png';
import Meet from '../images/google-meet.jpg';
import Website from '../images/VBB-Website.png';

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
                <b>Welcome Student, </b> please check out the available
                resources to help you along your journey
              </h4>
            </>
          )}
        </div>
        <div className="column col-card" id="student-resources-box">
          <div
            className="twocol-container"
            id="student-resources-fields"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Card
              style={{
                width: '18rem',
                margin: '1rem',
                boxShadow: '0 2px 7px 3px #949ca5',
              }}
            >
              <a
                className="card-image-link"
                href="https://idroo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  variant="top"
                  src={Whiteboard}
                  alt="Whiteboard"
                  style={{ maxWidth: 'auto', height: '150px' }}
                />
              </a>
              <Card.Body>
                <Card.Title>Whiteboard</Card.Title>
                <Card.Text>
                  <small>
                    IDroo does everything you would expect from an online
                    whiteboard. Instant real time collaboration in your browser
                    without the hassle.
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '18rem',
                margin: '1rem',
                boxShadow: '0 2px 7px 3px #949ca5',
              }}
            >
              <a
                className="card-image-link"
                href="https://www.khanacademy.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  variant="top"
                  src={Khan}
                  alt="Khan Academy"
                  style={{ maxWidth: 'auto', height: '150px' }}
                />
              </a>
              <Card.Body>
                <Card.Title>Khan Academy</Card.Title>
                <Card.Text>
                  <small>
                    Khan Academy offers practice exercises, instructional
                    videos, and a personalized learning dashboard that empower
                    learners to study at their own pace in and outside of the
                    classroom.
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '18rem',
                margin: '1rem',
                boxShadow: '0 2px 7px 3px #949ca5',
              }}
            >
              <a
                className="card-image-link"
                href="https://classroom.google.com/u/0/h"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  variant="top"
                  src={Classroom}
                  alt="Google Classroom"
                  style={{ maxWidth: 'auto', height: '150px' }}
                />
              </a>
              <Card.Body>
                <Card.Title>Google Classroom</Card.Title>
                <Card.Text>
                  <small>
                    Google Classroom is a free web service developed by Google
                    for schools that aims to simplify creating, distributing,
                    and grading assignments. The primary purpose of Google
                    Classroom is to streamline the process of sharing files
                    between teachers and students.
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '18rem',
                margin: '1rem',
                boxShadow: '0 2px 7px 3px #949ca5',
              }}
            >
              <a
                className="card-image-link"
                href="https://www.villagebookbuilders.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  variant="top"
                  src={Website}
                  alt="Home Website"
                  style={{ maxWidth: 'auto', height: '150px' }}
                />
              </a>
              <Card.Body>
                <Card.Title>Village Home Website</Card.Title>
                <Card.Text>
                  <small>
                    We are a non-profit organization EMPOWERING villages around
                    the world to end the cycle of poverty through EDUCATION.
                    Education plays a big role in the development of a community
                    and BUILDING a library is just the first step towards
                    creating a space dedicated to LEARNING
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '18rem',
                margin: '1rem',
                boxShadow: '0 2px 7px 3px #949ca5',
              }}
            >
              <a
                className="card-image-link"
                href="https://apps.google.com/meet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  variant="top"
                  src={Meet}
                  alt="Google Meet"
                  style={{ maxWidth: 'auto', height: '150px' }}
                />
              </a>
              <Card.Body>
                <Card.Title>Google Meet</Card.Title>
                <Card.Text>
                  <small>
                    Google Meet is a video-communication service developed by
                    Google. It is one of two apps that constitute the
                    replacement for Google Hangouts, the other being Google
                    Chat.
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '18rem',
                margin: '1rem',
                boxShadow: '0 2px 7px 3px #949ca5',
              }}
            >
              <a
                className="card-image-link"
                href="https://www.facebook.com/VillageBookBuilders/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  variant="top"
                  src={Facebook}
                  alt="Village Facebook"
                  style={{ maxWidth: 'auto', height: '150px' }}
                />
              </a>
              <Card.Body>
                <Card.Title>Village Facebook</Card.Title>
                <Card.Text>
                  <small>
                    Connect with Village Book Builders and stay up to date on
                    the latest news, events and community activities.
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <p
            style={{ padding: '20px', paddingLeft: '40px', maxWidth: '900px' }}
          >
            <b>
              If you would like to change a mentoring session, have questions
              about mentoring, or ANY QUESTIONS, please contact your mentor
              advisor at{' '}
              <a href="mailto:mentor@villagebookbuilders.org">
                mentor@villagebookbuilders.org
              </a>
              !<br />
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
