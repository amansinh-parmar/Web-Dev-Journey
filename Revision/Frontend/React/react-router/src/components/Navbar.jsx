import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
            <li><NavLink className={( {isActive} ) => ( isActive ? "red" : " ")} to="/">Home</NavLink></li>
            <li><NavLink className={( {isActive} ) => ( isActive ? "red" : " ")} to="/about">About</NavLink></li>
            <li><NavLink className={( {isActive} ) => ( isActive ? "red" : " ")} to="/login">Login</NavLink></li>
            <li><NavLink className={( {isActive} ) => ( isActive ? "red" : " ")} to="/contact">Contact</NavLink></li>
      </nav>
    </>
  );
}

export default Navbar;
