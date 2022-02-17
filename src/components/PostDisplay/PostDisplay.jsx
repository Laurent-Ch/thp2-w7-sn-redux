import Cookies from 'js-cookie';
import React from 'react';
import { useSelector } from 'react-redux';
import { AUTH_TOKEN_NAME, USER_ID_NAME } from '../../config';

const PostDisplay = (props) => {
  const { postData } = props;
  const loggedStatus = useSelector(state => state.logged);
  const userToken = Cookies.get(AUTH_TOKEN_NAME);
  const userID = Cookies.get(USER_ID_NAME);

  const handleDelete = (postId) => {
    fetch(`http://localhost:1337/posts/${postId}`, {
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${userToken}`, 
        'Content-Type': 'application/json'
      }     
    })
  }

  return (
    <div>
      <div className="posts-container">
            {postData.map((post, index) => {
              return (
                <div className="post" key={index}>
                  {loggedStatus.logged && (
                  <div>Author: {post.user.username}</div>
                  )}
                  <div className='post-content'>{post.text}</div>
                  {(post.user.id == userID) &&
                    <button type='button' onClick={() => handleDelete(post.id)}>Delete your comment</button>
                  }
                </div>
              )
            })}
        </div>
    </div>
  );
};

export default PostDisplay;