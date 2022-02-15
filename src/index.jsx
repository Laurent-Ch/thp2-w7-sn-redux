import React from "react";
import ReactDOM from "react-dom";
import './style.scss'
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Home/Logout/Logout";

const App = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<RegisterForm />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>
        </Routes>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));