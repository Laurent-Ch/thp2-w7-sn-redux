import { combineReducers, createStore } from 'redux';
import loggedReducer from './logged/loggedReducer.js'

const rootReducer = combineReducers({
  logged: loggedReducer
})

const store = createStore(rootReducer);

export default store;