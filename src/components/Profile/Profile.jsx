import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { AUTH_TOKEN_NAME } from '../../config';
import { useNavigate } from 'react-router-dom';
import {Navigate} from "react-router-dom";


  const Profile = () => {
  
  const [loaded, setLoaded] = useState(false);
  const [userData, setUserData] = useState(null);
  const loggedStatus = useSelector(state => state.logged);
  const userCookie = Cookies.get(AUTH_TOKEN_NAME);

  const getUserData = () => { 
    fetch('http://localhost:1337/users/me', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${userCookie}`, 
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((curatedResponse) => {
      console.log(curatedResponse);
      setUserData(curatedResponse);
      setLoaded(true);
    })
    .catch((error) => console.log(error));
  }

  !loaded && getUserData();

  if (!loggedStatus.logged) {
    return <Navigate to='/' />
  }
  else if (!userData) {
    return <div>Loading...</div>
  }
  else {
    return (
      <div>
        <h1>Profile</h1>
        <div>Username: {userData.username}</div>
        <div>Email: {userData.email}</div>
      </div>
  )};

};

export default Profile;
