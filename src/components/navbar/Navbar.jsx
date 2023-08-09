import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.scss';


const Navbar = () => {
  return (
    <div className='container'>
        <div className="navbar">
            <ul className='navbar__list'>
                <li className='navbar__list--item'><NavLink className='active' to='/'>Home</NavLink></li>
                <li className='navbar__list--item'><NavLink to='/about'>About</NavLink></li>
                <li className='navbar__list--item'><NavLink to='/products'>Products</NavLink></li>
                <li className='navbar__list--item'><NavLink to='/collections'>Collections</NavLink></li>
                <li className='navbar__list--item'><NavLink to='/sale'>Sale</NavLink></li>
                <li className='navbar__list--item'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;