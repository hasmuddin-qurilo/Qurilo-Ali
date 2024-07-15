import React from "react";
import ServiceTagLine from "../../components/Headings/ServiceTagLine";
import SevPara from "../../components/Paragraph/SevPara";
import TechIndCard from "../../components/Cards/TechIndCard";

export default function TechWeUse({ TravelTechnologeisData }) {
  const { heading, desc, technologies } = TravelTechnologeisData;

  return (
    <>
      <div className="bg-white mt-3 md:mt-5 mr-5 ">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full ">
          <div className="lg:w-1/2 lg:mb-8 ml-4 md:mr-48 lg:mr-0">
            <div className="flex justify-center mt-20">
              <h1 className="text-2xl md:text-4xl text-black font-bold text-start md:text-3xl md:font-medium">
                {heading}
              </h1>
            </div>{" "}
          </div>
          <div className="lg:w-1/2 lg:mt-10">
            <div className="text-gray-500 text-base p-8">
              <p className="text-start">{desc}</p>
            </div>
          </div>
        </div>
        <div>
          <TechIndCard data={technologies} />
        </div>
      </div>
    </>
  );
}
