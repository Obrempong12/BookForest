import React from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
  return (
    <div className="App">
      <h1>Book Forest</h1>
      <BookForm />
      <BookList />
    </div>
  );
};

export default App;