import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-950 text-white flex justify-around items-center text-lg px-6 py-4">
        <div className="logo font-semibold text-2xl underline decoration-wavy decoration-orange-500 tracking-wide">TakeMyOrder!</div>
        <ul className="flex justify-between list-none gap-7">
          <a href="/"><li>Home</li></a>
          <a href="/about"><li>About</li></a>
          <a href="/project"><li>Projects</li></a>
          <a href="/login"><li>Login</li></a>
          <a href="/signup"><li>Sign up</li></a>
        </ul>
      </nav>
    </>
  );
};