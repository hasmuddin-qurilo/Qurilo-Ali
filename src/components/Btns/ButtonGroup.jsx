import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
// import { ImQuotesLeft } from "react-icons/im";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group absolute right-6 top-6">
      <button
        className="bg-blue-500 text-white px-4 py-2 font-semibold mx-2"
        onClick={() => previous()}
      >
        <FaArrowLeft />
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 font-semibold mx-2"
        onClick={() => next()}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ButtonGroup;
