import React from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../../redux/logged/loggedActions';

const Navbar = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
  Cookies.remove('userJwt');
  dispatch(userLoggedOut());
  }

  return (
    <div className='navbar'>
      <nav>
      <Link to="/register" className="navbar__element">Register</Link>
      <Link to="/login" className="navbar__element">Login</Link>
      <a href="/" className="navbar__element" onClick={() => handleLogout()}>Logout</a>
      </nav>
    </div>
  );
};

export default Navbar;