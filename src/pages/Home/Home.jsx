import React from 'react';
import Posts from './Posts/Posts';


const Home = () => {

  

  return (
    <div className='home-container'>
      <div>
        Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.
      </div>
      <Posts />
    </div>
  );
};

export default Home;

