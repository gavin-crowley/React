import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogList({blogs, title}) {
   
  return (
    <div className='blog-list'>
      {blogs.map((blog) => (
        <div key={blog.id} className='blog-preview'>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
