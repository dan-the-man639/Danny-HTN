import { useParams } from 'react-router-dom';
import React from 'react';
import './EventSubPage.css'

function EventSubPage({ events }) {



    if (events.length == 0) {
        console.log("empty array for start time")
    }

    const { eventId } = useParams();
    var event = events.find(event => (event.id).toString() === eventId);

    // console.log("eventSubPage")
    // console.log("Events in ESP:", events);
    // console.log("id:", eventId);
    // console.log("Single event:", event);
    // console.log("Est:", event.start_time);
    

    //get date
    const date = new Date(event.start_time);
    const endDate = new Date(event.end_time);
    const startHour = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const endHour = endDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return (
        <div className='subPage'>
            {event ? (
                <div>
                    <h2 className='eventName'>{event.name}</h2>
                    <div className='eventType' >{event.event_type}</div>
                    <div className='eventHours'>{startHour} - {endHour}</div>
                    <p>By: {event.speakers[0].name}</p>
                    <p className='eventDescription'>{event.description}</p>
                </div>
            ) : (
                <p>Loading event...</p>
            )}
        </div>
    );
}

export default EventSubPage;