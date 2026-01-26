import { useRef, useState, useEffect } from "react";

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
  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icons/eye-cross.svg")) {
      ref.current.src = "icons/eye.svg";
      ref.current.type = "password";
    } else {
      ref.current.src = "icons/eye-cross.svg";
      ref.current.type = "text";
    }
  };

  // Save Password
  const savePassword = () => {
    const updatePasswords = [...passwordArray, form];
    setPasswordArray([...passwordArray, form]);

    // Use same key everywhere
    localStorage.setItem("password", JSON.stringify(updatePasswords));
    console.log(updatePasswords);
  };

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      {/* Container */}
      <div className=" mycontainer">
        {/* Title */}
        <h1 className="text-2xl font-bold text text-center mb-4">
          <span className="text-green-400">&lt;</span>
          Password
          <span className="text-green-500">Manager/&gt;</span>
        </h1>
        <p className="text-green-500 text-lg text-center font-semibold">
          Your Own Password Manager
        </p>

        {/* Enter Website URL */}
        <div className="text-black flex flex-col items-center p-4 gap-8">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-500 w-full p-4 py-1"
            placeholder="Enter website URL"
            type="text"
            name="site"
          />

          <div className="flex w-full gap-9">
            {/* Enter Username */}
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-green-500 w-full p-4 py-1"
              placeholder="Enter username"
              type="text"
              name="username"
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
            className="flex justify-center items-center bg-green-500 rounded-full px-5 py-3 w-fit hover:bg-green-400 border-2 border-green-700"
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
            <span className="ml-2">Add Password</span>
          </button>
        </div>
        <div className="password">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Password to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-2">Website</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center w-32">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.username}
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.password}
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
