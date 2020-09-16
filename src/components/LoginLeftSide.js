import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SignForm from "./SignForm";
import LoginForm from "./LoginForm";

function LoginLeftSide() {
  // const [displayValue, setDisplay] = useState(true);
  // console.log("display value", displayValue);
  return (
    <div class="container">
      <div class="content">
        <Route path="/" exact>
          <LoginForm />
        </Route>
        <Route path="/signup" exact>
          <SignForm />
        </Route>
        <div class="content_lft">
          <h1>Welcome from PPL!</h1>
          <p class="discrptn">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <img src="images/img_9.png" alt="" />{" "}
        </div>
      </div>
    </div>
  );
}

export default LoginLeftSide;
