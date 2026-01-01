import React, { memo, useMemo, useState } from "react";

const MemoUse = () => {
  const [count, setCount] = useState(0);

  // Initialize numbers properly (instead of using undefined `nums`)
  const [numbers, setNumbers] = useState([]);

  // Correct hook: useMemo (not MemoUse)
  const magical = useMemo(() => {
    return numbers.find((item) => item.isMagical === true);
  }, [numbers]);

  const updateCount = () => {
    setCount((prev) => prev + 1);

    // When count reaches 10, generate large array
    if (count === 10) {
      setNumbers(
        new Array(10_000_000).fill(0).map((_, i) => ({
          index: i,
          isMagical: i === 9_000_000,
        }))
      );
    }
  };

  return (
    <>
      <h1>useMemo</h1>
      <div className="use-memo">
        <h2>React "useMemo" Hook</h2>

        {/* Safe access using optional chaining */}
        <span>
          Magical number is {magical?.index ?? "Not calculated yet"}
        </span>

        <h2>{count}</h2>
        <button onClick={updateCount}>CLICK HERE!</button>
      </div>
    </>
  );
};

// memo is fine here to prevent unnecessary re-renders
export default memo(MemoUse);
