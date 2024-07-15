import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import doneicon from "../../assets/pages/itService/icons/check.png";

export default function TravelList({ data }) {
  const [openIndex, setOpenIndex] = useState(0); // Initially open the first item

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="mt-20 mr-5 ml-5 mb-5">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-5 mb-5">
          <div
            onClick={() => toggleDetail(index)}
            className="flex justify-between cursor-pointer"
          >
            <h1 className="text-xl text-black font-medium">{item.title}</h1>
            <SlArrowDown
              size={20}
              className={`text-blue transform ${
                openIndex === index ? "rotate-180" : "rotate-0"
              } transition duration-300 ease-in-out`}
            />
          </div>
          {openIndex === index && (
            <div className="mt-5">
              <p className="text-base font-normal text-gray-400">
                {item.detail}
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-5">
                {item.oneline.map((value, index) => (
                  <div key={index} className="flex gap-5 items-center">
                    <img src={doneicon} alt="" className="h-4 w-4" />
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}
