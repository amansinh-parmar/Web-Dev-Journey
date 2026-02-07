"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <div className="min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
        <div className="flex items-center flex-col h-[44vh] justify-center gap-5">
          <div className="font-bold text-4xl flex items-center gap-2">
            Get Me a Order
            <Image src="/tech.gif" alt="cart" width={194} height={294} />
          </div>
          <p>
            A crowding platform for creators. Get funded by your fans and
            followers. Start now!
          </p>
          {/* <h1 className="text-4xl">Hello Developer's</h1> */}
          <div className="flex  gap-4">
            <button
              type="button"
              className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5"
            >
              Start Now
            </button>
            <button
              type="button"
              className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white h-1 opacity-10"></div>

        <div className="text-white container mx-auto py-10">
          <h2 className="text-2xl font-bold text-center mt-0 mb-9">
            Your Fans can Order Here!
          </h2>
          <div className="flex gap-5 justify-around">
            <div className="item mx-4 space-y-2 flex flex-col items-center justify-center">
              <img
                className="p-2 bg-slate-700 rounded-full text-black mx-2 "
                width={90}
                src="/developer.gif"
                alt=""
              />
              <p className="font-bold tracking-tight text-lg">Fund Yourself</p>
              <p className="text-center">
                Your fans are available for you to help you
              </p>
            </div>
            <div className="item mx-4 space-y-3 flex flex-col items-center justify-center">
              <img
                className="p-2 bg-slate-700 rounded-full text-black "
                width={90}
                src="/coin.gif"
                alt=""
              />
              <p className="font-bold tracking-tight text-lg">Fund Yourself</p>
              <p>Your fans are available for you to help you</p>
            </div>
            <div className="item mx-4 space-y-3 flex flex-col items-center justify-center ">
              <img
                className="p-2 bg-slate-700 rounded-full text-black "
                width={90}
                src="/group.gif"
                alt=""
              />
              <p className="font-bold tracking-tight text-lg">
                Your Fans Want to Help
              </p>
              <p>Your fans are available for you to help you</p>
            </div>
          </div>
        </div>

        <div className="bg-white h-1 opacity-10"></div>

        <div className="text-white container mx-auto py-12 pb-25 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center  mb-9">
            Learn more about us
          </h2>
          <iframe
            width="460"
            height="225"
            src="https://www.youtube.com/embed/W31tJZ3wj24"
            title="Mental Health Music"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}
