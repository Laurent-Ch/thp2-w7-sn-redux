import { React, useState} from 'react';
import {Navigate, Link} from "react-router-dom";
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const Users = () => {
  const [usersData, setUsersData] = useState();
  const [loaded, setLoaded] = useState(false);
  
  const loggedStatus = useSelector(state => state.logged);

  const userCookie = Cookies.get('token');

  const UsersProfilesFetch = () => {
    fetch(`http://localhost:1337/users/`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${userCookie}`,
        'Content-Type': 'application/json'
      }
      
    })
    .then((response) => response.json())
    .then((response) => {
      setUsersData(response)
      setLoaded(true)
    }).catch((error) => console.log(error));
  }

  !loaded && UsersProfilesFetch();

  if (!loggedStatus.logged) {
    return <Navigate to='/' />
  }
  else {
    return (
      <div className='container-each-user'>
        {loaded && usersData.map(({ id, username }) => (
          <Link to={`/users/${id}`} className='each-user' key={id}>{username}</Link>
        ))}
      </div>
    );
  };
};

export default Users;