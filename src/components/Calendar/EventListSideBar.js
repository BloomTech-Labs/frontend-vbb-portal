import { events } from './data';

import Event from './Event';

function EventListSideBar({ showModal, setClickSelected }) {
  const pendings = events
    .filter((e) => {
      if (
        e.eventStatus === false &&
        e.start.getMonth() + e.start.getDate() ===
          new Date().getUTCMonth() + new Date().getUTCDate()
      ) {
        {
          return e;
        }
      }
    })
    .sort((a, b) => new Date(a.start) - new Date(b.start));

  const checkedIns = events.filter((e) => {
    if (
      e.eventStatus === true &&
      e.start.getMonth() + e.start.getDate() ===
        new Date().getUTCMonth() + new Date().getUTCDate()
    ) {
      {
        return e;
      }
    }
  });

  console.log('help', checkedIns);
  return (
    <div className="sidebar-container">
      <h4>Today's Sessions</h4>
      <div className="events-container">
        <div className="pendings">
          <h5>Pending:</h5>
          <div className="events">
            {pendings.map((e) => (
              <Event
                setClickSelected={setClickSelected}
                showModal={showModal}
                event={e}
              />
            ))}
          </div>
        </div>
        <div className="checked-ins">
          <h5>Checked-in:</h5>
          <div className="events">
            {checkedIns.map((e) => (
              <Event
                setClickSelected={setClickSelected}
                showModal={showModal}
                event={e}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventListSideBar;
