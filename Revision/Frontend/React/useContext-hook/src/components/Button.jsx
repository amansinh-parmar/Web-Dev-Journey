import { Test1 } from "./Test1";
import { useContext } from "react";
import { counterContext } from "../context/context";

function Button() {
  const { count, setCount } = useContext(counterContext);

  const updateCount = () => {
    const update = count + 1;
    setCount(update);
  };

  return (
    <>
      <h2>HEY, THIS IS A BUTTON PAGE</h2>

      <button onClick={updateCount}>
        <span>
          <Test1 />
        </span>
        I AM BUTTON
      </button>
    </>
  );
}

export default Button;
