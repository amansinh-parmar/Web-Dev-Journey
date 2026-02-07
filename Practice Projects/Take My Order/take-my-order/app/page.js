import Image from "next/image";

export default function Home() {
  return (
    <>
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
        <div className="flex mx-2 gap-4">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5"
          >
            Start Now
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto">
        <h1 className="text-2xl font-bold text-center my-14">
          Your Fans can Order Here!
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item mx-4 space-y-3 ">
            <img
              className="p-2 bg-slate-400 rounded-full text-black"
              width={90}
              src="/man.png"
              alt=""
            />
            <p className="font-bold tracking-tight">Fund Yourself</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item mx-4 space-y-3 ">
            <img
              className="p-2 bg-slate-400 rounded-full text-black"
              width={90}
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold tracking-tight">Fund Yourself</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item mx-4 space-y-3 flex flex-col items-center justify-center ">
            <img
              className="p-2 bg-slate-400 rounded-full text-black"
              width={90}
              src="/man.png"
              alt=""
            />
            <p className="font-bold tracking-tight">Your Fans Want to Help</p>
            <p>Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
    </>
  );
}
