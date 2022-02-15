import React from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedOut } from '../../redux/logged/loggedActions';

const Navbar = () => {

  const loggedStatus = useSelector(state => state.logged);
  const dispatch = useDispatch();

  const handleLogout = () => {
  Cookies.remove('userJwt');
  dispatch(userLoggedOut());
  }

  return (
    <div className='navbar'>
      <nav>
        {loggedStatus && 
          <Link to="/my-profile" className="navbar__element">Profile</Link>
        }
        <Link to="/register" className="navbar__element">Register</Link>
        <Link to="/login" className="navbar__element">Login</Link>
        <a href="/" className="navbar__element" onClick={() => handleLogout()}>Logout</a>
      </nav>
    </div>
  );
};

export default Navbar;