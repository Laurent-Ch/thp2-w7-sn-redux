import { createStore } from 'redux';
import loggedReducer from './logged/loggedReducer.js'
const store = createStore(loggedReducer);

export default store;