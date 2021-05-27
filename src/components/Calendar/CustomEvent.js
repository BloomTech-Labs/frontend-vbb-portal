import React from 'react'

//for now, available and unavailable computers are hardcoded in data file
export const customWeekViewEvent = data => {
    return (
        <div className='rbc-events-container'>
            <p className='resourceEvent assignedComputers'>Available computers: {data.event.availableComputers}/{data.event.unavailableComputers + data.event.availableComputers}</p>        </div>
    )
}

//mentor and student are currently hardcoded in data file
export const customResourceViewEvent = data => {
    return (
        <div className='rbc-events-container'>
            <p className='resourceEvent mentor'>Mentor: {data.event.mentor}</p>
            <p className='resourceEvent student'>Student: {data.event.student ? data.event.student: <span>None</span>}</p>
        </div>
    )
}