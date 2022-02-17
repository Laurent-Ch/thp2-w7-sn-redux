import Cookies from "js-cookie";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AUTH_TOKEN_NAME } from "../../config";

const User = () => {
  const { id } = useParams();
  const userToken = Cookies.get(AUTH_TOKEN_NAME);

  const [loaded, setLoaded] = useState(false);
  const [username, setUsername] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userDescription, setUserDescription] = useState();


  const setUserData = (username, email, description) => {
    setUsername(username);
    setUserEmail(email);
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
        setUserData(response.username, response.email, response.description);
        setLoaded(true);
      });
  };

  !loaded && getUserProfile();

  return (
    <div className="user-profile">
      <div>Username: {username}</div>
      <div>Email: {userEmail}</div>
      <div>Description: {userDescription}</div>
    </div>
  );
};

export default User;
