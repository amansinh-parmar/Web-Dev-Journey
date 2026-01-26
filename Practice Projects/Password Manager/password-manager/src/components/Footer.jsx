import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full bg-purple-700 text-white flex justify-center items-center h-14">
        <span className="font-bold flex justify-center items-center">
          Created with
          <img className="h-7 w-7 mx-2" src="/icons/heart.png" alt="heart" />
          by CodeWithAmax
        </span>
      </div>
    </>
  );
};
