import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";

const STORAGE_KEY = "itask_groups_v2";

function App() {
  // GROUPS STATE (with lazy init to prevent overwrite)
  const [groups, setGroups] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored
      ? JSON.parse(stored)
      : [
          { id: "work", name: "Work", tasks: [] },
          { id: "personal", name: "Personal", tasks: [] },
        ];
  });

  // ACTIVE GROUP
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id);

  // FILTER PER GROUP (All / Pending / Completed)
  const [filter, setFilter] = useState("all");

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
  }, [groups]);

  return (
    <>
      <Navbar
        groups={groups}
        setGroups={setGroups}
        activeGroupId={activeGroupId}
        setActiveGroupId={setActiveGroupId}
        filter={filter}
        setFilter={setFilter}
      />
      <TaskList
        groups={groups}
        setGroups={setGroups}
        activeGroupId={activeGroupId}
        filter={filter}
      />
    </>
  );
}

export default App;
