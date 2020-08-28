import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import { getDateStr } from "../helpers";

class SessionDetails extends React.Component {
  state = {
    id: "",
    display: "",
    endDate: "",
    mentorNotes: "",
    readyToApplyChanges: false,
  };

  fetchSessionSlotData = () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };
    const sessionid = this.props.match.params.sessionid;
    axios
      .get(`http://127.0.0.1:8000/api/session/${sessionid}`)
      .then((res) => {
        console.log("res : ", res);
        console.log("rd: ", res.data.display);
        this.setState({
          //   sessionslot: res.data,
          id: res.data.id,
          display: res.data.display,
          endDate: res.data.end_date,
          mentorNotes: res.data.mentor_notes,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("There was an error in retrieving your mentoring sessions", err);
      });
  };

  onApplyChanges = () => {
    console.log("state: ", this.state);
  };

  componentDidMount() {
    this.fetchSessionSlotData();
    console.log("token: ", this.props.token);
  }

  render() {
    return (
      <div className="cream-bg" style={{ paddingTop: "30px" }}>
        <div
          className="session-details-card col-card mx-auto p-4 m-4"
          style={{ borderRadius: "30px" }}
        >
          <div className="d-block mb-4">
            <h5>Adjust Mentoring Session #{this.state.id}:</h5>
            <h4 className="session-details-link session-details-location px-5">
              {this.state.display}
            </h4>
          </div>
          <div className="d-block mb-2">
            <label className="ml-4">Adjust End Date:</label>
            <input
              type="date"
              className="mx-4"
              value={this.state.endDate}
              min={getDateStr(14)} // min is 2 weeks out
              max={getDateStr(365)} // max is 1 year out
              onChange={(event) => {
                this.setState({
                  endDate: event.target.value,
                  readyToApplyChanges: true,
                });
                console.log("newDate: ", this.state.endDate);
              }}
            />
          </div>
          <div className="d-block w-75 mb-2">
            <label
              className="mx-auto px-4"
              style={{ maxWidth: "500px", paddingRight: "30px" }}
            >
              Add/Edit Notes: <br />
              (Mentee name, mentee interests, session notes, etc.)
            </label>
            <textarea
              className="w-100 mx-4"
              rows="3"
              value={this.state.mentorNotes}
              onChange={(event) =>
                this.setState({
                  mentorNotes: event.target.value,
                  readyToApplyChanges: true,
                })
              }
            />
          </div>
          <div
            className="d-block my-2 w-75 mx-auto"
            style={{ maxHeight: "300px" }}
          >
            <button
              className="btn d-block mx-auto my-3 btn-light unbook-btn"
              onClick={this.onUnbookClick}
              // FIXME - Make call to unbooking api
            >
              UNBOOK THIS SLOT
            </button>
            <a href="/" type="button" className="btn px-4 goback-btn d-inline ">
              GO BACK
            </a>
            <button
              className="btn btn-light applychanges-btn float-right"
              disabled={!this.state.readyToApplyChanges}
              onClick={this.onApplyChanges}
              // FIXME - Make call to end date and mentor notes updater api
            >
              APPLY CHANGES
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(SessionDetails);
