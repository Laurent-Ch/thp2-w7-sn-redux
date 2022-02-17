import React from 'react';
import { useSelector } from 'react-redux';

const PostDisplay = (props) => {
  
  const loggedStatus = useSelector(state => state.logged);

  return (
    <div>
      <div className="posts-container">
            {props.postData.map((post, index) => {
              return (
                <div className="post" key={index}>
                  {loggedStatus.logged && (
                  <div>Author: {post.user.username}</div>
                  )}
                  <div className='post-content'>{post.text}</div>
                </div>
              )
            })}
        </div>
    </div>
  );
};

export default PostDisplay;