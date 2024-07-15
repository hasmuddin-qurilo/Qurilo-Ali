import React from "react";
import travelplan1 from "../../assets/pages/industry/images/travelplan1.jpg";
import TravelList from "../../components/List/TravelList";

export default function TravelSolution({ TravelSolutionData }) {
  const { heading, desc, list } = TravelSolutionData;

  return (
    <>
      <div className="bg-white flex flex-col lg:flex-row w-full gap-5 mb-20">
        <div className="lg:w-1/2 flex flex-col">
         
          <div className="ml-8">
            <div className="flex justify-center mt-20">
              <h1 className="text-2xl md:text-4xl text-black font-bold text-start md:text-3xl md:font-medium">
                {heading}
              </h1>
            </div>
          </div>
          <div className="text-gray-500 text-base p-8">
            <p className="text-start">{desc}</p>
          </div>

          <div className="h-auto">
            <img
              src={travelplan1}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div>
            <TravelList data={list} />
          </div>
        </div>
      </div>
    </>
  );
}
