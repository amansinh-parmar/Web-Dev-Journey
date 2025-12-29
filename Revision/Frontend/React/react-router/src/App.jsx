  import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import User from "./components/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>,
    },
    {
      path: "/login",
      element: <> <Navbar /><Login /></>,
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>,
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>,
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>,
    },
  ]);

  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
