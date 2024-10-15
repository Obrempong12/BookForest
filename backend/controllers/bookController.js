const Book = require('../models/Book');

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new book
const addBook = async (req, res) => {
  const { title, author, description, genre, coverImage } = req.body;
  try {
    const newBook = new Book({ title, author, description, genre, coverImage });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a book
const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBooks, addBook, updateBook, deleteBook };
