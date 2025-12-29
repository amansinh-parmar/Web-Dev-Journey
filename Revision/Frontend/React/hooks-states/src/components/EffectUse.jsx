import { useEffect, useState } from "react";

export default function EffectUse() {
  const [count, setCount] = useState(0);

  // Case 1: Run on every render
  useEffect(() => {
    alert("HEY, I'M RUN ON EVERY RENDER");
  });

  // Case 2: Run only on first render
  useEffect(() => {
    alert("HEY, I'M RUN ONLY ON FIRST RENDER");
  }, []);

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("HEY, I CAN RUN ONLY ON COUNT CHANGED");
  }, [count]);

  // Example of Cleanup Function
  useEffect(() => {
    alert("HEY, WELCOME TO MY PAGE. THIS IS THE FIRST RENDER OF App.jsx");

    return () => {
      alert("COMPONENT WAS UNMOUNTED");
    };
  }, []);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h2>Hook (useEffect) count is {count}</h2>
        <button onClick={updateCount}>useEffect Count</button>
      </div>
    </>
  );
}
