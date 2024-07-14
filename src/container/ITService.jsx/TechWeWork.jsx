import React from "react";
import Services from "../../components/Cards/Services";
import ServiceTagLine from "../../components/Headings/ServiceTagLine";
import SevPara from "../../components/Paragraph/SevPara";

export default function TechWeWork({ data, title, para, type }) {
  return (
    <>
      <div className="bg-white lg:ml-10 lg:mr-10">
        <ServiceTagLine title={title} />
        <SevPara para={para} />
        <Services data={data} type={type} />
      </div>
    </>
  );
}
