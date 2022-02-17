import { useEffect, useState } from 'react';

const AllPosts = () => {
  
  const [loaded, setLoaded] = useState(false);
  const [postData, setPostData] = useState();

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
        setPostData(curatedResponse);
        setLoaded(true);
      }
      else {
        console.log('empty response');
      }
    })
    .catch((error) => console.log(error));
  }
  
  return (
    <div className='all-posts-container'>
      <h2>Posts</h2>
      {loaded &&
        <div className="posts-container">
            {postData.map((post, index) => {
              return (
                <div key={index}>
                  {post.text}
                </div>
              )
            })}
        </div>
      }
    </div>
  );
};

export default AllPosts;