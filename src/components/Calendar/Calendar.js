import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { fakeData } from './data';

const Calendar = () => {

    const [events] = useState(fakeData)
    console.log("Events", events);
    

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="timeGridWeek"
            events={events}
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
        />
    )
}

export default Calendar;