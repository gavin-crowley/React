import React, { useState, useEffect } from 'react';
import { updateName, getName } from './api';
import FormElement from './Form';

const Update = ({ history, match }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    loadName();
  }, []);

  const loadName = () => {
    getName(match.params.id).then((d) => setName(d.data.name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateName(match.params.id, { name }).then((res) => {
      setName('');
      history.push('/');
    });
  };
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-8'>
          <h4>Update Name</h4>
          <FormElement
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        </div>
      </div>
    </div>
  );
};

export default Update;
