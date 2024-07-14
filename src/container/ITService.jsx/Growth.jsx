import React from "react";
import animateImg1 from "../../assets/pages/itService/images/0000001.png";
import animateImg2 from "../../assets/pages/itService/images/0000002.png";
import animateImg3 from "../../assets/pages/itService/images/0000003.png";
import Button from "../../components/Btns/Button";

const Growth = ({ midBannerData, type, data }) => {
  return (
    <section>
      <div className="w-full py-20 px-6 bg-black text-white grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
        <div className="flex items-center gap-5 flex-col lg:items-start lg:px-10">
          <h1 className="text-4xl text-center lg:text-start">
            {midBannerData.heading}
          </h1>
          <p className="text-lg text-gray-300 text-center lg:text-start mb-5">
            {midBannerData.des}
          </p>
          <Button data={data} />
        </div>
        {type === "img" ? null : (
          <div className="flex items-center flex-wrap md:flex-nowrap gap-x-2 justify-center ">
            <div className="relative">
              <img className="animate-spin-slow " src={animateImg1} />{" "}
              <div className="absolute left-[1.5rem] top-[3rem]">
                <p className="text-center">2500+</p>{" "}
                <p className="text-center w-[99%] font-medium text-gray-200 text-sm">
                  satisfied customers
                </p>
              </div>
            </div>
            <div className="relative">
              <img className="animate-spin-slow " src={animateImg2} />
              <div className="absolute left-[1.5rem] top-[3rem]">
                <p className="text-center">2500+</p>
                <p className="text-center w-[99%] font-medium text-gray-200 text-sm">
                  satisfied customers
                </p>
              </div>
            </div>
            <div className="relative">
              <img className="animate-spin-slow " src={animateImg3} />{" "}
              <div className="absolute left-[1.5rem] top-[3rem]">
                <p className="text-center">2500+</p>{" "}
                <p className="text-center w-[99%] font-medium text-gray-200 text-sm">
                  satisfied customers
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Growth;
