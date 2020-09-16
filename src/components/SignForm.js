import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

const basicUrl = "http://localhost:8000";

function SignForm() {
  const [inputFieldsValue, setState] = useState({
    userName: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const [message, setMessage] = useState({
    validSignUp: false,
    inValidSignUp: false,
  });

  // this function calls API for Signup
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${basicUrl}/signup`, { inputFieldsValue }).then((response) => {
      if (response.data) {
        setMessage({ validSignUp: true });
      } else {
        setMessage({ inValidSignUp: true });
      }
    });
  };

  // this function handle change inputs fields
  const handleOnChangeInputFieldsValue = (e) => {
    const { target: { name, value } = {} } = e;
    setState({ ...inputFieldsValue, [name]: value });
  };

  return (
    <div class="content_rgt">
      <div class="register_sec">
        <h1>Create An Account</h1>
        <ul>
          {message.validSignUp && (
            <li>
              <span
                style={{
                  backgroundColor: "green",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                We have save your response..!!
              </span>
            </li>
          )}

          {message.inValidSignUp && (
            <li>
              <span
                style={{
                  backgroundColor: "red",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Enter Email id is already registered..!!
              </span>
            </li>
          )}
          <form onSubmit={handleSubmit}>
            <li>
              <span>Username</span>
              <input
                type="text"
                name="userName"
                placeholder="Enter your username"
                onChange={handleOnChangeInputFieldsValue}
                // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                required
              />
            </li>
            <li>
              <span>Password</span>
              <input
                type="text"
                name="password"
                placeholder="Enter your password"
                onChange={handleOnChangeInputFieldsValue}
                required
              />
            </li>
            <li>
              <span>Email</span>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={handleOnChangeInputFieldsValue}
                required
              />
            </li>
            <li>
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                onChange={handleOnChangeInputFieldsValue}
                required
              />
            </li>
            <li>
              <span>Last Name</span>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                onChange={handleOnChangeInputFieldsValue}
                required
              />
            </li>
            <li>
              <input type="checkbox" required />I agree to Term & Conditions
            </li>
            <li>
              <input type="submit" value="Register" />
            </li>
          </form>
        </ul>
        <div class="addtnal_acnt">
          I already have an account.
          <a>
            <Link to="/">Login My Account !</Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignForm;
