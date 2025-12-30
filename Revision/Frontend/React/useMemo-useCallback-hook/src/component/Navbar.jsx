import React, { useRef, useState } from "react";
import { memo } from "react";

const Navbar = ({ adjective }) => {
  console.log("THIS IS RUN TIME CHECK.");
  const [count, setCount] = useState(0);

  const [form, setForm] = useState({ adjective: "" });

  const ref = useRef(null);

  const btnStyle = () => {
    ref.current.style.backgroundColor = "slategray";
    ref.current.style.border = "1px solid #000";
  };

  const updateCount = () => {
    setCount(count + 1);
    btnStyle();
  };

  const changeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <h2>
          I'M {form.adjective !== "" ? form.adjective : "_______"} NAVBAR.
        </h2>
      </div>
      <input
        type="text"
        name="adjective"
        value={form.adjective}
        onChange={changeValue}
      />

      <h1>{count}</h1>
      <button ref={ref} onClick={updateCount}>
        CLICK HERE
      </button>
    </>
  );
};

// export default memo(Navbar);
export default Navbar;
