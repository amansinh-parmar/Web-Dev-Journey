const Navbar = () => {
  return (
    <>
      <nav className="bg-purple-500 text-white">
        <div className="mycontainer flex justify-around items-center px-4 h-14 py-5">
          <div className="logo font-bold text-3xl">
            <span className="text-green-400">&lt;</span>
            Password
            <span className="text-green-400">Manager/&gt;</span>
          </div>

          {/* <ul>
            <li className="flex gap-9 text-xl">
              <a href="/" className="hover:font-bold">
                Home
              </a>
              <a href="/about" className="hover:font-bold">
                About
              </a>
              <a href="/" className="hover:font-bold">
                Contact
              </a>
            </li>
          </ul>
           */}

          <button className="flex justify-around items-center bg-green-500 px-2 py-1 my-5 rounded-full">
            <img
              src="/icons/github.svg"
              alt="github icon"
              className="w-7 h-7 invert cursor-pointer"
            />
            <span className="font-bold px-2">
              <a href="https://github.com/" target="_blank">GitHub</a>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
