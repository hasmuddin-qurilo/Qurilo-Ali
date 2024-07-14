import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./Slider.module.css";

const SliderNext = () => {
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className={styles.nextBtn}>
      {!isEnd && (
        <FaArrowRightLong
          size={40}
          className="text-white"
          onClick={() => swiper.slideNext()}
        />
      )}
    </div>
  );
};

export default SliderNext;
