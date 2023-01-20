import React, { useState, useEffect } from 'react';
import { getNames, createName, removeName } from './api';
import { Link } from 'react-router-dom';
import FormElement from './Form';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Crud = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {
    loadNames();
  }, []);

  const loadNames = () => getNames().then((name) => setNames(name.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    createName({ name })
      .then((res) => {
        setName('');
        loadNames();
      })
  };

  const handleRemove = (id, name) => {
    removeName(id).then((res) => {
      loadNames();
    });
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-8'>
          <h4 className='text-center'>CRUD with JSON Server</h4>
          <FormElement
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
          {names &&
            names.map((t) => (
              <div className='border row mx-2 align-items-center' key={t.id}>
                <ul className='list-group'>
                  <li className='list-group-item'>{t.name}</li>
                </ul>
                <span
                  onClick={() => handleRemove(t.id, t.name)}
                  className='btn btn-sm float-right'
                >
                  <DeleteOutlined className='text-danger' />
                </span>
                <Link to={`/update/${t.id}`}>
                  <span className='btn btn-sm float-right'>
                    <EditOutlined className='text-warning' />
                  </span>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Crud;
