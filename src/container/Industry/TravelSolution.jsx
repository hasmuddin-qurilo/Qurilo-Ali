import React from "react";
import ServiceTagLine from "../../components/Headings/ServiceTagLine";
import SevPara from "../../components/Paragraph/SevPara";
import travelplan1 from "../../assets/pages/industry/images/travelplan1.jpg";
import TravelList from "../../components/List/TravelList";

export default function TravelSolution({ title, para, Data }) {
  return (
    <>
      <div className="bg-white flex flex-col lg:flex-row w-full gap-5 mb-20">
        <div className="lg:w-1/2 flex flex-col">
          {/* heading and para */}
          <div className="ml-8">
            <ServiceTagLine title={title} />
          </div>
          <SevPara para={para} />

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
            <TravelList Data={Data} />
          </div>
        </div>
      </div>
    </>
  );
}
