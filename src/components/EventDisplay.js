//it creates a section on the web page which contains a rows of price, date and name
//it achieves this by passing through information in the ExpenseItem and ExpenseDate modules 
import EventTime from './EventTime.js';
import './EventDisplay.css'
import { Link } from 'react-router-dom';
//import EventSubPage from './EventSubPage.js';


const EventDisplay = ({ startTime, endTime, eventName, eventType, eventId, event, onSetPost}) => {
    onSetPost(event);

    return (
        
        <Link class="text-no-underline" to={`/${eventId}`}>      
        <div className="event-item">
            <EventTime start={startTime} end={endTime}/>
            <div className="event-item__description">
                <h2>{eventName}</h2>
                <div className="event-item__type">{eventType}</div>
            </div>
        </div>
        </Link>
    );
}

export default EventDisplay

//