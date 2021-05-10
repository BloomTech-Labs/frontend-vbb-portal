import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.css'
import { events } from './data'
import {customWeekViewEvent} from './CustomEvent'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import Resources from './Resources'
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
    return (
  <div className="calendarWrapperDiv">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      views={{
        week: true,
        day: Resources,
      }}
      components={components}
      timeslots={1}
      defaultView='week'
    />
  </div>
)}

export default MyCalendar
