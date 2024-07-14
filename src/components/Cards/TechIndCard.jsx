import React from "react";
import { SlArrowRight } from "react-icons/sl";

export default function TechIndCard({ Data }) {
  return (
    <>
      <div className="flex items-center xl:justify-center  gap-10 lg:gap-20 flex-wrap mt-10 ml-8 mb-5 lg:mb-10">
        {Data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 mb-5 lg:mb-10 w-80 lg:w-72 xl:w-80"
          >
            <p className="border-[2px] border-blue"></p>
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="flex gap-5 items-center">
                <img src={item.icon} alt="icon" className="h-10 w-10" />
                <h1 className="text-lg text-black font-medium hover:underline hover:cursor-pointer mb-5">
                  {item.heading}
                </h1>
              </div>
              <p className="text-base text-gray-500">{item.subheading}</p>
            </div>

            <div className="flex justify-end">
              <SlArrowRight
                size={20}
                className="text-blue hover:text-blue-200 transform hover:translate-x-2 transition ease-in duration-100 cursor-pointer"
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
