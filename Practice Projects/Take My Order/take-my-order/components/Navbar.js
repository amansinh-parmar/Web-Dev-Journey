"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);

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
      <nav className="bg-blue-950 text-lg text-white flex justify-around items-center ">
        <Link
          href={"/"}
          className="logo font-semibold text-lg flex justify-center items-center tracking-wide"
        >
          <img className="invertImg" src="tech.gif" width={88} alt="" />
          <span>TakeMyOrder</span>
        </Link>

        {/* <ul className="flex justify-between list-none gap-7">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Login</li>
            <li>Sign up</li>
        </ul> */}

        {/* <div> */}
        <div className="flex gap-4">
          {session && (
            // <>
            <div className="relative">
              <button
                onClick={() => setShowdropdown(!showdropdown)}
                onBlur={() => {
                  setTimeout(() => {
                    setShowdropdown(false);
                  }, 300); // small delay so click inside works
                }}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="inline-flex items-center justify-center mx-2 bg-blue-700 hover:bg-blue-800 focus:right-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800 "
                type="button"
              >
                Welcome {session.user.email}
                <svg
                  className="w-4 h-4 ms-1.5 -me-0.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <div>
                <div
                  id="dropdown"
                  className={`z-10 ${showdropdown ? "" : "hidden"} absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                >
                  <ul
                    className="p-2 text-sm text-gray-700 dark:text-gray-200 text-body font-medium"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        href="/dashboard"
                        className="inline-flex items-center w-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="inline-flex items-center w-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded"
                      >
                        Your Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="inline-flex items-center w-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* </> */}
            </div>
          )}

          <div className="flex justify-center gap-4">
            {session && (
              <Link href="/">
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5"
                >
                  Logout
                </button>
              </Link>
            )}

            {!session && (
              <Link href="/login">
                <button
                  type="button"
                  className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
