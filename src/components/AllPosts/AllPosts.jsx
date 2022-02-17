import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AllPosts = () => {
  
  const logged = useSelector(state => state.logged)

  const [loaded, setLoaded] = useState(false);
  const [postData, setPostData] = useState();

  useEffect(() => {
    getAllPosts();
  }, [])

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
  
  return (
    <div className='all-posts-container'>
      <h2>Posts</h2>
      {loaded &&
        <div className="posts-container">
            {postData.map((post, index) => {
              return (
                <div className="post" key={index}>
                  {logged.logged && 
                  <div>Author: {post.user.username}</div>
                  }
                  <div className='post-content'>{post.text}</div>
                </div>
              )
            })}
        </div>
      }
    </div>
  );
};

export default AllPosts;
