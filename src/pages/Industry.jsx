import React from "react";
import Home from "../container/Industry/Home";
import {
  TravelSolutionData,
  TravelServicesData,
  TravelTechnologiesData,
  heroSectionData,
} from "../Data/Trave-logistics-hospitality.jsx";
import TravelSolution from "../container/Industry/TravelSolution";
import TravelFuture from "../container/Industry/TravelFuture";
import TravelDevelopment from "../container/Industry/TravelDevelopment";
import TechWeUse from "../container/Industry/TechWeUse";
import TravelBus from "../container/Industry/TravelBus";
import TravelFAQ from "../container/Industry/TravelFAQ";
import TravelTestimonial from "../container/Industry/TravelTestimonial.jsx";

export default function Industry() {
  return (
    <>
      <div>
        <Home heroSectionData={heroSectionData} />
        <TravelSolution TravelSolutionData={TravelSolutionData} />
        {/* <TravelFuture data={Secound} tagline={taglinetrvfut} para={para7} /> */}
        <TravelDevelopment TravelServicesData={TravelServicesData} />
        <TechWeUse TravelTechnologeisData={TravelTechnologiesData} />
        {/* <TravelBus data={Secound} para={para6} tagline={taglinetrvbus} /> */}
        {/* <TravelFAQ faqData={faqData} /> */}
        {/* <TravelTestimonial Testimaonials={Testimonials} /> */}
      </div>
    </>
  );
}
