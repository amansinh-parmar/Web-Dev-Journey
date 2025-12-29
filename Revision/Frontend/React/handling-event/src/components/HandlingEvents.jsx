import { useState, useRef } from "react";

export default function HandlingEvents() {
  //   const [name, setName] = useState("Apex");
  const [form, setForm] = useState({ name: "", phone: "" });

  // Create a ref to access the button DOM element
  const ref = useRef(null);

  // Generate a random RGB color
  const random = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleClick = () => {
    alert("HEY, IT'S ME!");
  };

  // Change button color on mouse hover
  const mouseHover = () => {
    ref.current.style.backgroundColor = random(); // fixed typo
    ref.current.style.color = "#fff";
  };

  const changeValue = (e) => {
    // setName(e.target.value);
    setForm({...form, [e.target.name] : e.target.value })
  };

  return (
    <>
      <div>
        <h1>Handling Events in ReactJS</h1>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          value={form.name ? form.name: ""}
          onChange={changeValue}
        />
        <br />
        <label htmlFor="">Contact No: </label>
        <input
          type="number"
          name="phone"
          value={form.phone ? form.phone: ""}
          onChange={changeValue}
        />
        <br />
        <button
          ref={ref} // attach ref to button
          onClick={handleClick}
          onMouseEnter={mouseHover} // correct mouse event
        >
          CLICK ME
        </button>
      </div>
    </>
  );
}
