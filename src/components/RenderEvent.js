import EventDisplay from "./EventDisplay";
import React, { useState, useEffect } from 'react';
import './RenderEvent.css'
import Login from './Login/Login'
// import {
//     Route,
//     Switch,
//     useHistory,
// } from "react-router-dom";

const RenderEvent = ({ events, onSetPost }) => {



    //filter private or public
    const [loginState, setLoginState] = useState(false);
    let showEvent = [];
    if (!loginState) {//if not loged create a public event array
        showEvent = events.filter((event) => event.permission === 'public');
    } else {
        showEvent = events;
    }

    //SORT EVENTS
    showEvent.sort((a, b) => a.start_time - b.start_time);
    console.log(showEvent);

    return (

        <div className="eventBackGround">
            {(events.length) ?
                <div >
                    {showEvent.map((event) => (
                        <EventDisplay
                            key={event.id}
                            startTime={event.start_time}
                            endTime={event.end_time}
                            eventName={event.name}
                            eventType={event.event_type}
                            eventId={event.id}
                            event={event}
                            onSetPost={onSetPost}
                        />
                    ))
                    }
                </div> : <div>no event to display</div>}

        </div>
    )
}


export default RenderEvent;
//<Login onSetLoginState={setLoginState}/>