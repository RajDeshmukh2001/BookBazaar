import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import axios from 'axios';

const AddBook = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        author: '',
        description: '',
        price: '',
        image: ''
    });

    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const sendRequest = async () => {
        await axios.post('https://book-bazaar.onrender.com//books', {
            name: String(input.name),
            author: String(input.author),
            description: String(input.description),
            price: Number(input.price),
            image: String(input.image),
            available: Boolean(checked)
        }).then((res) => res.data);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>navigate('/books'));
    }

    return (
        <>
            <div className="formContainer">
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
                                control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} 
                                label={<Typography fontWeight={400} fontFamily={'Poppins'} fontSize={18}>Available</Typography>} />
                        </div>
                        <button className='btn' type="submit">Add Book</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddBook;