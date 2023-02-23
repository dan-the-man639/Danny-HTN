import EventDisplay from "./EventDisplay";
import React, { useState, useEffect } from 'react';
import './RenderEvent.css'
import Login from './Login/Login'
// import {
//     Route,
//     Switch,
//     useHistory,
// } from "react-router-dom";

const RenderEvent = ({ events }) => {
    
    const [loginState, setLoginState] = useState(false);
    

    //filter private or public
    let showEvent = [];
    if (!loginState) {//if not loged create a public event array
        showEvent = events.filter((event) => event.permission === 'public');
    } else {
        showEvent = events;
    }

    //SORT EVENTS
    {(events.length) ? showEvent.sort((a, b) => a.start_time - b.start_time) : <div>sort event error</div>}
    

    return (
        <div className="eventBackGround">
            {(events.length) ?
                <div >
                    <Login onSetLoginState={setLoginState}/>
                    {showEvent.map((event) => (
                        <EventDisplay
                            key={event.id}
                            startTime={event.start_time}
                            endTime={event.end_time}
                            eventName={event.name}
                            eventType={event.event_type}
                            eventId={event.id}
                            event={event}
                        />
                    ))
                    }
                </div> : <div>no event to display</div>}

        </div>
    )
}


export default RenderEvent;
//<Login onSetLoginState={setLoginState}/>