import React from 'react'
import { Calendar, dateFnsLocalizer,Navigate} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { events, resourceMap } from './data'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import * as dates from 'react-big-calendar/lib/utils/dates'
import {navigate} from 'react-big-calendar/lib/utils/constants'
import Toolbar from './ResourcesToolbar'
import './Calendar.css'
import { customResourceViewEvent } from './CustomEvent'
import MyCalendar from './Calendar'

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

const customToolbar = () => {
  return (
    null
  )
}

const components = {
  toolbar: Toolbar,
  day: {
       event: customResourceViewEvent,
  },
  week:{
      views:MyCalendar
  }
}


const Resources = props => {
    return (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      views={{
        week: true,
        day: true,
      }}
      timeslots={1}
      defaultView='day'
      defaultDate={new Date()}
      components={components}
      resources={resourceMap}
      resourceIdAccessor="resourceId"
      resourceTitleAccessor="resourceTitle"
      style={{ height: 800 }}
    />
  </div>
)}


Resources.title = (date) => {return `R ${date.toLocaleDateString()}`}
Resources.navigate = (date, action) => {
  switch (action) {
    case Navigate.PREVIOUS:
      return dates.add(date, -1, 'day')

    case Navigate.NEXT:
      return dates.add(date, 1, 'day')

    default:
      return date
  }
}

export default Resources