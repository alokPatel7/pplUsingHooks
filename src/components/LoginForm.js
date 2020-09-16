import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

const basicUrl = "http://localhost:8000";

function LoginForm() {
  const [inputFieldsValue, setInputFieldsValue] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    inValidLogin: false,
  });

  // this function calls API for Login
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${basicUrl}/login`, { inputFieldsValue }).then((response) => {
      if (!response.data) {
        setErrorMessage({ inValidLogin: true });
      } else {
        setErrorMessage({ inValidLogin: false });
        console.log("okay");
      }
    });
  };

  // this function handle change input fields
  const handleOnchangeInputValue = (e) => {
    e.preventDefault();
    const { target: { name, value } = {} } = e;
    setInputFieldsValue({
      ...inputFieldsValue,
      [name]: value,
    });
  };

  return (
    <div class="content_rgt">
      <div class="login_sec">
        <h1>Log In</h1>
        <ul>
          {errorMessage.inValidLogin && (
            <li>
              <span
                style={{
                  backgroundColor: "red",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Invalid email id or password..!!
              </span>
            </li>
          )}
          <form onSubmit={handleSubmit}>
            <li>
              <span>Email-ID</span>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={handleOnchangeInputValue}
                required
              />
            </li>
            <li>
              <span>Password</span>
              <input
                type="text"
                placeholder="Enter your password"
                name="password"
                onChange={handleOnchangeInputValue}
                required
              />
            </li>
            <li>
              <input type="checkbox" />
              Remember Me
            </li>
            <li>
              <input type="submit" value="Log In" />
              <a href="">Forgot Password</a>
            </li>
          </form>
        </ul>
        <div class="addtnal_acnt">
          I do not have any account yet.
          <a>
            <Link to="/signup">Create My Account Now !</Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
