import { React, useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";


const RegisterForm = () => {
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
  .then((curatedResponse) => Cookies.set('jwt', curatedResponse));
  

  // NB htmlFor relie le texte à l'input qui correspond.
  return (
    <>
      <form> 
        <label htmlFor="username">username</label>
        <input id="username" type="text" onChange={handleUsername}/>

        <label htmlFor="email">email</label>
        <input id="email" type="text" onChange={handleEmail}/>

        <label htmlFor="password">password</label>
        <input id="password" type="password" onChange={handlePassword}/>

        <button type="button" className='form-submit-btn' onClick={() => sendData()}>create user</button>
      </form>
    </>
  );
};

export default RegisterForm;