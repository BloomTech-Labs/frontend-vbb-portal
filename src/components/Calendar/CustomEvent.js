import React from 'react'
import { WarningOutlined } from '@ant-design/icons'

import '../../less/index.less';

//for now, available and unavailable computers are hardcoded in data file
export const customWeekViewEvent = data => {
    return (
        <div className='rbc-events-container'>
            <p className='resourceEvent assignedComputers' id="session-background-week-view">Available computers: {data.event.availableComputers}/{data.event.unavailableComputers + data.event.availableComputers}</p>        </div>
    )
}



//mentor and student are currently hardcoded in data file
export const customResourceViewEvent = data => {
    console.log(data)
    return (
        <div className='rbc-events-container' id = {data.event.eventStatus === true ? 'session-background-color-checked-in' : 'session-background-color-pending-check-in'}>
        
            <p className='resourceEvent mentor'>Mentor: {data.event.mentor}</p>
            <p className='resourceEvent student'>Student: {data.event.student ? data.event.student : <span><WarningOutlined className="color-FF914C" /></span>}</p>
        </div>
    )
}