import React from 'react'
import { events, resourceMap } from './data'

export const customWeekViewEvent = date => {
    return (
        <div className='rbc-events-container'>
            <p className='rbc-event-label assignedComputers'>Assigned Computers: 5</p>
            <p className='rbc-event-label availableComputers'>Available Computers: {date.event.availableComputers}</p>
        </div>
    )
}

export const customResourceViewEvent = () => {
    return (
        <div className='rbc-event-container'>
            <p className='resourceEvent'>Mentor Name</p>
            <p className='resourceEvent'>Student Name</p>
        </div>
    )
}