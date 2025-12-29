import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },

    {
      path: "/button",
      element: <Button />,
    },
  ]);

  return (
    <>
      <h1>WELCOME TO useContext</h1>
      {/* <li><NavLink to="/button">GET HERE</NavLink></li> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
