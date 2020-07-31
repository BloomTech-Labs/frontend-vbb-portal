import React from "react";

const BasicBooking = () => {
  function handleDayChange(e) {
    console.log(e.target.value);
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
  return (
    <div>
      <h1>Book Your Weekly 1-Hour Mentoring Session Below!</h1>
      {/* Language */}
      <label htmlFor="language">Mentoring Language:</label>
      <select name="language" id="language">
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="tagalog">Tagalog</option>
      </select>
      {/* FIXME - Update to have full list of all languages offered. */}
      <br />
      <br />
      {/* Weekday */}
      <label htmlFor="weekday">Day of the Week:</label>
      <select name="weekday" id="weekday" onChange={handleDayChange}>
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
};

export default BasicBooking;
