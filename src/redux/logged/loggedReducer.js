import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./loggedtypes";
import Cookies from "js-cookie";

const cookie = Cookies.get('userJtw') ;

const initialState = {
  logged: (cookie) ? true : false
};

const loggedReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        logged: true
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        logged: false
      }; 
    default:
      return state;
  }
}

export default loggedReducer;