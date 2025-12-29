import React from "react";
import { useContext } from "react";
import { counterContext } from "../context/context";

export const Test1 = () => {
  const { count } = useContext(counterContext);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
};
