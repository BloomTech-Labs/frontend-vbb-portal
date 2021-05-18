import React from 'react'

export const customWeekViewEvent = data => {
    return (
        <div className='rbc-events-container'>
            <p className='rbc-event-label assignedComputers'>Assigned Computers: {data.event.unavailableComputers}</p>
            <p className='rbc-event-label availableComputers'>Available Computers: {data.event.availableComputers}</p>
        </div>
    )
}

export const customResourceViewEvent = data => {
    return (
        <div className='rbc-events-container'>
            <p className='resourceEvent mentor'>Mentor: {data.event.mentor}</p>
            <p className='resourceEvent student'>Student: {data.event.student}</p>
        </div>
    )
}