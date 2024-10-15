const express = require('express');
const { getBooks, addBook, deleteBook, updateBook } = require('../controllers/bookController');
const router = express.Router();

// Get all books
router.get('/', getBooks);

// Add a new book
router.post('/', addBook);

// Update a book
router.put('/:id', updateBook);

// Delete a book
router.delete('/:id', deleteBook);

module.exports = router;
