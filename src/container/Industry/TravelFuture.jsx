import React from "react";
import Button from "../../components/Btns/Button";
import Roiimg from "../../assets/pages/itService/images/solimg.webp";

export default function TravelFuture({ data }) {
  return (
    <>
      <div className="bg-black w-full flex flex-col items-center lg:flex-row lg:justify-between lg:p-5">
        <div className="flex flex-col justify-center items-center py-16  lg:items-start lg:mb-16 lg:ml-10">
          <h1 className="text-white text-2xl font-bold text-center md:text-3xl">
            Maximize ROI with Our Cloud Expertise
          </h1>
          <p className="text-base text-gray-400 mt-5 d:text-lg md:font-medium">
            Custom solutions for your unique business needs.
          </p>
          <Button data={data} />
        </div>
        <div className="hidden md:block py-5 mb-10 lg:mr-20">
          <img src={Roiimg} alt="" />
        </div>
      </div>
    </>
  );
}
