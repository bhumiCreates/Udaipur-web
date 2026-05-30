import React, { useRef, useState } from "react";

const Navbar = () => {
  const navGreenRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 flex w-full items-start justify-between">
      <div className="border m-3 h-[8vh] min-w-40 w-[12vw] text-[4vh] text-black font-[font2] text-center p-2 rounded-br-3xl rounded-tl-3xl shadow-xl ">
        Udaipur 
      </div>

      <div
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
        }}
        className="relative rounded-br-xl rounded-tl-xl m-3 h-[7vh]  w-[4vw] min-w-10 overflow-hidden border border-black flex items-center justify-center"
      >
        <div
          ref={navGreenRef}
          className="absolute bottom-0 left-0 h-0 w-full bg-yellow-300 transition-all duration-500"
        />

        <svg
          onClick={() => setOpen(!open)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className={`relative z-20 h-7 w-12 cursor-pointer transition-all duration-500 ${
            open ? "rotate-90 scale-110" : ""
          }`}
        >
          <path d="M 20 9 L 20 11 L 45 11 L 45 9 L 5 9 z M 12 24 L 12 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
