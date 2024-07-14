import React from "react";
import Home from "../container/Industry/Home";
import { taglineind } from "../Data/IT/TagLineData";
import ServiceTagLine from "../components/Headings/ServiceTagLine";
import { taglinetravelsol } from "../Data/IT/TagLineData";
import { para3 } from "../Data/IT/ParaData";
import TravelSolution from "../container/Industry/TravelSolution";
import { Data } from "../Data/IT/TraveData";
import { Secound } from "../Data/IT/BtnData1";
import TravelFuture from "../container/Industry/TravelFuture";
import TravelDevelopment from "../container/Industry/TravelDevelopment";
import { taglinetrvdev } from "../Data/IT/TagLineData";
import { para4 } from "../Data/IT/ParaData";
import { Data2, Data3 } from "../Data/IT/TraveData";
import TechWeUse from "../container/Industry/TechWeUse";
import { taglinetrvtech } from "../Data/IT/TagLineData";
import { para5 } from "../Data/IT/ParaData";
import TravelBus from "../container/Industry/TravelBus";
import TravelFAQ from "../container/Industry/TravelFAQ";
import TravelTestimonial from "../container/Industry/TravelTestimonial.jsx";
import { Testimonials } from "../Data/IT/TestimaonialsData.js";

export default function Industry() {
  return (
    <>
      <div>
        <Home tagline={taglineind} />
        <TravelSolution title={taglinetravelsol} para={para3} Data={Data} />
        <TravelFuture data={Secound} />
        <TravelDevelopment title={taglinetrvdev} para={para4} Data={Data2} />
        <TechWeUse title={taglinetrvtech} para={para5} Data={Data3} />
        <TravelBus data={Secound} />
        <TravelFAQ />
        <TravelTestimonial Testimaonials={Testimonials} />
      </div>
    </>
  );
}
