import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { fakeData } from './data';
import DataToBeDisplayed from './dataDisplay'

const Calendar = () => {
    const CalendarEventDisplay = () => {
        alert("Help me out, give me a Mentor")
        return(
            {DataToBeDisplayed}
        )
    }
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="timeGridWeek"
            nowIndicator="true"
            customButtons={{
                myCustomButton: {
                    text: "▼",
                    // click:
                },
            }}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,myCustomButton'
              }}
            dayHeaderFormat={{
                weekday: 'short',
                day: 'numeric'
            }}
            events={fakeData}
            eventClick={CalendarEventDisplay}
        />
    )
}





export default Calendar;