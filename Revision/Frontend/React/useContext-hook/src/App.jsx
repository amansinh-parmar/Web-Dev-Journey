import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/Login";
import { useState } from "react";
import { counterContext } from "./context/context";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },

    {
      path: "/button",
      element: <Button />,
    },

    {
      path: "/login",
      element: <Login />,
    },
  ]);

  const updateCount = () => {
    const update = count + 1;
    setCount(update);
  };

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
      {/* <counterContext.Provider value={count}> */}
        <h1>WELCOME TO useContext</h1>

        <button onClick={updateCount}>Update Counter</button>
        <h2>{count}</h2>

        <RouterProvider router={router} />
      </counterContext.Provider>
    </>
  );
}

export default App;
