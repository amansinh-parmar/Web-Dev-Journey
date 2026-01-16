import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between px-7 bg-slate-800 text-white py-4">
        <div className="logo font-bold">Facebook</div>
        <ul className="flex gap-8">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
