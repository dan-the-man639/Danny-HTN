import { useParams, Link } from 'react-router-dom';
import React from 'react';
import './EventSubPage.css'

function EventSubPage({events}){
    
    console.log("jiiiii")
    console.log(events)

    const { eventId } = useParams();
    const event = events.find(event => (event.id).toString() === eventId);

    //get date
    const date = new Date(event.start_time);
    const endDate = new Date(event.end_time);
    const startHour = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const endHour = endDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return(
        <div className='subPage'>
            <div>
            <h2 className='eventName'>{event.name}</h2>
            <div className='eventType' >{event.event_type}</div>
            <div className='eventHours'>{startHour} - {endHour}</div>
            <p>By: {event.speakers[0].name}</p>
            <p className='eventDescription'>{event.description}</p>
            </div>    
        </div>
    );
}

export default EventSubPage;