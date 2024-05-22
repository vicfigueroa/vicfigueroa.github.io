import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
        <ul className="navbar-nav">
        <li className='nav-item'>
          <Link className='nav-link' to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/About'>About</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/Projects'>Projects</Link>
        </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Resume
            </a>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
