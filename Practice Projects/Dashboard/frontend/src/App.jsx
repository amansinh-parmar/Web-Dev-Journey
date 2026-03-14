import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/admin/Dashboard";
import ManageTask from "./pages/admin/ManageTask";
import ManageUsers from "./pages/admin/ManageUsers";
import CreateTask from "./pages/admin/CreateTask";
import PrivateRoute from "./routes/PrivateRoute";
import UserDashboard from "./user/UserDashboard";
import MyTasks from "./user/MyTasks";
import TaskDetails from "./user/TaskDetails";

import "./index.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
          </Route>

          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={["users"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route path="/user/task-details/:id" element={<TaskDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
