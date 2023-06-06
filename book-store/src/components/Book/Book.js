import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';

const Book = (props) => {
    const navigate = useNavigate();
    const { _id, name, author, description, price, image } = props.book;

    const deleteHandler = async () => {
        await axios.delete(`https://book-bazaar.onrender.com//books/${_id}`)
        .then((res) => res.data)
        .then(() => navigate('/'))
        .then(() => navigate('/books'));
    }

    return (
        <>
            <div className="bookContainer">
                <img src={image} alt={name} />
                <div className="aboutBook">
                    <h2>{name}</h2>
                    <article>By {author}</article>
                </div>
                <p className='description'>{description}</p>
                <h3>&#8377; {price}</h3>
                <div className="btns">
                    <Button LinkComponent={ Link } to={`/books/${_id}`}>Update</Button>
                    <Button onClick={deleteHandler}>Delete</Button>
                </div>
            </div>
        </>
    )
}

export default Book;