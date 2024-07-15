import React from "react";
// import { LuCheckCircle } from "react-icons/lu";
import { BsCheck2Circle } from "react-icons/bs";

export default function TravelDevelopment({ TravelServicesData }) {
  const { heading, desc, carddata } = TravelServicesData;
  return (
    <>
      <div className="bg-white mt-3 md:mt-5 mr-5">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full ">
          <div className="lg:w-1/2 lg:mb-8 ml-8">
            <div className="flex justify-center mt-20 ml-8">
              <h1 className="text-2xl md:text-4xl text-black font-bold text-start md:text-3xl md:font-medium">
                {heading}
              </h1>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-10">
            <div className="text-gray-500 text-base p-8">
              <p className="text-start">{desc}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          {carddata.map((item, index) => (
            <div key={item.id} className="flex flex-col gap-2 mt-5">
              <div className="flex mb-2 items-center">
                <div>
                  <BsCheck2Circle size={40} className="text-blue ml-3 " />
                </div>
                <h1 className="text-3xl text-blue ml-3">{item.title}</h1>
              </div>
              <div>
                <p className="text-base leading-6 tracking-wide	ml-16">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
