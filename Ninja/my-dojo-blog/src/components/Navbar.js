import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header>
        <span className='logo'>The Dojo Blog</span>
        <span className='links'>
          <Link className='home' to={'/'}>Home</Link>
          <Link className='create' to={'/create'}>New Blog</Link>
        </span>
      </header>
    </>
  );
}
