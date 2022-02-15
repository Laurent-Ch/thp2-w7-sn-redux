import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./loggedtypes";

export const userLoggedIn = () => {
  return {
    type: USER_LOGGED_IN
  };
};

export const userLoggedOut = () => {
  return {
    type: USER_LOGGED_OUT
  };
};