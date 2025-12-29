import React from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div>
        <h2>Login Page</h2>
        <div className="input-area">
          <div className="username">
            <label htmlFor="">Username/Email</label>
            <input type="text" name="username" placeholder="usernamer" />
          </div>
          <div className="password">
            <label htmlFor="">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <button>Login</button>
        </div>

        <a>
          <NavLink to={"/"}>Back to Home Page</NavLink>
        </a>
      </div>
    </>
  );
};
