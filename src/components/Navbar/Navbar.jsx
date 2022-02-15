import React from 'react';
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
      <Link to="/register" className="navbar__element">Register</Link>
      <Link to="/login" className="navbar__element">Login</Link>
      <Link to="/logout" className="navbar__element">Logout</Link>
      </nav>
    </div>
  );
};

export default Navbar;