import React from "react";
import ReactDOM from "react-dom";
import './style.scss'
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import Profile from "./components/Profile/Profile";

const App = () => {
  
  store.subscribe(() => console.log(store.getState()))
  
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<RegisterForm />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/my-profile" element={<Profile />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// const loggedStatus = useSelector(state => state.logged);
// useEffect(() => {
//   console.log(loggedStatus)
// }, [loggedStatus]
// )