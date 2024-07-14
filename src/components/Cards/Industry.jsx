import React from "react";
import { GoDotFill } from "react-icons/go";

export default function Industry({ Data }) {
  return (
    <>
      <div className="flex gap-10 lg:gap-20 flex-wrap mt-10 ml-8 mb-5 lg:mb-10">
        {Data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 mb-5 lg:mb-10 w-80 lg:w-72 xl:w-80"
          >
            <p className="border-[2px] border-blue"></p>
            <div className="flex flex-col gap-2 lg:gap-4">
              <h1 className="text-lg text-black font-medium">{item.heading}</h1>
              <p className="text-base text-gray-500">{item.subheading}</p>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              {item.oneLine.map((data, lineIndex) => (
                <div key={lineIndex} className="flex gap-2 items-center">
                  <GoDotFill size={20} className="text-blue" />
                  <p className="text-gray-500 text-sm">{data}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
