import React, { useState } from "react";
import "../css/login.css";
import password_icon from "../images/password.png";
import username_icon from "../images/username.png";
import warning_icon from "../images/warning.png";
import success_icon from "../images/success.png";

const Login = ({
  func,
  username,
  password,
  setUsername,
  setPassword,
  resStatus,
}) => {
  const lboxClass = `lbox ${resStatus ? "success" : "error"}`;
  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={func}>
          <div>
            <label>Username</label>
            <div className="icon-text">
              <img className="form-icon" src={username_icon} alt="username" />
              <input
                type="text"
                placeholder="type here..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div className="icon-text">
              <img className="form-icon" src={password_icon} alt="password" />
              <input
                type="text"
                placeholder="type here..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
      {(resStatus == false || resStatus == true) && (
        <div className={lboxClass}>
          <img src={resStatus ? success_icon : warning_icon} alt="" />
          <h2>
            {resStatus ? "Signed in successfully" : "Verification failed"}
          </h2>
        </div>
      )}
    </>
  );
};

export default Login;
