import { useOptimistic, useRef, useState } from "react";
import "./ConditionalRendering.css";

export default function ListRendering() {
  const ref = useRef(null);

  const random = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const btnRef = () => {
    if (ref.current) {
      ref.current.style.backgroundColor = random();
      ref.current.style.color = "#fff";
    }
  };

  const [todo, setTodo] = useState([
    {
      title: "LEARN REACTJS",
      desc: "Learn Components, States, Hooks, Props",
    },
    {
      title: "WORKOUT",
      desc: "GYM 5 Days/Week",
    },
    {
      title: "MEDITATION",
      desc: "Sit 10-15 minutes clam everyday.",
    },
    {
      title: "ACT ON DREAMS",
      desc: "Do whatever you like to do never think about 'FAILURE'",
    },
  ]);

  return (
    <div>
      <h2 className=" mt-4 text-4xl">List Rendering</h2>
      <button ref={ref} onClick={btnRef}>
        'CLICK HERE' and Get Random Color
      </button>
      <br />
      <br />

      <h2 className="mb-4 text-4xl">ToDo List</h2>
      <ul className="flex flex-col items-center gap-4">
        {todo.map((item) => (
          <li
            key={item.title}
            className="border-2 border-purple-700 p-2 w-fit text-center"
          >
            <strong className="text-orange-500 block">Title: {item.title}</strong>
            <strong className="text-teal-700 block">
              Description: {item.desc}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
