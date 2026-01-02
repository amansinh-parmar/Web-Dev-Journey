import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {

  };

  const handleDelete = (e, id) => {
      let index = todos.findIndex((item) => {
      return item.id === id;
    });
    console.log(index);
    // newTodos[index].isCompleted = !newTodos[index].isCompleted;
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos);
    console.log(newTodos);

  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    console.log(id);
    let index = todos.findIndex((item) => {
      return item.id === id;
      // todos.filter()
    });
    console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    console.log(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a ToDo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            name=""
            className="w-1/2 bg-white rounded-md"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-500 hover:bg-violet-950 px-4 py-1 text-sm text-white rounded-md mx-6 font-bold"
          >
            Add
          </button>
        </div>

        <h2 className="text-lg font-bold">Your ToDos</h2>
        <div className="todos">
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex w-1/4 my-3 justify-between"
              >
                <input
                  onChange={handleCheckBox}
                  type="checkbox"
                  value={item.isCompleted}
                  name={item.id}
                  id=""
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <button
                    onClick={handleEdit}
                    className="bg-violet-500 hover:bg-violet-950 px-4 py-1 text-white rounded-md mx-6 font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="bg-violet-500 hover:bg-violet-950 px-4 py-1 text-white rounded-md mx-6 font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
