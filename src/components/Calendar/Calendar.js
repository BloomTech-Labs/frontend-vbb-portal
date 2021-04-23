import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import './calendar.css'
import interactionPlugin from '@fullcalendar/interaction';
import { fakeData } from './data';

const Calendar = () => {

    const [events] = useState(fakeData)
    console.log("Events", events);


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