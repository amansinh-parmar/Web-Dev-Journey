import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="min-h-[45rem] flex justify-center items-center border-2 border-black"> */}
      <Manager />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
