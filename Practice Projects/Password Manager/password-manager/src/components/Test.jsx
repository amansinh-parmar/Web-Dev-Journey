import React, { useRef, useState, useEffect } from "react";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    // const passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
    // else {
    //   passwordArray = [];
    // }
  }, []);

  const [showPass, setShowPass] = useState(false);

  // Show Password
  // const showPassword = () => {
  //   passwordRef.current.type = "text";
  //   if (ref.current.src.includes("icons/eye-cross.svg")) {
  //     ref.current.src = "icons/eye.svg";
  //     ref.current.type = "password";
  //   } else {
  //     ref.current.src = "icons/eye-cross.svg";
  //     ref.current.type = "text";
  //   }
  // };

  // Save Password
  const savePassword = () => {
    if (
      form.site.length > 3 &&
      form.site.length > 3 &&
      form.site.password > 3
    ) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]),
      );
      console.log([...passwordArray, form]);
      setForm({ site: "", username: "", password: "" });
      toast("☑️ Saved successfully..", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else{
      toast('Error: Password not saved!')
    }
  };

  // Delete Password
  const deletePassword = (id) => {
    console.log("Deleting passwords ID is", id);
    const c = confirm("Do you really want to delete this?");

    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id)),
      );
      toast("🗑️ Deleted successfully..", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log([...passwordArray, form]);
    }
  };

  // Edit Password
  const editPassword = (id) => {
    setForm(passwordArray.filter((i) => i.id !== id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Copy Text
  const copyText = (text) => {
    toast("🦄 Copied to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      {/* Container */}
      <div className="p-2 pt-7 md:p-0 md:mycontainer min-h-[77.7vh]">
        {/* Title */}
        <h1 className="text-5xl font-bold text text-center mt-20 mb-4">
          <span className="text-green-400">&lt;</span>
          Password
          <span className="text-green-500">Manager/&gt;</span>
        </h1>
        <p className="text-green-500 text-2xl text-center font-semibold">
          Your Own Password Manager
        </p>

        {/* Enter Website URL */}
        <div className="text-black flex flex-col items-center p-4 gap-8 ml-10 mt-5">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-500 w-full p-4 py-1"
            placeholder="Enter website URL"
            type="text"
            name="site"
            id="site"
          />

          <div className="flex flex-col md:flex-row justify-between w-full gap-9">
            {/* Enter Username */}
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-green-500 w-full p-4 py-1"
              placeholder="Enter username"
              type="text"
              name="username"
              id="username"
            />

            {/* Enter Password */}
            <div className="relative w-full">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                type={showPass ? "text" : "password"} // toggle type based on state
                name="password"
                id="password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
              />
              <span
                className="absolute right-[4px] top-[5px] cursor-pointer"
                onClick={() => setShowPass(!showPass)} // toggle state
              >
                <img
                  ref={ref}
                  src={showPass ? "icons/eye.svg" : "icons/eye-cross.svg"} // icon changes
                  className="p-1"
                  width={25}
                  alt="Toggle Password Visibility"
                />
              </span>
            </div>
          </div>

          {/* Add Password Button */}
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-500 rounded-full px-5 py-3 w-fit hover:bg-green-400 border-2 border-green-700 "
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
            <span className="ml-2">Save Password</span>
          </button>
        </div>
        <div className="password ml-10">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Password to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden mb-14">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-2">Website</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                      <tr key={item.id} className="text-center">
                      {/* Table URL */}
                      <td className="py-2 border border-white text-center">
                        <div
                          className="flex justify-center items-center gap-4 underline"
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
                      {/* Table Username */}
                      <td className=" py-2 border border-white text-center">
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
                      {/* Table Password */}
                      <td className=" py-2 border border-white text-center">
                        <div
                          className="flex justify-center items-center gap-4"
                          onClick={() => copyText(item.password)}
                        >
                          <span>{item.password}</span>
                          <img
                            src="icons/copy.svg"
                            width={20}
                            className="cursor-pointer"
                            alt=""
                          />
                        </div>
                      </td>

                      {/* Table Action For Passwords */}
                      <td className=" py-2 border border-white text-center">
                        <span
                          className="cursor-pointer mx-2"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            style={{ width: "32px", height: "32px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-2"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/jzinekkv.json"
                            trigger="hover"
                            stroke="bold"
                            style={{ width: "28px", height: "28px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
