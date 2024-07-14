import React from "react";

export const btnvalue = "Enquire Now";

export default function Form() {
  return (
    <>
      <div className="hidden md:block bg-white  bg-opacity-10 backdrop-blur-lg mt-10 mr-5 xl:mr-10 xl:mr-0 xl:py-8  xl:mt-8 text-white border border-white rounded-lg py-8 lg:px-30 xl:px-10 shadow-lg">
        <div className="text-white flex flex-col  items-center mb-8 lg:mb-4 xl:mb-8">
          <h1 className=" text-3xl font-bold lg:text-xl xl:text-3xl">
            Book Free Consultation
          </h1>
          <h4 className="text-sm mt-3">
            Guaranteed response within 8 business hours.
          </h4>
        </div>

        <form className="flex flex-col flex-wrap gap-4 lg:gap-4 xl:gap-8">
          <div className="flex flex-wrap gap-16 lg:gap-5 xl:gap-5 justify-center">
            <input
              type="text"
              placeholder="Full Name*"
              className="border border-white text-white bg-transparent py-3 px-8 xl:px-1  xl:py-2 rounded-lg text-sm pl-2"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="border border-white text-white bg-transparent py-3 px-8 xl:px-1  xl:py-2 rounded-lg text-sm pl-2"
            />
          </div>
          <div className="flex flex-wrap gap-16 bg-transparent lg:gap-5 xl:gap-5 justify-center">
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-white text-white bg-transparent py-3 px-8 xl:px-1  xl:py-2 rounded-lg text-sm pl-2"
            />
            <input
              type="text"
              placeholder="Country*"
              className="border border-white text-white bg-transparent py-3 px-8 xl:px-1  xl:py-2 rounded-lg text-sm pl-2"
            />
          </div>
          <div className="flex justify-center lg:ml-5 lg:mr-5">
            <textarea
              rows="4"
              cols="50"
              placeholder="Project Brief*"
              className="border border-white text-white bg-transparent py-2 lg:py-2 rounded-lg text-start pl-2"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <div className="bg-opacity-20 backdrop-blur-md border border-white text-base py-3 px-10 rounded-full hover:bg-blue hover:text-white hover:border-none transition ease-in duration-100">
              Submit
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
