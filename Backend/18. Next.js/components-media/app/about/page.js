import Image from "next/image";

export default function about() {
  return (
    <>
      <div className=" text-4xl flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        THIS IS THE ABOUT PAGE DETAILS
      </div>
    </>
  );
}


export const metadata = {
  title: "About Facebook",
  description: "This is about facebook and we can connect with the world using Facebook",
}