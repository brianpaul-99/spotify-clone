import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
function Login() {
  return (
    <div className="login">
      <img src="https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif" />
      <a href={loginUrl}>Log in with spotify</a>
    </div>
  );
}

export default Login;
