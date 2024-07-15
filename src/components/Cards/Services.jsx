import React from "react";

const Services = ({ data, type }) => {
  return (
    <div className="flex flex-wrap gap-8  md:mt-4 mx-0 mb-20">
      {data.map((card) => (
        <div key={card.id} className="flex-1 min-w-[300px] max-w-[400px]">
          <div className="relative mx-5 p-6 py-10 lg:p-6 lg:w-80 lg:h-72 rounded-xl bg-white hover:border-blue border-[0.1px] shadow-sm hover:shadow-blue">
            <div className="flex items-center gap-5">
              {type ? (
                <img src={card.image} alt="image" className="h-10 w-10" />
              ) : null}
              <h3 className=" text-xl text-black font-medium font-sans">
                {card.heading}
              </h3>
            </div>
            <p className="border-[2px] border-blue mt-4 mb-2"></p>     

            <p className=" leading-7 font-sans text-gray-500 mb-5 dark:text-gray-400">
              {card.description}
            </p>
            <div className="absolute bottom-2 md:bottom-5 right-10 cursor-pointer flex items-center text-blue underline justify-end  font-normal rounded-md bg-white transition-all duration-500">
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-4 w-4 ml-3"
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
