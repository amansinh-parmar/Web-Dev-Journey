import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";

function App() {
  return (
    <>
      <div>
        <h1 className="text-5xl">
          React Condional Rendering and List Rendering{" "}
        </h1>
        {/* <ConditionalRendering /> */}
        <ListRendering />
      </div>
    </>
  );
}

export default App;