import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import { MemoUse } from "./component/MemoUse";

// const nums = new Array(30_000_000).fill(0).map((_, i) => {
//   return {
//     index: i,
//     isMagical: i === 29_000_000,
//   };
// });

function App() {
  const [adjective, setAdjective] = useState("good");

  const getAdjective = () => {
    return "ANOTHER";
  };

  return (
    <>
      {/* <MemoUse /> */}

      <div className="use-callback">
        <Navbar adjective={"GOOD"} setAdjective={getAdjective} />
      </div>
    </>
  );
}

export default App;
