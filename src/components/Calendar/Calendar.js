import { React, useState, useEffect } from 'react';
import { events, resourceMap } from './data';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/addons/dragAndDrop/';
import '../../less/calendar.less';
import { customWeekViewEvent, customResourceViewEvent } from './CustomEvent';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import Toolbar from './ResourcesToolbar';
import ComputersList from './assign-computers/computers-list';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import CheckinModal from './CheckinModal';
import EventListSideBar from './EventListSideBar';


const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

//drag and drop
const TheCalendar = withDragAndDrop(Calendar);

//custom toolbar and custom event displayed
let components = {
  toolbar: Toolbar,
  week: {
    event: customWeekViewEvent,
  },
  day: {
    event: customResourceViewEvent,
  },
};

const MyCalendar = (props) => {
  const [displayDragItemInCell, setDisplayDragItemInCell] = useState(true);
  const [draggedEvent, setDraggedEvent] = useState(null);
  const [allEvents, setAllEvents] = useState(events);
  const [showWeekView, setShowWeekView] = useState(true);
  const [showCalendar, setShowCalendar] = useState(true);
  const [dragSelected, setDragSelected] = useState({
    start: '',
    end: '',
    mentor: '',
    student: '',
    resourceId: 0,
  });

  const [clickSelected, setClickSelected] = useState({
    start: '',
    end: '',
    mentor: '',
    student: '',
    resourceId: 0,
    title: '',
    checkedIn: false,
  });

  // State to manage visibility of event Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
      };

  // State to mange selecting locations
  const [selectLocation, setSelectLocation] = useState(true)

  // Drag feature
  const handleDragStart = (event) => {
    setDraggedEvent(event);
  };
  const dragFromOutsideItem = () => {
    return draggedEvent;
  };
  const onDropFromOutside = ({ start, end, allDay }) => {
    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay: allDay,
    };
    setDraggedEvent(null);
    moveEvent({ event, start, end });
  };

  const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    let allDay = event.allDay;
    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }
    const nextEvents = allEvents.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end, allDay }
        : existingEvent;
    });
    setAllEvents(nextEvents);
  };

  const resizeEvent = ({ event, start, end }) => {
    const nextEvents = allEvents.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });
    setAllEvents(nextEvents);
  };

  const handleDragSelect = ({ start, end }) => {
    setDragSelected({
      ...dragSelected,
      start: start,
      end: end,
    });
    setShowCalendar(!showCalendar);
  };

  const handleEventClick = (e) => {
    //If in week view clicking an event will hide the calendar, to show computer list

    if (showWeekView) {
      setDragSelected({
        ...dragSelected,
        start: e.start,
        end: e.end,
        mentor: e.mentor,
        student: e.student,
        resourceId: e.resourceId,
        location: e.location
      });
      setShowCalendar(!showCalendar);
    }

    // Else clicking a event will bring pop-up of event details
    else {
      setClickSelected({
        ...dragSelected,
        start: e.start,
        end: e.end,
        mentor: e.mentor,
        student: e.student,
        resourceId: e.resourceId,
        title: e.title,
        location: e.location
      });
      showModal();
      
    }
  };

  // useEffect for select location dropdown
  // useEffect(() => {
  //   console.log(selectLocation)
  // }, [selectLocation])

  return (
    <div className="calendarWrapperDiv" id="section-to-print">
        <CheckinModal
        details={{ ...clickSelected }}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setClickSelected={setClickSelected}
      />


      <EventListSideBar
        showModal={showModal}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setClickSelected={setClickSelected}
        setSelectLocation={setSelectLocation}
      />
      <div className="calendar-container">
        {/* if showCalendar is true, we give them the default, else we show the scheduler */}
        {showCalendar ? (
          <Calendar
            selectable
            localizer={localizer}
            popup={true}
            // min and max sets the start and end time of day displayed
            min={new Date(Date.UTC(0, 0, 0, 12, 0, 0))}
            max={new Date(Date.UTC(0, 0, 0, 22, 0, 0))}
            onView={() => {
              setShowWeekView(!showWeekView);
            }}
            // onSelectEvent={handleSelectEvent}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            views={{
              week: true,
              day: true,
            }}
            components={components}
            //toggle showWeekView to switch with showing the resource view
            resources={showWeekView === true ? null : resourceMap}
            resourceIdAccessor="resourceId"
            resourceTitleAccessor="resourceTitle"
            timeslots={1}
            defaultView="week"
            onSelectSlot={handleDragSelect}
            onSelectEvent={handleEventClick}
            onEventDrop={moveEvent}
            resizable
            onEventResize={resizeEvent}
            dragFromOutsideItem={
              displayDragItemInCell ? dragFromOutsideItem : null
            }
            onDropFromOutside={onDropFromOutside}
            handleDragStart={handleDragStart}
          />
        ) : (
          <ComputersList
            setShowWeekView={setShowWeekView}
            dragSelected={dragSelected}
            setShowCalendar={setShowCalendar}
            showCalendar={showCalendar}
          />
        )}
      </div>
    </div>
  );
};

export default MyCalendar;
