import React from "react";
import google from "../../assets/pages/itService/images/google.png";

export default function Awrad() {
  return (
    <div className="mt-5">
      <div>
        <h2 className="text-lg text-start font-bold">
          Awards & Certification -
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 mt-5">
        <img src={google} alt="" className="md:h-32 md:w-40" />
        <img src={google} alt="" className="md:h-32 md:w-40" />
        <img src={google} alt="" className="md:h-32 md:w-40" />
        <img src={google} alt="" className="md:h-32 md:w-40" />
        <img src={google} alt="" className="md:h-32 md:w-40" />
        <img src={google} alt="" className="md:h-32 md:w-40" />
        <img src={google} alt="" className="md:h-32 md:w-40" />
        <img src={google} alt="" className="md:h-32 md:w-40" />
      </div>
    </div>
  );
}
