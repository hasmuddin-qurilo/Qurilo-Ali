import React from "react";
import ServiceTagLine from "../../components/Headings/ServiceTagLine";
import SevPara from "../../components/Paragraph/SevPara";
import TechIndCard from "../../components/Cards/TechIndCard";

export default function TechWeUse({ title, para, Data }) {
  return (
    <>
      <div className="bg-white mt-3 md:mt-5 mr-5 ">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full ">
          <div className="lg:w-1/2 lg:mb-8 ml-4 md:mr-48 lg:mr-0">
            <ServiceTagLine title={title} />
          </div>
          <div className="lg:w-1/2 lg:mt-10">
            <SevPara para={para} />
          </div>
        </div>
        <div>
          <TechIndCard Data={Data} />
        </div>
      </div>
    </>
  );
}
