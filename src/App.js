import React from "react";
import "./assets/tailwind.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Layout from "./components/core/Layout";
import Signup from "./components/auth/Signup";
import AccountType from "./components/setup/AccountType";
import Method from "./components/setup/Method";
import Dashboard from "./components/dashboard";
import Fund from "./components/fund";
import { AppStateProvider } from "./components/core/AppStateContext";

function App() {
  return (
    <AppStateProvider>
      <Router>
        <Layout>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/setup/account/type" component={AccountType} />
          <Route path="/setup/account/method" component={Method} />
          <Route path="/fund" component={Fund} />
        </Layout>
      </Router>
    </AppStateProvider>
  );
}

export default App;
