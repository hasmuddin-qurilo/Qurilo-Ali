import React from "react";
// import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Nav() {
  return (
    <>
      {/* <div className="flex mt-20 lg:mt-14"> */}
      <div className="flex mb-10 md:mb-0">
        <div className="flex items-center">
          <div className="text-gray-400 text-xs md:text-base 2xl:text-lg">
            Home
          </div>
          <MdKeyboardArrowRight className="text-gray-200 h-4 w-4 md:h-6 md:w-6 " />
        </div>
        <div className="flex items-center text-xs md:text-base">
          <div className="text-gray-400">Services</div>
          <MdKeyboardArrowRight className="text-gray-200 h-4 w-4 md:h-6 md:w-6" />
        </div>
        <div className="flex items-center text-xs md:text-base">
          <div className="text-white">Cloud Computing Services</div>
        </div>
      </div>
    </>
  );
}
