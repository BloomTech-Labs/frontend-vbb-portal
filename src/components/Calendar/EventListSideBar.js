import { Menu, Dropdown } from 'antd';

import SideBarEvent from './SideBarEvent';

function EventListSideBar({
  events,
  showModal,
  setClickSelected,
  setSelectLocation,
}) {
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

  //change handler for select location
  const handleLocationChange = (e) => {
    setSelectLocation(e.item.props.value);
  };

  const schoolMenu = (
    <Menu onClick={handleLocationChange}>
      <Menu.Item value="India" key="1">
        India
      </Menu.Item>
      <Menu.Item value="Africa" key="2">
        Africa
      </Menu.Item>
      <Menu.Item value="" key="3">
        All Locations
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="sidebar-container">
      <div className="calendar-container">
        <div className="rbc-toolbar rbc-btn-group">
          <Dropdown overlay={schoolMenu}>
            <button trigger={['click']}>Select Location</button>
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
