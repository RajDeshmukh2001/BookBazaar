const Book = require('../model/Book');

// Function to get books
const getBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();   
    } catch (error) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({ message: 'No product found' });
    }
    return res.status(200).json({ books });
}

// Function to get ID
const getId = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(500).json({ message: 'No Book found' });
    }
    return res.status(200).json({ book });
}

// Function to Add book
const addBook = async (req, res, next) => {
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = new Book({
            name, author, description, price, available, image
        });
        await book.save();
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(500).json({ message: 'Unable to Add Book' });
    }
    return res.status(200).json({ book });
}

// Function to Update book
const updateBook = async (req, res) => {
    const { name, author, description, price, available, image } = req.body;
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name, author, description, price, available, image
        });
        book = await book.save();
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(404).json({ message: 'Unable to Update Book' });
    }
    return res.status(200).json({ book });
}

// Function to Delete book
const deleteBook = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(404).json({ message: 'Unable to Delete Book' });
    }
    return res.status(200).json({ book });
}

exports.getBooks = getBooks;
exports.getId = getId
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;