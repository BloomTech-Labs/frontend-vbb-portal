import { events } from './data';
import { Menu, Dropdown } from 'antd';


import SideBarEvent from './SideBarEvent';

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

  const schoolMenu = (
    <Menu>
      <Menu.Item key="1">India</Menu.Item>
      <Menu.Item key="2">Africa</Menu.Item>
      <Menu.Item key="3">All Locations</Menu.Item>
    </Menu>
  );

// handle change for select location
  const handleLocationChange = (props) => {
    props.setSelectLocation({ name: events.target.value });
  }

  return (
    <div className="sidebar-container">
      <div className="calendar-container">
        <div className="rbc-toolbar rbc-btn-group">
          <Dropdown overlay={schoolMenu}>
            <button trigger={['click']} onClick={handleLocationChange}>Select Location</button>
          </Dropdown>
        </div>
        <h4>Today's Sessions</h4>
        <div className="events-container">
          <div className="pendings">
            <h5>Pending:</h5>
            <div className="events">
              {pendings.map((e) => (
                <SideBarEvent
                  key={e.resourceId}
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
                <SideBarEvent
                  key={e.resourceId}
                  setClickSelected={setClickSelected}
                  showModal={showModal}
                  event={e}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventListSideBar;
