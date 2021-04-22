import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = () => {

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="timeGridWeek"
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