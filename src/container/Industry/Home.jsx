import React from "react";
import bgimage from "../../assets/pages/industry/images/travel-banner.png";
import Nav from "../../components/Navbar/Nav.jsx";
import TagLine from "../../components/Headings/TagLine.jsx";
import Para from "../../components/Paragraph/Para.jsx";

export default function Home({ heroSectionData }) {
  const { heading, mobileBg, desktopBg } = heroSectionData;

  return (
    <>
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${desktopBg})` }}
      >
        <div className="absolute inset-0 bg-bggradient opacity-90 flex justify-center">
          {/* <div className="ml-5 mr-28 lg:ml-10 flex flex-col justify-center"> */}
          <div className=" ml-10 mr-10 md:mr-2 xl:mr-72 flex flex-col justify-center">
            {" "}
            {/* industiry */}
            {/* <div className="lg:mr-20 ml-5 lg:ml-10 flex flex-col justify-center"> */}
            <Nav />
            {/* <TagLine  /> */}
            <div className="text-3xl font-bold text-white mt-5 md:text-5xl md:mt-16">
              <h1>{heading}</h1>
            </div>
            <Para />
          </div>
        </div>
      </div>
    </>
  );
}
