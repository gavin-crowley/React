import React from 'react';

export default function Create() {
  return (
    <div className='create-page'>
      <h2>Add a New Blog</h2>
      <form action="">
        <label htmlFor="">
          <p>Blog title:</p>
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="">
          <p>Blog body:</p>
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="">
          <p>Blog author:</p>
          <select name="author" id="author">
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        </label>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
