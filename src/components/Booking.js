import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class Booking extends React.Component {
  state = {
    libraries: [],
    languages: {},
    times: [],
    selected_language: 1,
    selected_day: 0,
    selected_library: 1,
    isReturning: false,
  };

  

  fetchBookingData = () => {
    console.log('fetching libraries');
    console.log(this.props.token)
    axios.get("http://127.0.0.1:8000/api/library/")
    .then(res => {
      this.setState({
        libraries: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
    axios.get("http://127.0.0.1:8000/api/language/").then(res => {
      this.setState({
        languages: res.data
      });
    })    
    .catch(err => {
      console.log(err);
    });
    axios.get("http://127.0.0.1:8000/api/language/").then(res => {
      this.setState({
        languages: res.data
      });
    })    
    .catch(err => {
      console.log(err);
    });
  }

  fetchTimes = () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };
    axios.get("http://127.0.0.1:8000/api/available/").then(res => {
      this.setState({
        times: res.data
      });
    });
  }

  handleMentorChange = () => {
    this.setState({
      isReturning: !this.state.isReturning
    });
  }

  handleDayChange = (e) => {
    console.log(e.target.value);
  }

  componentDidMount() {
    this.fetchBookingData();
    console.log(this.state);
  }
  // function handleTzChange(e) {
  //   console.log(e.target.value);
  // }
  // function handleLangChange(e) {
  //   console.log(e.target.value);
  // }
  // function handleDayChange(e) {
  //   console.log(e.target.value);
  // }
  render () {
    return (
      <div>
        <h1>Book Your Weekly 1-Hour Mentoring Session Below!</h1>
        {/* Language */}
        <input type="checkbox" id="commitment" name="commitment" onChange={ this.handleMentorChange }/>
        <label htmlFor="commitment">
          Are you a returning mentor/Do you wish to rebook an existing appointment?
        </label>
        <br />
        <br />
        {
          this.state.isReturning &&
          <div>
            <label htmlFor="library">If you would like to continue with the same library as before, please select that library here:</label>
            <select name="library" id="library">
            {this.state.libraries && this.state.libraries.length > 0 &&
                  this.state.libraries.map(lib => {
                    return <option value={lib.id}>{lib.name}</option>;
                  })}
            </select>
            <br />
            <br />
          </div>
        }
        <label htmlFor="language">Mentoring Language:</label>
        <select name="language" id="language">
        {this.state.languages && this.state.languages.length > 0 &&
              this.state.languages.map(lang => {
                return <option value={lang.id}>{lang.name}</option>;
              })}
        </select>
        {/* FIXME - Update to have full list of all languages offered. */}
        <br />
        <br />
        {/* Weekday */}
        <label htmlFor="weekday">Day of the Week: </label>
        <select name="weekday" id="weekday" onChange={this.handleDayChange}>
          <option value={0}>Monday</option>
          <option value={24}>Tuesday</option>
          <option value={48}>Wednesday</option>
          <option value={72}>Thursday</option>
          <option value={96}>Friday</option>
          <option value={120}>Saturday</option>
          <option value={144}>Sunday</option>
        </select>
        <br />
        <br />
        {/* Time */}
        <label htmlFor="time">Time of Day:</label>
        <select name="time" id="time">
        </select>
        {/* FIXME - Update to restrict to only the times mentoring is possible. */}
        <br />
        <br />
        <input type="checkbox" id="commitment" name="commitment" />
        <label htmlFor="commitment">
          Can you commit to mentor weekly (at this date and time) for at least 4
          months? 
        </label>
        <br />
        <br />
        {/* Submit */}
        <input type="submit" />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(Booking);
