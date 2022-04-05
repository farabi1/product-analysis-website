import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='text-center text-blue-700 text-2xl mt-5 bg-cyan-100 p-5 mt-0 '>
            <Link className='m-2' to='/'>Home</Link>
            <Link className='m-2' to='/reviews'>Reviews</Link>
            <Link className='m-2' to='/dashboard'>Dashboard</Link>
            <Link className='m-2' to='/blogs'>Blogs</Link>
            <Link className='m-2' to='/about'>About</Link>
        </div>
    );
};

export default Navbar;