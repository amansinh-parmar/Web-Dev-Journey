import React from "react";

export default function Login() {
  return (
    <>
      <div className=" flex justify-center items-center min-h-180">
        <form action="">
          <div className="m-2">
            <label htmlFor="" className="m-4 text-2x1">
              Email ID
            </label>
            <input type="text" className="border mb-4" name="email" id="" />
            <br />
            <label htmlFor="" className="text-2x1 m-3">
              Password
            </label>
            <input type="password" className="mb-4 border" name="email" id="" />
            <br />
            <a href="/admin/comments">
              <button className="mx-34 cursor-pointer border p-2">Sign up</button>
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
