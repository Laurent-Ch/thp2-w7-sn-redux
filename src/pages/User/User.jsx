import Cookies from "js-cookie";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostDisplay from "../../components/PostDisplay/PostDisplay";
import { AUTH_TOKEN_NAME } from "../../config";

const User = () => {
  
  // Get relevant info
  const { id } = useParams();
  const userToken = Cookies.get(AUTH_TOKEN_NAME);

  // Set hooks
  const [loadedProfile, setLoadedProfile] = useState(false);
  const [loadedPosts, setLoadedPosts] = useState(false);
  const [username, setUsername] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userPosts, setUserPosts] = useState();

  // Get profile info
  const setUserData = (username, description) => {
    setUsername(username);
    setUserDescription(description);
  };

  const getUserProfile = () => {
    fetch(`http://localhost:1337/users/${id}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUserData(response.username, response.description);
        setLoadedProfile(true);
      });
  };

  // Get posts
  const getUserPosts = () => {
    fetch(`http://localhost:1337/posts?user.id=${id}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUserPosts(response);
        setLoadedPosts(true);
      });
  };

  !loadedProfile && getUserProfile();
  !loadedPosts && getUserPosts();

  return (
    <div className="user">
      {loadedProfile && (
      <div className="user-profile">
        <h2>User's profile</h2>
        <div>Username: {username}</div>
        <div>Description: {userDescription}</div>
      </div>
      )}
      {loadedPosts && (
      <div className="user-post">
        <h2>User's posts</h2>
        <PostDisplay postData={userPosts} />
      </div>
      )}
    </div>
  );
};

export default User;
