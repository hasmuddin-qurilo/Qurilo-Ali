// import React from "react";
// import bgimage from "../../assets/pages/itService/images/itbg.jpg";
// import Nav from "../../components/Navbar/Nav.jsx";
// // import Brand from "../components/Brands/Brand.jsx";
// import TagLine from "../../components/Headings/TagLine.jsx";
// import Para from "../../components/Paragraph/Para.jsx";
// import Button from "../../components/Btns/Button.jsx";
// import Form from "../../components/ContactForm/Form.jsx";

// export default function Home({ data, tagline }) {
//   return (
//     <>
//       <div
//         className="h-screen bg-cover bg-center relative"
//         style={{ backgroundImage: `url(${bgimage})` }}
//       >
//         <div className="absolute inset-0 bg-bggradient opacity-90 lg:flex">
//           {/* <div className="ml-5 lg:w-1/2 lg:ml-10 "> */}
//           <div className="ml-5 lg:w-1/2 lg:ml-10 flex flex-col justify-center">
//             {/* <div className="lg:mr-20 ml-5 lg:ml-10"> */}
//             <Nav />
//             {/* <Brand /> */}
//             <TagLine tagline={tagline} />
//             <Para />
//             <div>
//               <Button data={data} />
//             </div>
//           </div>
//           {/* </div> */}
//           {/* <div className="ml-5 lg:w-1/2  xl:ml-10 "> */}
//           <div className="ml-5 lg:w-1/2  xl:ml-10 flex flex-col justify-center">
//             {/* <div className="lg:mr-20 ml-5 xl:ml-10"> */}
//             <Form />
//             {/* </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import bgimage from "../../assets/pages/itService/images/itbg.jpg";
import Nav from "../../components/Navbar/Nav.jsx";
// import Brand from "../components/Brands/Brand.jsx";
import TagLine from "../../components/Headings/TagLine.jsx";
import Para from "../../components/Paragraph/Para.jsx";
import Button from "../../components/Btns/Button.jsx";
import Form from "../../components/ContactForm/Form.jsx";

export default function Home({ data, tagline }) {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="absolute inset-0 bg-bggradient opacity-90 flex md:flex-col lg:flex-row justify-center">
          <div className="ml-5 lg:w-1/2 lg:ml-10 flex flex-col justify-center md:mb-10 lg:mb-0">
            <Nav />
            <TagLine tagline={tagline} />
            <Para />
            <div>
              <Button data={data} />
            </div>
          </div>
          <div className="ml-5 lg:w-1/2  xl:ml-10 flex flex-col justify-center">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
