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

  const [theView,setTheView] = useState(true)
  const[show,setShow]= useState(true)
  const [dragSelected,setDragSelected] =useState({start:"",end:""})

  const handleDragSelect =({start,end})=>{
    setDragSelected({start:start,end:end})
    setShow(!show)
  }

  return (
  <div className="calendarWrapperDiv" id="section-to-print">

<div className="rbc-toolbar rbc-btn-group">
  <Dropdown overlay={schoolMenu}>
    <button trigger={['click']}>Select Location</button>
  </Dropdown>
</div>
{show ?
    <Calendar
      selectable
      localizer={localizer}
      // min and max sets the start and end time of day displayed
      min={new Date(Date.UTC(0, 0, 0, 12, 0, 0))}
      max={new Date(Date.UTC(0, 0, 0, 22, 0, 0))}
      onView={()=>{
        setTheView(!theView)
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
      resources={theView === true ? null : resourceMap}
      resourceIdAccessor="resourceId"
      resourceTitleAccessor="resourceTitle"
      timeslots={1}
      defaultView='week'
      onSelectSlot={handleDragSelect}
      onSelectEvent = {e=>setShow(!show)}
       
    />
    :
    <ComputersList dragSelected={dragSelected} setShow={setShow} show = {show}/>
}
  </div>
)}

export default MyCalendar
