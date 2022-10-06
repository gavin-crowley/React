import React from 'react';

export default function BlogList({blogs, title}) {
   
  return (
    <>
    <h2>{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className='blog-preview'>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </>
  );
}
