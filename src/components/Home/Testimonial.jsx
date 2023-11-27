import Card from "./Card";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="bg-about-bg bg-cover pt-32 pb-16 ">
      <div className="w-[85vw] md:w-[700px] mx-auto bg-platinumSilver flex flex-col items-center justify-center p-10 transition-all duration-700 rounded-md shadow-md hover:shadow-xl">
        <Card review={reviews[index]} />
        <div className="flex text-lg mt-9 gap-6 text-darkGreen mx-auto">
          <button
            onClick={leftShiftHandler}
            className="cursor-pointer font-thin"
          >
            <FaChevronLeft />
          </button>
          <button onClick={rightShiftHandler} className="cursor-pointer">
            <FaChevronRight />
          </button>
        </div>

        <div className="mt-6">
          <button
            onClick={surpriseHandler}
            className="bg-darkGreen hover:bg-opacity-80 hover:text-white hover:border-black hover:transition-border hover:duration-0 cursor-pointer rounded-md px-10 py-4 font-bold text-white text-lg"
          >
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
};
Testimonial.propTypes = null;

export default Testimonial;
