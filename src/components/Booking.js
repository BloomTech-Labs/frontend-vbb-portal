import React from "react";
import axios from "axios";
// import moment from 'moment';
import moment from 'moment-timezone';
import { connect } from "react-redux";

class Booking extends React.Component {
  state = {
    libraries: [],
    languages: {},
    times: [],
    timezone: moment.tz.guess(),
    language: 1,
    weekday: 0,
    library: 0,
    isReturning: false,
  };

  fetchBookingData = () => {
    console.log('fetching libraries');
    console.log("token", this.props.token)
    axios.get("http://127.0.0.1:8000/api/library/")
    .then(res => {
      res.data.unshift({id: 0, name: "Any", tz: null});
      this.setState({
        libraries: res.data//.push({id: null, name: "any", tz: null})
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
    this.fetchTimes();
  }

  fetchTimes = () => {
    console.log('fetch times token', this.props.token);
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };
    axios.get("http://127.0.0.1:8000/api/available/", {
      params: {
        library: this.state.library,
        language: this.state.language,
        min_hsm: this.state.weekday,
        max_hsm: parseInt(this.state.weekday) + 23
      }
    }).then(res => {
      console.log("recieved times", res.data)
      this.setState({
        times: res.data
      }, () => {console.log("recieved times", this.state.times);});
    }).catch(err => {
      console.log(err);
    });
  }

  display_time = (hsm) => {
    var tzhsm =  this.shift_time(hsm);
    var time24 = tzhsm %24;
    var time12 = tzhsm %12;
    if (time24 === 0 ) return("12 am");
    if (time24 === 12 ) return("12 pm");
    if (time24 === time12) return(time12 + " am");
    return(time12 + " pm");
  }

  shift_time = (hsm) => {
    var now = moment();
    now.tz(this.state.timezone);
    var localOffset = now.utcOffset();
    now.tz("America/New_York"); //eastern time zone is the server standard as of 8/1/2020
    var easternOffset = now.utcOffset();
    var diffInMinutes = localOffset - easternOffset;
    var diffInHours = diffInMinutes/60;
    return(hsm + diffInHours + 168)%168;
  }

  handleMentorChange = () => {
    this.setState({
      isReturning: !this.state.isReturning
    }, () => {    
      if(!this.state.isReturning) {
        this.setState({
          library:0
        });
      }
    });
  }

  handleDropDownChange = (e) => {
    console.log("target", e.target.name);
    console.log(e.target.value);

    var newState = {};
    newState[e.target.name] = e.target.value; 
    this.setState(newState, () => {console.log("state", this.state); this.fetchTimes();});
  }

  componentDidMount() {
    console.log(moment.tz.names());
    console.log("state before mount", this.state);
    console.log('token', this.props.token);
    this.fetchBookingData();
    console.log("state after mount", this.state);
    console.log('token', this.props.token);
  }

  // componentWillUpdate(){
  //   console.log("component will update");
  //   console.log("state", this.state);
  //   console.log('token', this.props.token);
  // }

  // componentDidUpdate(){
  //   if (!this.props.token) {
  //     console.log("component did update");
  //     console.log("state", this.state);
  //     console.log('token', this.props.token);
  //     this.fetchBookingData();
  //   }
  // }

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
        <label htmlFor="timezone">Reference Timezone:</label>&nbsp;
        <select name="timezone" id="timezone" onChange={ this.handleDropDownChange } value={this.state.timezone}>
        {this.state.languages && this.state.languages.length > 0 &&
              moment.tz.names().map(tz => {
                return <option key={tz} value={tz}>{tz}</option>;
              })}
        </select>
        <br/> <br/>
        <input type="checkbox" id="mentor" name="mentor" onChange={ this.handleMentorChange }/>
        <label htmlFor="mentor">
          Are you a returning mentor/Do you wish to rebook an existing appointment?
        </label>
        <br />
        <br />
        {
          this.state.isReturning &&
          <div>
            <label htmlFor="library">If you would like to continue with the same library as before, please select that library here:&nbsp;</label>
            <select name="library" id="library" onChange={ this.handleDropDownChange }>
            {this.state.libraries && this.state.libraries.length > 0 &&
                  this.state.libraries.map(lib => {
                    return <option key={lib.id} value={lib.id}>{lib.name}</option>;
                  })}
            </select>
            <br />
            <br />
          </div>
        }
        <label htmlFor="language">Mentoring Language:&nbsp;</label>
        <select name="language" id="language" onChange={ this.handleDropDownChange }>
        {this.state.languages && this.state.languages.length > 0 &&
              this.state.languages.map(lang => {
                return <option key={lang.id} value={lang.id}>{lang.name}</option>;
              })}
        </select>
        {/* FIXME - Update to have full list of all languages offered. */}
        <br />
        <br />
        {/* Weekday */}
        <label htmlFor="weekday">Day of the Week:&nbsp;</label>
        <select name="weekday" id="weekday" onChange={ this.handleDropDownChange }>
          <option value={(168-1)%168}>Monday</option>
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
        <label htmlFor="time">Time of Day:&nbsp;</label>
        <select name="time" id="time">
        {this.state.times && this.state.times.length > 0 &&
              this.state.times.map(time => {
                return <option key={time.hsm} value={time.hsm}>{this.display_time(time.hsm)}</option>;
              })}
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
