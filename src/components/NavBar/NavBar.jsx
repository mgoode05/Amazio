import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
         <h1> <Link className='home-link' to='/'>Amazio.io</Link>
         &nbsp;
          <Link to='/checkout'>Checkout</Link>
            </h1>
        </header>
    )
}

export default NavBar