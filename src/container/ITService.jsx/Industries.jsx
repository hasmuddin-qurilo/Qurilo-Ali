import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import industries1 from "../../assets/pages/itService/images/industries1.jpg";
import industries2 from "../../assets/pages/itService/images/industries2.jpg";
import industries3 from "../../assets/pages/itService/images/industries3.jpg";
import industries4 from "../../assets/pages/itService/images/industries4.jpg";
import industries5 from "../../assets/pages/itService/images/industries5.png";
import industries6 from "../../assets/pages/itService/images/industries6.png";

import SliderPrev from "../../components/Btns/SliderPrev";
import SliderNext from "../../components/Btns/SliderNext";
import styles from "./Industries.module.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const Industries = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTab = useMediaQuery({ maxWidth: 1024 });
  const [activeIndex, setActiveIndex] = useState(0);

  const [backgroundImage, setBackgroundImage] = useState(industries3);

  const handleMouseEnter = (imageUrl) => {
    setBackgroundImage(imageUrl);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(cards[activeIndex].imageUrl);
  };

  const cards = [
    {
      id: 0,
      title: "Retail & E-commerce",
      content:
        "Scalable B2B and B2C solutions to take your business to the next level.",
      imageUrl: industries3,
    },
    {
      id: 1,
      title: "Non-Profit & Education",
      content:
        "Empowering non-profits with innovative tech solutions for greater impact.",
      imageUrl: industries4,
    },
    {
      id: 2,
      title: "Manufacturing , Automotive & Chemicals",
      content: "Empowering manufacturers with scalable and agile solutions.",
      imageUrl: industries5,
    },
    {
      id: 3,
      title: "Pharma & Healthcare",
      content:
        "Enhancing patient care with advanced pharma and healthcare solutions",
      imageUrl: industries1,
    },

    {
      id: 4,
      title: "Travel , logistics & Hospitality",
      content: "Revolutionizing travel with cutting-edge digital solutions.",
      imageUrl: industries2,
    },
    {
      id: 5,
      title: "FinTech , Banking & Financial Services",
      content:
        "Innovative solutions for modern banking and financial services.",
      imageUrl: industries6,
    },
  ];

  return (
    <div>
      <div
        className="w-full relative h-[35rem]   hover:opacity-1 "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="absolute text-[76px]  md:text-[98px] text-white opacity-50 font-bold top-11 left-6  ">
          Industries
        </h2>
        <Swiper
          initialSlide={0}
          modules={[Navigation]}
          allowTouchMove
          spaceBetween={0}
          slidesPerView={`${isMobile ? 1 : isTab ? 2 : 4}`}
        >
          <SliderPrev
            setBackgroundImage={setBackgroundImage}
            setActiveIndex={setActiveIndex}
            cards={cards}
          />
          <SliderNext />

          {cards.map((card) => (
            <SwiperSlide className=" w-1/4  !mr-0" key={card.id}>
              <div
                className={`${
                  styles.card
                }  group py-4 h-[35rem] cursor-pointer ${
                  isMobile && "border-none"
                } border-r-[1px] border-white `}
                onMouseEnter={() =>  handleMouseEnter(card.imageUrl)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <div
                  className={`flex h-full items-end ${styles.cardContentContainer}`}
                >
                  <div className="flex flex-col px-4  card-content">
                    <div
                      className={`text-2xl hover:text-yellow-400   font-semibold text-white  ${
                        activeIndex === card.id
                          ? `${styles.activeCardTitle}`
                          : `${styles.cardTitle}`
                      } `}
                    >
                      {card.title}
                    </div>
                    <div
                      className={`group-hover:border-b-4    ${
                        activeIndex === card.id
                          ? `border-b-4 ${styles.activeTitleBorder}`
                          : `${styles.titleBorder}`
                      }  border-blue my-2 w-[20%]`}
                    ></div>

                    <div
                      className={` mt-2   group-hover:visible ${
                        activeIndex === card.id
                          ? `h-[10rem]  opacity-1 ${styles.activeCardDescription}  `
                          : `invisible ${styles.cardDescription}  h-[4rem] opacity-0 group-hover:h-[10rem]`
                      } `}
                    >
                      <div className="text-[18px] text-white font-medium ">
                        {card.content}
                      </div>
                      <div className="text-blue flex items-center gap-x-2 text-lg font-medium underline-offset-2 underline card-button">
                        Learn More{" "}
                        <IoMdArrowRoundForward className="text-blue" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Industries;
