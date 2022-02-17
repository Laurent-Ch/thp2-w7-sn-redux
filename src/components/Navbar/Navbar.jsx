import React from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedOut } from '../../stores/logged/loggedActions';
import { AUTH_TOKEN_NAME } from '../../config';

const Navbar = () => {

  // Used for conditional profile rendering
  const loggedStatus = useSelector(state => state.logged);
  console.log(loggedStatus);
  
  // Used to log out
  const dispatch = useDispatch();

  const handleLogout = () => {
  Cookies.remove(AUTH_TOKEN_NAME);
  dispatch(userLoggedOut());
  }

  return (
    <div className='navbar'>
      <nav>
        {loggedStatus.logged && (
          <>
            <Link to="/my-profile" className="navbar__element">Profile</Link> 
            <Link to="/users" className="navbar__element">Users</Link>
          </>
          )
        }
        <Link to="/" className="navbar__element">Home</Link>
        <Link to="/register" className="navbar__element">Register</Link>
        <Link to="/login" className="navbar__element">Login</Link>
        <a href="/" className="navbar__element" onClick={() => handleLogout()}>Logout</a>
      </nav>
    </div>
  );
};

export default Navbar;