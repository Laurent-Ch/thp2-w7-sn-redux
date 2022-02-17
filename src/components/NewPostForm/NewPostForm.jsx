import React, { useState } from 'react';
import Cookies from 'js-cookie';
import {  AUTH_TOKEN_NAME, USER_ID_NAME } from '../../config';

const NewPostForm = () => {
  
  const userToken = Cookies.get(AUTH_TOKEN_NAME);

  const userID = Cookies.get(USER_ID_NAME);
  console.log(userID)

  const [postContent, setPostContent] = useState();
  const handlePostContent = (e) => {
    setPostContent(e.target.value);
  }

  const data =  {
    text: postContent,
    user: userID
  }

  const createPost = () => {
    fetch(`http://localhost:1337/posts`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${userToken}`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .catch((error) => console.log(error));
  }
  
  return (
    <div className='new-post-container'>
      <label htmlFor='new-post'>Write a new message</label>
      <textarea id='new-post' rows='4' value={postContent} placeholder='...' onChange={handlePostContent} />
      <button className='form-submit-btn' type='button' onClick={createPost}>post</button> 
    </div>
  );
};

export default NewPostForm;