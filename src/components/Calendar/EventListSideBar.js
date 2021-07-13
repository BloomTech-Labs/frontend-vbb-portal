import React, { useState } from 'react';
import Moment from 'moment';
import { Menu, Dropdown } from 'antd';


import { events } from './data';


import SideBarEvent from './SideBarEvent';

function EventListSideBar({ showModal, setClickSelected, setSelectLocation }) {
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

  //change handler for select location
  const handleLocationChange = (e) => {
    setSelectLocation(e.item.props.value)
  }

  const schoolMenu = (
    <Menu onClick={handleLocationChange}>
      <Menu.Item value="India" key="1">India</Menu.Item>
      <Menu.Item value="Africa" key="2">Africa</Menu.Item>
      <Menu.Item value="AllLocations" key="3">All Locations</Menu.Item>
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
    </div>
  );
}

export default EventListSideBar;
