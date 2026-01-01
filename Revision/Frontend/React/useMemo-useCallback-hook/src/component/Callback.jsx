import React from "react";
import { useCallback, useState } from "react";
import Navbar from "./Navbar";

const Callback = () => {
  const [adjective, setAdjective] = useState("good");

  // useCallback to 'Freeze' this function
  const getAdjective = useCallback(() => {
    return "ANOTHER";
  }, []);

  return (
    <>
      <h1>React 'useCallback' Hook</h1>


      <div className="use-callback">
        <Navbar adjective={"GOOD"} setAdjective={getAdjective} />
      </div>
    </>
  );
};

export default Callback;
