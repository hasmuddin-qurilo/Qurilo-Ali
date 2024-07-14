import React from "react";
import Services from "../../components/Cards/Services";
import ServiceTagLine from "../../components/Headings/ServiceTagLine";
import SevPara from "../../components/Paragraph/SevPara";

export default function ITServices({ data, title, para }) {
  return (
    <>
      <div className="bg-white lg:ml-10 lg:mr-10">
        <div className="ml-8">
          <ServiceTagLine title={title} />
        </div>
        <SevPara para={para} />
        <Services data={data} />
      </div>
    </>
  );
}
