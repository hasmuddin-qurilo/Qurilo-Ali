import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSwiper } from "swiper/react";
import styles from "./Slider.module.css";
const SliderPrev = ({ setBackgroundImage, setActiveIndex, cards }) => {
  const swiper = useSwiper();

  const [isBegin, setIsBegin] = useState(true);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegin(swiper.isBeginning);
      setActiveIndex(swiper.activeIndex);
      setBackgroundImage(cards[swiper.activeIndex].imageUrl);
    });
  }, [swiper]); // Include swiper in the dependencies array.

  return (
    <div className={styles.prevBtn}>
      {!isBegin && (
        <FaArrowLeftLong
          size={40}
          className="text-white"
          onClick={() => swiper.slidePrev()}
        />
      )}
    </div>
  );
};

export default SliderPrev;
