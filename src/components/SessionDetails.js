import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class SessionDetails extends React.Component {
  state = {
    id: "",
    display: "",
    endDate: "",
    mentorNotes: "",
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

  componentDidMount() {
    this.fetchSessionSlotData();
    console.log("token: ", this.props.token);
  }

  render() {
    return (
      <div>
        {this.state.id}
        {this.state.display}
        {this.state.endDate}
        {this.state.mentorNotes}
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
