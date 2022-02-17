import React, { useState } from 'react';
import Cookies from 'js-cookie';
import {  AUTH_TOKEN_NAME, USER_ID_NAME } from '../../config';
import { useSelector } from 'react-redux';
import AllPosts from '../AllPosts/AllPosts';

const Posts = () => {
  
  const loggedStatus = useSelector(state => state.logged);
  console.log(loggedStatus);

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
  
  if (loggedStatus.logged) {
    return (
      <>
        <div className='new-post-container'>
          <label htmlFor='new-post'>Write a new message</label>
          <textarea id='new-post' rows='4' value={postContent} placeholder='...' onChange={handlePostContent} />
          <button className='form-submit-btn' type='button' onClick={createPost}>post</button> 
        </div>
        <AllPosts />
      </>
    )}
  else {
    return <AllPosts />
  }

};

export default Posts;