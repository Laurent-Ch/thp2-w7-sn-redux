import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {  AUTH_TOKEN_NAME, USER_ID_NAME } from '../../../config';
import { useSelector } from 'react-redux';
import PostDisplay from '../../../components/PostDisplay/PostDisplay';

const Posts = () => {
  
  // User info
  const loggedStatus = useSelector(state => state.logged);
  const userToken = Cookies.get(AUTH_TOKEN_NAME);
  const userID = Cookies.get(USER_ID_NAME);

  // Hooks
  const [postContent, setPostContent] = useState();
  const [loaded, setLoaded] = useState(false);
  const [postData, setPostData] = useState();
  const [postDataEdit, setPostDataEdit] = useState(false);
  
  const handlePostContent = (e) => {
    setPostContent(e.target.value);
  }

  useEffect(() => {
    console.log(postDataEdit);
    getAllPosts();
    setPostDataEdit(false);
  }, [postDataEdit])  

  // Create a post
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
    .then(setPostDataEdit(true))
    .catch((error) => console.log(error));
  }
  
  // Displaying all posts
  const getAllPosts = () => {
    fetch(`http://localhost:1337/posts?_limit=20&_sort=created_at:desc`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .then((curatedResponse) => {
      if (curatedResponse) {
        console.log(curatedResponse);
        setPostData(curatedResponse);
        setLoaded(true);
      }
      else {
        console.log('empty response');
      }
    })
    .catch((error) => console.log(error));
  }
  
  // Rendering
  return (
    <div className='all-posts-container'>
      {loggedStatus.logged && (
        <div className='new-post-container'>
          <label htmlFor='new-post'>Write a new message</label>
          <textarea id='new-post' rows='4' value={postContent} placeholder='...' onChange={handlePostContent} />
          <button className='form-submit-btn' type='button' onClick={createPost}
          >post</button> 
        </div>
      )}
      <h2>Posts</h2>
      {loaded && (
        <PostDisplay postData={postData} />
      )}
    </div>
  );

};

export default Posts;