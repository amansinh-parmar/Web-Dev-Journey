import React from "react";

export default function Home() {
  return (
    <>
      <div className="container my-5 size-80 text-4xl text-center mx-auto bg-red-400">
        <img
          className="mx-auto"
          width={700}
          height={700}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUt02XTXd-hnhoix7CWodiKFUt8frIKC0Gw&s"
          alt=""
        />
        THIS IS HOME PAGE :)
      </div>
    </>
  );
}

export const metadata = {
  title: "Facebook Home Page",
  description:
    "This is facebook home page and we can connect with the world using Facebook",
};
