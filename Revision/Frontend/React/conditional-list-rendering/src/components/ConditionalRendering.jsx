import { useRef, useState } from "react";
import "./ConditionalRendering.css";

export default function ConditionalRendering() {
  const [showBtn, setShowBtn] = useState(true);
  const ref = useRef(null);

  const condition = () => {
    setShowBtn(!showBtn);
  };

  const random = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const btnRef = () => {
    ref.current.style.backgroundColor = random();
    ref.current.style.color = "#fff";
  };

  return (
    <>
      <div>
        <h2>Conditional (if-else) Rendering</h2>
        {showBtn && (
          <button ref={ref} onClick={btnRef}>
            'ONLY APPEAR' FOR RANDOM COLOR
          </button>
        )}
        <br /> <br />
        <button onClick={condition}>CLICK HERE To GET MAGIC BUTTON </button>
      </div>
    </>
  );
}
