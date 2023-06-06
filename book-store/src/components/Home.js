import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
        <NavLink className='link' to='/books'>View All Books</NavLink>   
    </div>
  )
}

export default Home; 