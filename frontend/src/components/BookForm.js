import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  const [book, setBook] = useState({ title: '', author: '', description: '', genre: '', coverImage: '' });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/books', book)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input type="text" name="genre" placeholder="Genre" onChange={handleChange} />
      <input type="text" name="coverImage" placeholder="Cover Image URL" onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
