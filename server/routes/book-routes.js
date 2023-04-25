const express = require('express');
const Book = require('../model/Book');
const router = express.Router();
const bookController = require('../controllers/book-controller');

router.get('/', bookController.getBooks);
router.post('/', bookController.addBook);
router.get('/:id', bookController.getId);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;