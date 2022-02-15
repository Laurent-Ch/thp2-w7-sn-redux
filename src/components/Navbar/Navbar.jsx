import React from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

const Navbar = () => {

  const handleLogout = () => {
  Cookies.remove('userJwt');
  }

  return (
    <div className='navbar'>
      <nav>
      <Link to="/register" className="navbar__element">Register</Link>
      <Link to="/login" className="navbar__element">Login</Link>
      <Link to="/" className="navbar__element" onClick={() => handleLogout()}>Logout</Link>
      </nav>
    </div>
  );
};

export default Navbar;