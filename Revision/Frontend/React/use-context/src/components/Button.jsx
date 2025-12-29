import { NavLink } from "react-router-dom";

function Button() {
  return (
    <>
      <h2>HEY, THIS IS A BUTTON PAGE</h2>
      <NavLink to="/">
        <button>CLICK ME & GET HOME PAGE</button>
      </NavLink>
    </>
  );
}

export default Button;
