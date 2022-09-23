import { React, useState } from 'react';

import './styles.css';

export default function App() {
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  const [showEvents, setShowEvents] = useState(true);

  const handleDelete = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id;
      });
    });
  };

  return (
    <div className='app'>
      {showEvents && <div>
        <button
          onClick={() => {
            setShowEvents(false);
          }}
        >
          Hide Events
        </button>
      </div>}
      {!showEvents && <div>
        <button
          onClick={() => {
            setShowEvents(true);
          }}
        >
          Show Events
        </button>
      </div>}
      {showEvents &&
        events.map((event, i) => (
          <div key={event.id}>
            <h2>
              {i} - {event.title}
            </h2>
            <button onClick={() => handleDelete(event.id)}>delete event</button>
          </div>
        ))}
    </div>
  );
}
