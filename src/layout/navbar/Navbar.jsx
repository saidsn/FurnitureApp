import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.scss';


const Navbar = () => {
  return (
    <div className='container'>
        <div className="navbar">
            <ul className='navbar__list'>
                <li className='navbar__list--item'><Link className='active' to='/'>Home</Link></li>
                <li className='navbar__list--item'><Link to='about'>About</Link></li>
                <li className='navbar__list--item'><Link to='Products'>Products</Link></li>
                <li className='navbar__list--item'><Link to='Collections'>Collections</Link></li>
                <li className='navbar__list--item'><Link to='Sale'>Sale</Link></li>
                <li className='navbar__list--item'><Link to='Contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;