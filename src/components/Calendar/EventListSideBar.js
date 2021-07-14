import React, { useState } from 'react';
import Moment from 'moment';
import {
  Dropdown,
  Menu,
} from 'antd';

import SideBarEvent from './SideBarEvent';

function EventListSideBar({
  events,
  showModal,
  setClickSelected,
  setSelectLocation,
  selectLocation,
}) {
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

  const [selectedKey, setSelectedKey] = useState('3')

  const handleLocationChange = (e) => {
    setSelectLocation(e.item.props.value)
    setSelectedKey(e.item.props.eventKey)
  }

  const schoolMenu = (
    <Menu onClick={handleLocationChange} selectedKeys={selectedKey}>
      <Menu.Item value="India" key="1">India</Menu.Item>
      <Menu.Item value="Africa" key="2">Africa</Menu.Item>
      <Menu.Item value="" key="3">All Locations</Menu.Item>
    </Menu>
  );

  return (
    <div className="sidebar-container">
      <div className="calendar-container">
        <div className="rbc-toolbar rbc-btn-group">
          <Dropdown overlay={schoolMenu}>
            <button trigger={['click']}>{selectLocation ? `Location: ${selectLocation}` : 'Filter by Location'}</button>
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
