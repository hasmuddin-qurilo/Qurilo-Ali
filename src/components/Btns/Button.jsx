import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import "../../App.css";

const Button = ({ data }) => {
  return (
    <button className="flex items-center mt-5 xl:mt-16  relative overflow-hidden bg-white border border-white h-12 md:h-14 px-4 md:px-8 rounded-full text-white hover:border-none cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-gradient-to-l before:from-blue before:to-blue before:transition-transform before:duration-500 before:scale-x-0 before:origin-right hover:before:scale-x-100">
      {/* <div className="flex justify-between items-center relative z-10 gap-5 w-full"> */}
      <div className="flex justify-between items-center relative z-10 gap-5 w-full">
        <span className="text-black text-base md:text-lg">{data}</span>
        <IoArrowForwardCircle
          size={50}
          className=" mybutton mr-[-20px] md:h-16 md:w-16 md:mr-[-34px] text-blue hover:bg-blue "
        />
      </div>
    </button>
  );
};

export default Button;
