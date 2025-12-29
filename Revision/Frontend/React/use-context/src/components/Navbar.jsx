import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h2>useContext</h2>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      <NavLink to="/button">
        <button>CLICK HERE & GET THERE</button>
      </NavLink>
    </>
  );
}

export default Navbar;
