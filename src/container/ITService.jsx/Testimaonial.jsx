import { useState } from "react";
import Button from "../../components/Btns/Button";
import ButtonGroup from "../../components/Btns/ButtonGroup";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import { ImQuotesLeft } from "react-icons/im";

const Testimaonial = ({ Testimaonials }) => {
  function onChange(newValue) {
    console.log(newValue);
    setRating(newValue);
  }
  const [rating, setRating] = useState(0);

  return (
    <div>
      <div className="SimilarHomes w-full md:pl-10 pt-10 lg:pt-0 lg:pl-20 lg:flex justify-between  bg-gradient-to-r from-black to-gray-800">
        <div className="flex flex-col justify-center items-center md:items-start gap-2  md:w-[600px] p-4 md:p-auto text-white">
          <div className="flex justify-start items-center ml-4  ">
            <div className="flex justify-start text-[#EC9E3A] mr-4 -ml-4 md:text-2xl ">
              <FaStar className="mr-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <div className="overflow-x-hidden w-4">
                <FaStar className="mx-1  " />
              </div>
            </div>
            <span className="text-base text-[#0B6FB9]">(3000+ Reviews)</span>
          </div>
          {/* <Heading heading={"What Our Customers Are Saying"} /> */}
          <h1 className="text-4xl capitalize font-[400] text-center lg:text-start">
            What our customers are saying
          </h1>
          <div className="font-[500] text-base my-4 text-center lg:text-start">
            We keep our clients at the top of our priority list. And that’s how
            we’ve managed to build a happy customer base.
          </div>
          <Button data="See All Reviews" />
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          autoPlaySpeed={3000}
          centerMode={false}
          className="min-h-[550px]  w-4/5 mx-auto "
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1400,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 768,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1400,
                min: 768,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {Testimaonials.map((testimaonial, index) => (
            <div
              className="m-4 p-5 flex flex-col justify-between bg-white h-[390px] shadow-lg"
              key={index}
            >
              <div>
                <ImQuotesLeft className="text-5xl text-[#DFEDF3]" />
                <div className="text-3xl font-bold mb-2">
                  {testimaonial.message}
                </div>
                <div className="text-lg font-medium text-zinc-700">
                  {testimaonial.description}
                </div>
              </div>
              <div>
                <div className="flex items-center  ">
                  <div>
                    <img
                      src={testimaonial.image}
                      className="w-[70px] h-[70px] "
                      alt=""
                    />
                  </div>
                  <div className="mx-4">
                    <div className="flex text-[#EC9E3A]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div>{testimaonial.name}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Testimaonial;
