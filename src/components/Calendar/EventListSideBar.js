import { useState } from 'react';
import Moment from 'moment';

import SideBarEvent from './SideBarEvent';
import { events } from './data';

function EventListSideBar({ showModal, setClickSelected }) {
  const isScheduledToday = (e) => (Moment(e.start).isSame(Moment(Date.now()), 'day'));
  // eslint-disable-next-line no-unused-vars
  const [forceRenderHackVar, setForceRenderHackVar] = useState(false);
  const forceRender = () => {
    setForceRenderHackVar((oldValue) => !oldValue);
  };
  const todaysEvents = events.filter(isScheduledToday);

  const pendingEvents = todaysEvents
    .filter((e) => e.eventStatus === false)
    .sort((a, b) => new Date(a.start) - new Date(b.start));
  const checkedInEvents = todaysEvents.filter((e) => e.eventStatus === true);

  const buildSideBarEvent = (event) => (
    <SideBarEvent
      key={event.resourceId}
      setClickSelected={setClickSelected}
      showModal={showModal}
      event={event}
      forceRender={forceRender}
    />
  );

  return (
    <div className="sidebar-container">
      <h4>Today&apos;s Sessions</h4>
      <div className="events-container">
        <div className="pendings">
          <h5>Pending:</h5>
          <div className="events">
            {pendingEvents.map(buildSideBarEvent)}
          </div>
        </div>
        <div className="checked-ins">
          <h5>Checked-in:</h5>
          <div className="events">
            {checkedInEvents.map(buildSideBarEvent)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventListSideBar;
