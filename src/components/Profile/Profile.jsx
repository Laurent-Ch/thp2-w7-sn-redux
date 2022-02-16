import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';


const Profile = () => {
  const loggedStatus = useSelector(state => state.logged);

  const [userData, setUserData] = useState(null);
  const userCookie = Cookies.get('token');
  console.log(userCookie);

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
      setUserData(curatedResponse);
      console.log(userData);
    })
    .catch((error) => console.log(error));
  }

  !userData && loggedStatus && getUserData();

  return (
    <div>
      Conected to my Profile page
    </div>
  );
};

export default Profile;