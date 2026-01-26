import React from "react";

export const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="w-full bg-purple-700 text-white py-4 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          
          {/* Responsive text + wrapping */}
          <span className="font-semibold text-sm sm:text-base flex flex-wrap justify-center items-center gap-2 text-center">
            Created with
            <img
              className="h-5 w-5 sm:h-6 sm:w-6"
              src="/icons/heart.png"
              alt="heart"
            />
            by <span className="font-bold">CodeWithAmax</span>
          </span>

        </div>
      </footer>
    </>
  );
};
