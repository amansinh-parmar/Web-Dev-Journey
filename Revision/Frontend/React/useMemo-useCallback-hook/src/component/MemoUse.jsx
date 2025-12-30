import React from "react";
import { useState } from "react";

export const MemoUse = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  const magical = MemoUse(
    () => numbers.find((item) => item.isMagical === true),
    [numbers]
  );

  const updateCount = () => {
    setCount(count + 1);
    if (count === 10) {
      setNumbers(
        new Array(10_000_000).fill(0).map((_, i) => {
          return {
            index: i,
            isMagical: i === 9_000_000,
          };
        })
      );
    }
  };

  return (
    <>
      <h1>useMemo</h1>
      <div className="use-memo">
        <h1>React "useMemo" in 'Hook'</h1>
        <span>Magical number is {magical.index}</span>
        <h2>{count}</h2>
        <button onClick={updateCount}>CLICK HERE!</button>
      </div>
    </>
  );
};
