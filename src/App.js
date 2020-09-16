import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginLeftSide from "./components/LoginLeftSide";
import SignForm from "./components/SignForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={LoginLeftSide} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
