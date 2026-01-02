import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Navbar = ({
  groups,
  setGroups,
  activeGroupId,
  setActiveGroupId,
  filter,
  setFilter,
}) => {
  const [open, setOpen] = useState(false); // For mobile toggle
  const [newGroup, setNewGroup] = useState("");

  // Add new group
  const addGroup = () => {
    if (!newGroup.trim()) return;
    setGroups((prev) => [
      ...prev,
      { id: uuidv4(), name: newGroup, tasks: [] },
    ]);
    setNewGroup("");
    setActiveGroupId(newGroup); // Optional: set newly added group active
  };

  // Styling helpers
  const groupClass = (id) =>
    `cursor-pointer px-3 py-1 rounded-md transition 
     ${activeGroupId === id ? "bg-white text-violet-600 font-bold" : "hover:bg-violet-600"}`;

  const filterClass = (type) =>
    `cursor-pointer px-3 py-1 rounded-md transition 
     ${filter === type ? "bg-white text-violet-600 font-bold" : "hover:bg-violet-400"}`;

  return (
    <nav className="bg-violet-500 text-white sticky top-0 z-50 w-full shadow-md">
      {/* MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between px-4 py-3 gap-3 md:gap-0">

        {/* LOGO */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <span className="text-3xl font-bold tracking-widest mr-19">iTask</span>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MENU ITEMS (Desktop) */}
        <div className="hidden md:flex md:items-center md:gap-6 w-full justify-between">

          {/* GROUPS */}
          <div className="flex gap-2 flex-wrap">
            {groups.map((group) => (
              <div
                key={group.id}
                onClick={() => {
                  setActiveGroupId(group.id);
                  setFilter("all"); // reset filter on group change
                }}
                className={groupClass(group.id)}
              >
                {group.name}
              </div>
            ))}
          </div>

          {/* FILTERS */}
          <div className="flex gap-2 flex-wrap">
            <div onClick={() => setFilter("all")} className={filterClass("all")}>
              All
            </div>
            <div onClick={() => setFilter("pending")} className={filterClass("pending")}>
              Pending
            </div>
            <div onClick={() => setFilter("completed")} className={filterClass("completed")}>
              Completed
            </div>
          </div>

          {/* ADD GROUP */}
          <div className="flex gap-2">
            <input
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
              placeholder="New group..."
              className="px-3 py-1 rounded-md text-white"
            />
            <button
              onClick={addGroup}
              className="bg-white text-violet-600 px-3 py-1 rounded-md font-bold"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-violet-600 px-4 py-3 space-y-3">
          {/* Groups */}
          <div className="flex flex-col gap-2">
            {groups.map((group) => (
              <div
                key={group.id}
                onClick={() => {
                  setActiveGroupId(group.id);
                  setFilter("all");
                  setOpen(false); // close menu
                }}
                className={groupClass(group.id)}
              >
                {group.name}
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            <div onClick={() => setFilter("all")} className={filterClass("all")}>
              All
            </div>
            <div onClick={() => setFilter("pending")} className={filterClass("pending")}>
              Pending
            </div>
            <div onClick={() => setFilter("completed")} className={filterClass("completed")}>
              Completed
            </div>
          </div>

          {/* Add Group */}
          <div className="flex gap-2 mt-2">
            <input
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
              placeholder="New group..."
              className="px-3 py-1 rounded-md text-white w-full"
            />
            <button
              onClick={addGroup}
              className="bg-white text-violet-600 px-3 py-1 rounded-md font-bold"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
