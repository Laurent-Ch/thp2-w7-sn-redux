import React, { useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { AUTH_TOKEN_NAME } from "../../config";
import { Navigate } from "react-router-dom";

const Profile = () => {
  // Getting the user's data
  const [loaded, setLoaded] = useState(false);
  const [userData, setUserData] = useState(null);
  const loggedStatus = useSelector((state) => state.logged);
  const userCookie = Cookies.get(AUTH_TOKEN_NAME);

  const getUserData = () => {
    fetch("http://localhost:1337/users/me", {
      method: "get",
      headers: {
        Authorization: `Bearer ${userCookie}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((curatedResponse) => {
        console.log(curatedResponse);
        setUserData(curatedResponse);
        setLoaded(true);
      })
      .catch((error) => console.log(error));
  };

  !loaded && getUserData();

  // Updating ther user's data
  const [newUsername, setNewUsername] = useState();
  const [newDescription, setNewDescription] = useState();
  const handleNewUsername = (e) => {
    setNewUsername(e.target.value);
  };
  const handleNewDescription = (e) => {
    setNewDescription(e.target.value);
  };

  const data = {
    username: newUsername,
    description: newDescription,
  };

  const editUserData = () => {
    console.log(userData.id);
    fetch(`http://localhost:1337/users/me`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${userCookie}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data)
      })
      .catch((error) => console.log(error));
  };

  // Render
  if (!loggedStatus.logged) {
    return <Navigate to="/" />;
  } else if (!userData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Profile</h1>
        <div>Current username: {userData.username}</div>
        <div>Current email: {userData.email}</div>
        <div>Current description: {userData.description}</div>
        <h2>Editing your profile</h2>
        <form className="profile__edit">
          <label htmlFor="username">New username</label>
          <input id="username" type="text" onChange={handleNewUsername} />

          <label htmlFor="password">New description</label>
          <input id="password" type="text" onChange={handleNewDescription} />

          <button
            type="button"
            className="form-submit-btn"
            onClick={editUserData}
          >
            edit
          </button>
        </form>
      </div>
    );
  }
};

export default Profile;
