import React from 'react';

function SideBarEvent({ event, showModal, setClickSelected }) {
  const eventStartTime = Date.parse(event.start);
  const newTime = Date.now();
  console.log(Date.UTC.toString());

  return (
    <div
      onClick={() => {
        showModal();
        setClickSelected({ ...event });
      }}
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

export default SideBarEvent;
