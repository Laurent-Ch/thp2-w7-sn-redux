import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./loggedtypes";
import Cookies from "js-cookie";
import { AUTH_TOKEN_NAME } from "../../config";

const cookie = Cookies.get(AUTH_TOKEN_NAME);

const initialState = {
  logged: cookie ? true : false
};
console.log(initialState);
// console.log(cookie);

const loggedReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        logged: true,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        logged: false,
      }; 
    default:
      return state;
  }
}

export default loggedReducer;