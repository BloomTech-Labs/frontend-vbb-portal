import React,{useState} from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.css'
import { events ,resourceMap } from './data'
import {customWeekViewEvent} from './CustomEvent'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'

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

let components = {
    week: {
         event: customWeekViewEvent,
    },
  }

const MyCalendar = props => {

  const [show,setShow] = useState(true)

  const [theView,setTheView] = useState(true)
    return (
  <div className="calendarWrapperDiv">
    {show
    ?
    <Calendar
    localizer={localizer}
    events={events}
    startAccessor="start"
    endAccessor="end"
    views={{
      week: true,
    }}
    components={components}
    timeslots={1}
    defaultView='week'
  />
  :
  <Resources/>
    }
    

  </div>
)}

export default MyCalendar
