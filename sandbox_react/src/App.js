import React from 'react';

function App() {
  const data = [
    { brand: 'Ford', model: 'Mustang' },
    { brand: 'VW', model: 'Beetle' },
    { brand: 'Tesla', model: 'Model S' },
  ];

  return (
    <div>
      <table>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <th>{item.brand}</th>
              <th>{item.model}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
