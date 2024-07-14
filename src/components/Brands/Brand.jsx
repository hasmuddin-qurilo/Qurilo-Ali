import React from "react";
import micro from "../../assets/pages/itService/images/microsoft.png";
import aws from "../../assets/pages/itService/images/aws.png";
import clutch from "../../assets/pages/itService/images/clutch.png";
import iso from "../../assets/pages/itService/images/google.png";

export default function Brand() {
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-8 md:mt-10">
        <div>
          <img src={micro} alt="micro" />
        </div>
        <div>
          <img src={aws} alt="aws" />
        </div>
        <div>
          <img src={clutch} alt="clutch" />
        </div>
        <div>
          <img src={iso} alt="iso" />
        </div>
      </div>
    </>
  );
}
