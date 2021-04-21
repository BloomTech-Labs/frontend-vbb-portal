import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = () => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
<<<<<<< HEAD
=======
            dayHeaderFormat={{
                weekday: 'short',
                day: 'numeric'
            }}
>>>>>>> cf773c370b239f7b0aafce9da5459265b64496e2
        />
    )
}

export default Calendar;