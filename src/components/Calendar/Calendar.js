import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { fakeData } from './data';

const Calendar = () => {

    const [events] = useState(fakeData)
    console.log("Events", events);


    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            selectable={true}
            editable={true} //to drag event
            durationEditable = {true}//to change event duration
            events={events}
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
        />
    )
}

export default Calendar;