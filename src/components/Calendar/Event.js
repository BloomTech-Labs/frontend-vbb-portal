import React from 'react';

function Event({ event }) {
  // console.log(event);

  const eventStartTime = Date.parse(event.start);
  const newTime = Date.now();

  return (
    <div
      className={`${
        eventStartTime < newTime && event.eventStatus === false
          ? 'no-show'
          : event.eventStatus === true
          ? 'checked-in-status'
          : 'pending-status'
      } event`}
    >
      {eventStartTime < newTime && event.eventStatus === false ? (
        <h5>
          {event.student} - <span className="no-show-span">no show</span>
        </h5>
      ) : (
        <h5>{event.student}</h5>
      )}

      <p>
        {event.mentor === ''.trim()
          ? 'No mentor has been assigned'
          : `${event.title} with ${event.mentor}.`}
      </p>
    </div>
  );
}

export default Event;
