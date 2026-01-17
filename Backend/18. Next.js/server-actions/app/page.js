"use client";

import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  const ref = useRef();

  return (
    <>
      {/* <div className="flex  min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"> */}
      <div className="w-2/3 mx-auto my-12">
        <form
          ref={ref}
          action={async (formData) => {
            await submitAction(formData); // Server Action
            ref.current.reset(); // Client-side reset
          }}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="text- border mx-2 my-2"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="add">Address</label>
            <input
              className="text-white border mx-2 my-2"
              type="text"
              name="add"
              id="add"
            />
          </div>
          {/* <button onClick={handleClick}>Submit</button> */}
          <button className="border px-2">Submit</button>
        </form>
      </div>
    </>
  );
}
