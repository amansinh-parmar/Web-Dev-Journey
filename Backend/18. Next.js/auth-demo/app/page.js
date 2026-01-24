// 'use client'
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       NextJS Authentication Demo
//     </div>
//   );
// }

"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="text-2xl flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <div> Signed in as {session.user.email} </div>
          <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="text-4xl flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div> Not signed in </div> <br />
        <button onClick={() => signIn()}>Sign in</button>
        {/* <button onClick={() => signIn("github")}>Sign in with GitHub</button> */}
      </div>
    </>
  );
}
