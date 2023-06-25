import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from '../Book/Book';
const URL = 'https://book-bazaar-23.onrender.com/books';

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
      fetchHandler().then(data => setBooks(data.books));
    }, [])
    
  return (
    <>
        <ul>
            { books && books.map((book, i) => (
                <div className='book' key={i}>
                    <Book book={book} />
                </div>
            ))}
        </ul>
    </>
  )
}

export default Books;
