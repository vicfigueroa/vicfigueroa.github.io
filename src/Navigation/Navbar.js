import React from "react";
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
         <img src={process.env.PUBLIC_URL + '/acpic.PNG'} width="10%" height="10%" />
        <h1>Victoria Figueroa</h1>
        <ul className="navbar-nav">
        <li className='nav-item'>
          <Link className='nav-link' to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/About'>About</Link>
        </li>
        {/* <li className='nav-item'>
          <Link className='nav-link' to='/Projects'>Projects</Link>
        </li> */}
          <li className="nav-item">
            <a className="nav-link" href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank">
              Resume
            </a>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
