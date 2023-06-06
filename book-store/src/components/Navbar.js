import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [value, setValue] = useState();
    return (
        <>
            <AppBar sx={{ backgroundColor: '#222' }} position='sticky'>
                <Toolbar>
                    <NavLink to='/' style={{ color: 'white' }}>
                        <Typography>
                            <AutoStoriesIcon />
                        </Typography>
                    </NavLink>
                    <div className="logo">
                        <h3>BookBazaar</h3>
                    </div>
                    
                    <Tabs
                        sx={{ ml: 'auto' }}
                        textColor='inherit'
                        indicatorColor='secondary'
                        value={value}
                        onChange={(e, val) => setValue(val)} >
                        <Tab LinkComponent={NavLink} to='/add' label='Add Book' />
                        <Tab LinkComponent={NavLink} to='/books' label='Books' />
                        <Tab LinkComponent={NavLink} to='/about' label='About' />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;