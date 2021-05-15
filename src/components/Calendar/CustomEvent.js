import React from 'react'
export const customWeekViewEvent = () => {
    return (
        <div className='rbc-events-container'>
            <p className='rbc-event-label assignedComputers'>Assigned Computers: 5</p>
            <p className='rbc-event-label availableComputers'>Available Computers: 5</p>
        </div>
    )
}

export const customResourceViewEvent = () => {
    return (
        <div className='rbc-events-container'>
            <p className='resourceEvent'>Mentor Name</p>
            <p className='resourceEvent'>Student Name</p>
        </div>
    )
}