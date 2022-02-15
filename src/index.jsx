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

const App = () => {
  console.log(store.getState());
  store.subscribe(() => console.log(store.getState()));

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<RegisterForm />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));