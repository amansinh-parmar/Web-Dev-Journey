"use client";

import { useEffect } from "react";

export default function ContactClient() {
  useEffect(() => {
    alert("Hello, Welcome to CONTACT PAGE.")
  }, []);

  return (
    <div className="text-4xl flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      THIS IS CONTACT PAGE
    </div>
  );
}
