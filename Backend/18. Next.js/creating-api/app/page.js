"use client";

import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    const data = {
      name: "Apex",
      role: "Coder",
    };

    const a = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const res = await a.json();
    console.log(res);
  };

  return (
    <>
      <div className="grid min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>Next.JS API Routes Demo</h1>
        <br />
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}
