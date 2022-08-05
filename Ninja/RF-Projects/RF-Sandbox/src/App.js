import { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('mario');
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
    <button onClick={handleToggle}>Hide Events</button>
    <button onClick={handleToggle}>Show Events</button>
      {toggle ? null : <div className='App'>
        <h2>My name is {name}</h2>
        {events.map((event, i) => (
          <div key={event.id}>
            <h3>
              {i} - {event.title}
            </h3>
            <button onClick={() => handleDelete(event.id)}>delete</button>
          </div>
        ))}
      </div> }
    </>
  );
};

export default App;
