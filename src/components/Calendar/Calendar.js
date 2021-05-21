import {React, useState} from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.css'
import { events ,resourceMap } from './data'
import {customWeekViewEvent, customResourceViewEvent} from './CustomEvent'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import Toolbar from './ResourcesToolbar'
import { Menu, Dropdown } from 'antd';
import ComputersList from './assign-computers/computers-list'

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

//location dropdown menu
const schoolMenu = (
  <Menu>
    <Menu.Item key="1">
      India
    </Menu.Item>
    <Menu.Item key="2">
      Africa
    </Menu.Item>
  </Menu>
);

//custom toolbar and custom event displayed
let components = {
  toolbar: Toolbar,
    week: {
      event: customWeekViewEvent,
    },
    day: {
      event: customResourceViewEvent
    }
  }

const MyCalendar = props => {

  const [showWeekView, setShowWeekView] = useState(true)
  const[showCalendar, setShowCalendar]= useState(true)
  const [dragSelected, setDragSelected] =useState({
    start:"",
    end:"",
    mentor:"",
    student:"",
    resourceId:0
  })

  const handleDragSelect =({start,end})=>{
    setDragSelected({
      ...dragSelected,
      start: start,
      end: end})
    setShowCalendar(!showCalendar)
  }
  const handleEventClick = e =>{
    setDragSelected({
      ...dragSelected,
      start: e.start,
      end: e.end,
      mentor: e.mentor,
      student: e.student,
      resourceId: e.resourceId
    }
    );
    setShowCalendar(!showCalendar)
  }


  return (
    <div className="calendarWrapperDiv" id="section-to-print">

    <div className="rbc-toolbar rbc-btn-group">
      <Dropdown overlay={schoolMenu}>
        <button trigger={['click']}>Select Location</button>
      </Dropdown>
    </div>
    {/* if showCalendar is true, we give them the default, else we show the scheduler */}
    {showCalendar ?
      <Calendar
        selectable
        localizer={localizer}
        // min and max sets the start and end time of day displayed
        min={new Date(Date.UTC(0, 0, 0, 12, 0, 0))}
        max={new Date(Date.UTC(0, 0, 0, 22, 0, 0))}
        onView={()=>{
          setShowWeekView(!showWeekView)
        }}
        // onSelectEvent={handleSelectEvent} 
        events={events}
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
        defaultView='week'
        onSelectSlot={handleDragSelect}
        onSelectEvent = {handleEventClick}
      />
    :
    <ComputersList setShowWeekView={setShowWeekView} dragSelected={dragSelected} setShowCalendar={setShowCalendar} showCalendar = {showCalendar} />
}
  </div>
)}

export default MyCalendar
