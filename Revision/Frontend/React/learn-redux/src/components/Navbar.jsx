import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Navbar = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h2>I am NAVBAR and Counter is {count}</h2>
    </>
  );
};
