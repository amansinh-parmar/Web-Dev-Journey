import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const passwordRef = useRef(null);

  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
    _id: null, // Keep track of MongoDB _id for edits
  });

  const [passwordArray, setPasswordArray] = useState([]);
  const [showPass, setShowPass] = useState(false);

  /* =============== Load passwords on mount =============== */
  useEffect(() => {
    getPasswords(); // Load passwords from server
  }, []);

  /* =============== Get Passwords from server =============== */
  const getPasswords = async () => {
    try {
      const res = await fetch("http://localhost:3000/");
      const passwords = await res.json();
      // Map MongoDB _id to id for frontend rendering
      const mappedPasswords = passwords.map((p) => ({ ...p, id: p._id }));
      setPasswordArray(mappedPasswords);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load passwords!");
    }
  };

  /* =============== Save Password =============== */
  const savePassword = async () => {
    if (
      form.site.length < 4 ||
      form.username.length < 4 ||
      form.password.length < 4
    ) {
      toast.error("All fields must be at least 4 characters!");
      return;
    }

    try {
      if (form._id) {
        // EDIT existing password
        await fetch(`http://localhost:3000/update/${form._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            site: form.site,
            username: form.username,
            password: form.password,
          }),
        });
        toast.success("Updated successfully!");
      } else {
        // ADD new password
        await fetch("http://localhost:3000/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            site: form.site,
            username: form.username,
            password: form.password,
          }),
        });
        toast.success("Saved successfully!");
      }

      setForm({ site: "", username: "", password: "", _id: null }); // Reset form
      getPasswords(); // Reload list
    } catch (err) {
      console.error(err);
      toast.error("Failed to save password!");
    }
  };

  /* ============== Delete Password ============== */
  const deletePassword = async (id) => {
    if (confirm("Do you really want to delete this?")) {
      try {
        await fetch(`http://localhost:3000/delete/${id}`, { method: "DELETE" });
        toast.success("Deleted successfully!");
        getPasswords(); // Reload list
      } catch (err) {
        console.error(err);
        toast.error("Failed to delete password!");
      }
    }
  };

  /* =============== Edit Password =============== */
  const editPassword = (id) => {
    const passwordToEdit = passwordArray.find((item) => item.id === id);
    setForm(passwordToEdit); // Prefill form
  };

  /* =============== Handle Input Change =============== */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ============== Copy to Clipboard ============== */
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard!");
  };

  return (
    <>
      <ToastContainer transition={Bounce} theme="dark" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 min-h-screen">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-10 mb-4">
          <span className="text-green-400">&lt;</span>
          Password
          <span className="text-green-500">Manager/&gt;</span>
        </h1>

        <p className="text-green-600 text-lg md:text-2xl text-center font-semibold">
          Your Own Password Manager
        </p>

        {/* Form */}
        <div className="flex flex-col gap-6 mt-10">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-500 px-4 py-2 w-full"
            placeholder="Enter website URL"
            name="site"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-green-500 px-4 py-2 w-full"
              placeholder="Enter username"
              name="username"
            />

            {/* Password Input */}
            <div className="relative w-full">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                type={showPass ? "text" : "password"}
                className="rounded-full border border-green-500 px-4 py-2 w-full"
                placeholder="Enter password"
                name="password"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-2.5"
              >
                <img
                  src={showPass ? "icons/eye.svg" : "icons/eye-cross.svg"}
                  width={22}
                  alt="toggle password"
                />
              </button>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="bg-green-500 hover:bg-green-400 text-white font-bold text-lg rounded-full px-6 py-3 self-center flex items-center gap-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
            {form._id ? "Update Password" : "Save Password"}
          </button>
        </div>

        {/* Password List */}
        <div className="mt-14">
          <h2 className="font-bold text-xl mb-4">Your Passwords</h2>

          {passwordArray.length === 0 && (
            <p className="text-gray-500">No passwords saved</p>
          )}

          {/* RESPONSIVE - Mobile-friendly table */}
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full rounded-md overflow-hidden">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-2">Website</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="border py-2">
                      <div
                        className="flex justify-center items-center gap-4"
                        onClick={() => copyText(item.site)}
                      >
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                        <img
                          src="icons/copy.svg"
                          width={20}
                          className="cursor-pointer"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="border py-2">
                      <div
                        className="flex justify-center items-center gap-4"
                        onClick={() => copyText(item.username)}
                      >
                        <span>{item.username}</span>
                        <img
                          src="icons/copy.svg"
                          width={20}
                          className="cursor-pointer"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="border py-2">
                      <div
                        className="flex justify-center items-center gap-4"
                        onClick={() => copyText(item.password)}
                      >
                        <span>{"*".repeat(item.password.length)}</span>
                        <img
                          src="icons/copy.svg"
                          width={20}
                          className="cursor-pointer"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="border py-2 flex justify-center items-center gap-4">
                      <button
                        onClick={() => editPassword(item.id)}
                        className="mr-2"
                      >
                        ✏️
                      </button>
                      <button onClick={() => deletePassword(item.id)}>
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
