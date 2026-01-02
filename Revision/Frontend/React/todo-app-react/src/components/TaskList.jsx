import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskList = ({ groups, setGroups, activeGroupId, filter }) => {
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(null);

  const activeGroup = groups.find((g) => g.id === activeGroupId);
  if (!activeGroup) return null;

  // FILTER TASKS
  const filteredTasks = activeGroup.tasks.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "pending") return !task.isCompleted;
    return true;
  });

  // ADD / UPDATE
  const handleAdd = () => {
    if (!todo.trim()) return;

    setGroups((prev) =>
      prev.map((group) =>
        group.id === activeGroupId
          ? {
              ...group,
              tasks: editId
                ? group.tasks.map((t) =>
                    t.id === editId ? { ...t, todo } : t
                  )
                : [...group.tasks, { id: uuidv4(), todo, isCompleted: false }],
            }
          : group
      )
    );

    setTodo("");
    setEditId(null);
  };

  const toggleTask = (id) => {
    setGroups((prev) =>
      prev.map((group) =>
        group.id === activeGroupId
          ? {
              ...group,
              tasks: group.tasks.map((t) =>
                t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
              ),
            }
          : group
      )
    );
  };

  const deleteTask = (id) => {
    setGroups((prev) =>
      prev.map((group) =>
        group.id === activeGroupId
          ? { ...group, tasks: group.tasks.filter((t) => t.id !== id) }
          : group
      )
    );
  };

  const editTask = (task) => {
    setTodo(task.todo);
    setEditId(task.id);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        {activeGroup.name} – {filter.toUpperCase()}
      </h2>

      <div className="flex flex-col md:flex-row gap-3 justify-center mb-6">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-md"
          placeholder="Enter task..."
        />
        <button
          onClick={handleAdd}
          className="bg-violet-500 px-6 py-2 text-white rounded-md font-bold"
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 rounded-md mb-3 flex flex-col md:flex-row justify-between"
        >
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.isCompleted ? "line-through text-gray-500" : ""}>
              {task.todo}
            </span>
          </div>

          <div className="flex gap-3 mt-2 md:mt-0">
            <button
              onClick={() => editTask(task)}
              className="bg-blue-500 px-3 py-1 text-white rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 px-3 py-1 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {filteredTasks.length === 0 && (
        <p className="text-center text-gray-500">No tasks found</p>
      )}
    </div>
  );
};

export default TaskList;
