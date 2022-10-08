import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import BlogList from './BlogList';

export default function Home() {
  const url = 'http://localhost:8000/blogs';

  const { data: blogs, isPending, error } = useFetch(url);

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
