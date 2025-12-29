import { useEffect, useRef, useState } from "react";

export default function RefUse() {
  const [count, setCount] = useState(0);
  const btnRef = useRef();

  // Case 1: Run on every render
  useEffect(() => {
    // alert("HEY, I'M RUN ON EVERY RENDER");
    btnRef.current.style.backgroundColor = "teal";
  });

  const updateCount = () => {
    setCount(count + 1);
  };

  const removeBtn = () => {
    btnRef.current.style.display = "none";
  };

  return (
    <>
      <div>
        <h2>Hook (useRef) count is {count}</h2>
        <button ref={btnRef} onClick={updateCount}>
          useRef Count
        </button>
        <br />
        <button onClick={removeBtn}>Remove useRef </button>
      </div>
    </>
  );
}
