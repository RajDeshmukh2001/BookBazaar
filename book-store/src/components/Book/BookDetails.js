import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

const BookDetails = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({});
    const [checked, setChecked] = useState(false);
    const id = useParams().id;
    console.log(id);
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`https://book-bazaar-23.onrender.com/books/${id}`).then((res) => res.data).then((data) => setInput(data.book))
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`https://book-bazaar-23.onrender.com/books/${id}`, {
            name: String(input.name),
            author: String(input.author),
            description: String(input.description),
            price: Number(input.price),
            image: String(input.image),
            available: Boolean(checked)
        }).then((res) => res.data);
    };

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>navigate('/books'));
    };

    return (
        <>
            <div className="formContainer">
                {input &&
                    <form onSubmit={handleSubmit} method='POST'>
                        <div className="formContent">
                            <div className="input-field">
                                <label htmlFor="image">Image :</label>
                                <input type="text" name="image" value={input.image} onChange={handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="name">Book Name :</label>
                                <input type="text" name="name" value={input.name} onChange={handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="author">Author :</label>
                                <input type="text" name="author" value={input.author} onChange={handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="description">Description :</label>
                                <input type="text" name="description" value={input.description} onChange={handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="price">Price :</label>
                                <input type="number" name="price" min={1} value={input.price} onChange={handleChange} />
                            </div>
                            <div className="input-field available">
                                <FormControlLabel
                                    control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
                                    label={<Typography fontWeight={400} fontFamily={'Poppins'} fontSize={18}>Available</Typography>} />
                            </div>
                            <button className='btn' type="submit">Update Book</button>
                        </div>
                    </form>
                }
            </div>
        </>
    )
}

export default BookDetails;
