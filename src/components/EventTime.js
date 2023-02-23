import React from "react";
import "./EventTime.css"

const EventTime = ({ start, end }) => {


    const date = new Date(start);
    const endDate = new Date(end);

    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const startHour = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const endHour = endDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date_hour'>{startHour} - {endHour}</div>

        </div>
    );
}

export default EventTime;