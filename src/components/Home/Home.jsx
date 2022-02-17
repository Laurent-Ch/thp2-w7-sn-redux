import React from 'react';
import { useSelector } from 'react-redux';
import AllPosts from '../AllPosts/AllPosts';
import NewPostForm from '../NewPostForm/NewPostForm';

const Home = () => {

  const loggedStatus = useSelector(state => state.logged);
  console.log(loggedStatus);

  return (
    <div className='home-container'>
      <div>
        Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.
      </div>
      {loggedStatus.logged && <NewPostForm />}
      <AllPosts />
    </div>
  );
};

export default Home;

