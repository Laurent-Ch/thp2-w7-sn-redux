import { React, useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../../redux/logged/loggedActions';

const RegisterForm = () => {
  
  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassworld] = useState();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassworld(e.target.value);
  }

  const data = {
    username: username,
    email: email,
    password: password
  };
  
  const sendData = () => fetch('http://localhost:1337/auth/local/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((curatedResponse) => {
    curatedResponse === null ? console.log('empty response') : 
    Cookies.set('userJwt', curatedResponse)
    dispatch(userLoggedIn());
  })
  .catch((error) => console.log(error));
  
  // NB htmlFor relie le texte à l'input qui correspond.
  return (
    <form className='register-form'> 
      <label htmlFor="username">username</label>
      <input id="username" type="text" onChange={handleUsername}/>

      <label htmlFor="email">email</label>
      <input id="email" type="text" onChange={handleEmail}/>

      <label htmlFor="password">password</label>
      <input id="password" type="password" onChange={handlePassword}/>

      <button type="button" className='form-submit-btn' onClick={() => sendData()}>create user</button>
    </form>
  );
};

export default RegisterForm;