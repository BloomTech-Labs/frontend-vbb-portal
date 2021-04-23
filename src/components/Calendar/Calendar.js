import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import './calendar.css'

const Calendar = () => {
    return (
        <div className="wrapper-div">
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
            />
        </div>
    )
}

export default Calendar;