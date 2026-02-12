import React from "react";

export default function Username({ params }) {
  return (
    <>
      <div>
        <div className="cover w-full bg-red-50 relative">
          {/* <img
          className="object-cover w-full h-[350]"
          src="https://c10.patreonusercontent.com/4/patreon-media…32REkRN1KtwJUsnymAC7z_kA%3D&token-time=1772582400"
          alt=""
        /> */}
          <img
            className="object-cover w-full h-[350px]"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            // src=""
            alt="Cover Image"
          />

          {/* Profile Image */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 border-white border-4 rounded-full">
            {/* Removed extra space before URL */}
            {/* Added fixed width & height in class for consistency */}
            <img
              className="rounded-full w-[150px] h-[150px] object-cover"
              // src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              // src="https://png.pngtree.com/png-clipart/20240723/original/pngtree-meditation-harmony-with-yourself-and-with-space-balance-soul-color-fill-png-image_15622418.png"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQu9D-445rPgUjnuxGuhySPLpeBuDiKxC9zA&s"
              alt="Profile Image"
            />
          </div>

          {/* Profile Image */}
          {/* <div className="absolute -bottom-20 right-[46%] border-white border-2 rounded-full">
          <img
            className="rounded-full"
            width={150}
            height={150}
            src="	https://c10.patreonusercontent.com/4/patreon-media…vwj24QIzt88oxkIQVqhIoImg%3D&token-time=1772150400"
            alt=""
          />
        </div> */}
        </div>

        <div className="info flex justify-center items-center my-24 mb-32 flex-col gap-2">
          <div className="font-bold text-lg">@{params.username}</div>
          <div className="text-slate-400">Creating Animated art for VTT's</div>
          <div className="text-slate-400">
            9,7192 members . 82 posts . $12,549/release
          </div>

          <div className="payment flex gap-3 w-[80%] mt-11">
            <div className="supporters w-1/2 bg-slate-900 rounded-lg  text-white p-10">
              {/* show list of all the supporters as a leaderboard */}
              <h2 className="text-2xl text-center font-bold my-5">
                Supporters
              </h2>
              <ul className="mx-5 text-sm">
                <li className="my-4 flex gap-2 items-center">
                  <img src="avatar.gif" width={33} alt="" />
                  <span>
                    Jack donated <span className="font-bold">$30 </span> with a
                    message "I support you bro. Lots of ❤️"
                  </span>
                </li>
                <li className="my-4 flex gap-2 items-center">
                  <img src="avatar.gif" width={33} alt="" />
                  <span>
                    Apex donated <span className="font-bold">$50 </span> with a
                    message "I support you bro. Lots of ❤️"
                  </span>
                </li>
                <li className="my-4 flex gap-2 items-center">
                  <img src="avatar.gif" width={33} alt="" />
                  <span>
                    Amanada donated <span className="font-bold">$20 </span> with a
                    message "I support you bro. Lots of ❤️"
                  </span>
                </li>
              </ul>
            </div>

            <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
              <h2 className="text2xl mb-5">Make a Payment</h2>
              <div className="flex gap-2 flex-col">
                {/* Input for name and message */}
                <div>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-slate-800"
                    placeholder="Enter Name"
                  />
                </div>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-slate-800"
                  placeholder="Enter Message"
                />
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-slate-800"
                  placeholder="Enter Amount"
                />
                {/* <button className="bg-slate-800 p-3 rounded-lg">Pay</button> */}
                <button
                  type="button"
                  class="text-white bg-gradient-to-r rounded-lg from-cyan-900 to-purple-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
                >
                  Pay
                </button>
              </div>

              {/* Or choose from these amounts */}
              <div className="flex gap-2 mt-5">
                <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
                <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
                <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
