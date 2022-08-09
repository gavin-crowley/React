import React, { useState } from 'react';
import JSONDATA from './db.json';

import './styles.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Search here...'
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div>
        {JSONDATA.persons
          .filter((item) => {
            if (searchTerm === '') {
              return item;
            } else if (
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
      </div>
    </div>
  );
}
