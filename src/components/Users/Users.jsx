import { React, useState} from 'react';
import {Navigate} from "react-router-dom";
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
          <a className='each-user' key={id} href={'http://localhost:3000/users/' + id}>{username}</a>
        ))}
      </div>
    );
  };
};




//   return (
//     <div>
//       Users connected.
//     </div>
//   );
// };

export default Users;