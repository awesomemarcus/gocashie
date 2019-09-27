import React from "react";
import './assets/tailwind.css';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/core/Main";
import Login from "./components/auth/Login";
import Layout from "./components/core/Layout";
import Signup from "./components/auth/Signup";
import AccountType from "./components/setup/AccountType";
import Method from "./components/setup/Method";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/setup/account/type" component={AccountType} />
        <Route path="/setup/account/method" component={Method} />
      </Layout>
    </Router>
  );
}

export default App;
