import React from "react";
import Home from "../container/ITService.jsx/Home.jsx";
import Services from "../container/ITService.jsx/ITServices.jsx";
import MaxRoi from "../container/ITService.jsx/MaxRoi.jsx";
import Solution from "../container/ITService.jsx/Solution.jsx";
import TechWeWork from "../container/ITService.jsx/TechWeWork.jsx";
import Growth from "../container/ITService.jsx/Growth.jsx";
import { midBannerData1 } from "../Data/IT/GrowthData";
import { first, Secound, Third } from "../Data/IT/BtnData1";
import { taglineit } from "../Data/IT/TagLineData.js";
import { cardData } from "../Data/IT/CardData";
import { TechCard } from "../Data/IT/TechData";
import { cloud, Tech, faq } from "../Data/IT/HeadingData";
import { para1, para2 } from "../Data/IT/ParaData";
import FAQ from "../container/ITService.jsx/FAQ.jsx";
import Industries from "../container/ITService.jsx/Industries.jsx";
import Testimaonial from "../container/ITService.jsx/Testimaonial.jsx";
import { Testimonials } from "../Data/IT/TestimaonialsData.js";
export default function ItService() {
  return (
    <>
      <div>
        <Home data={first} tagline={taglineit} />
        <Services data={cardData} title={cloud} para={para1} />
        <MaxRoi data={Secound} />
        <Solution />
        <TechWeWork data={TechCard} title={Tech} para={para2} type="true" />
        <Growth midBannerData={midBannerData1} type="Ali" data={Third} />
        <Industries />
        <FAQ title={faq} />
        <Testimaonial Testimaonials={Testimonials} />
      </div>
    </>
  );
}
