import { useEffect, useState } from 'react';

const AllPosts = () => {
  
  const [postsData, setPostsData] = useState();

  useEffect(() => {
    getAllPosts();
  }, [])

  const getAllPosts = () => {
    fetch(`http://localhost:1337/posts`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .then((curatedResponse) => {
      if (curatedResponse) {
        console.log(curatedResponse);
        setPostsData(curatedResponse);
      }
      else {
        console.log('empty response');
      }
    })
    .catch((error) => console.log(error));
  }
  
  return (
    <div>Test</div>
  );
};

export default AllPosts;