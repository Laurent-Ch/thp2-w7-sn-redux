import { React, useState }  from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../../redux/logged/loggedActions';

const Login = () => {
  
  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [password, setPassworld] = useState();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handlePassword = (e) => {
    setPassworld(e.target.value);
  }

  const data = {
    identifier: username,
    password: password
  };

  const login = () => fetch('http://localhost:1337/auth/local', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((curatedResponse) => {
    if (curatedResponse) {
      Cookies.set('userJwt', curatedResponse);
      dispatch(userLoggedIn());
    }
    else {
      console.log('empty response');
    }
  })
  .catch((error) => console.log(error));

  return (
    <form className='login'> 
      <label htmlFor="username">username</label>
      <input id="username" type="text" onChange={handleUsername}/>

      <label htmlFor="password">password</label>
      <input id="password" type="password" onChange={handlePassword}/>

      <button type="button" className='form-submit-btn' onClick={() => login()}>login</button>
    </form>
  );
};

export default Login;