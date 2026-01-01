import "./App.css";
import { useCallback, useState } from "react";
import MemoUse from "./component/MemoUse";
import Navbar from "./component/Navbar";
import Callback from "./component/Callback";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  };
});

function App() {
  return (
    <>
      <MemoUse />
      <Callback />
    </>
  );
}

export default App;
