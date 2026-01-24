import React from "react";

export default function Page() {
  return (
    <>
      <div className="flex min-h-180 text-2xl items-center justify-center bg-zinc-50 font-sans dark:bg-black p-20">
        Pages and Layouts Last updated April 15, 2025 The Pages Router has a
        file-system based router built on the concept of pages. When a file is
        added to the pages directory, it's automatically available as a route.
        In Next.js, a page is a React Component exported from a .js, .jsx, .ts,
        or .tsx file in the pages directory. Each page is associated with a
        route based on its file name. Example: If you create pages/about.js that
        exports a React component like below, it will be accessible at /about.
      </div>
    </>
  );
}
