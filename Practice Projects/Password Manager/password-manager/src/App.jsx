import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Manager />
      <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Footer />
      </div>
    </>
  );
}

export default App;
