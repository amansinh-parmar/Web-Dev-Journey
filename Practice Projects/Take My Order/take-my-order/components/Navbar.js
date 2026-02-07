"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

  return (
    <>
      <nav className="bg-blue-950 text-white flex justify-around items-center text-lg px-6 ">
        <div className="logo font-semibold text-2xl flex justify-center items-center tracking-wide">
          <img src="tech.gif" width={88} alt="" />
          <span>TakeMyOrder</span>
        </div>
        {/* <ul className="flex justify-between list-none gap-7">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Login</li>
            <li>Sign up</li>
        </ul> */}

        <div>
          {session &&  <Link href={"/dashboard"}>
            <button
              type="button"
              className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5">
              Dashboard
            </button>
          </Link>}

          <Link href={"/login"}>
            <button
              type="button"
              className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
