// "use client"; //this is 'required' while running using client side (like, useEffects, useState)
// import { useState } from "react";
import "./globals.css";
import fs from "fs/promises";

export default function Home() {
  // const [count, setCount] = useState(0);

  let a = fs.readFile(".gitignore", "utf-8");
  a.then((e) => {
    console.log(e.toString());
  });

  return (
    <>
      <div className="flex min-h-1/4 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-4xl">I'm Server Component File</h1>
      </div>

      <div>
        <h3>.gitgnore Content: </h3>
        <pre>{a}</pre>
      </div>

      {/* <div>
        <h3>Count Value : {count}</h3>
        <button onClick={() => setCount(count + 1)}>UPDATE COUNT</button>
      </div> */}
    </>
  );
}
