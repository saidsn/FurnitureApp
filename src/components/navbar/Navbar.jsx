import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss';


const Navbar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className='container'>
      <div className="navbar">
        <ul className='navbar__list'>
          <li className={`navbar__list--item ${activeLink === 'home' ? 'active' : ''}`}>
            <Link onClick={() => handleLinkClick('home')} to='/'>Home</Link>
          </li>
          <li className={`navbar__list--item ${activeLink === 'about' ? 'active' : ''}`}>
            <Link onClick={() => handleLinkClick('about')} to='/about'>About</Link>
          </li>
          <li className={`navbar__list--item ${activeLink === 'products' ? 'active' : ''}`}>
            <Link onClick={() => handleLinkClick('products')} to='/products'>Products</Link>
          </li>
          <li className={`navbar__list--item ${activeLink === 'collections' ? 'active' : ''}`}>
            <Link onClick={() => handleLinkClick('collections')} to='/collections'>Collections</Link>
          </li>
          <li className={`navbar__list--item ${activeLink === 'sale' ? 'active' : ''}`}>
            <Link onClick={() => handleLinkClick('sale')} to='/sale'>Sale</Link>
          </li>
          <li className={`navbar__list--item ${activeLink === 'contact' ? 'active' : ''}`}>
            <Link onClick={() => handleLinkClick('contact')} to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;