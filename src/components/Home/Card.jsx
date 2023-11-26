import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;

  return (
    <div className="flex flex-col md:relative">
      <div className="mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25] object-cover"
          src={review.image}
          alt="reviewimage"
        />
        <div className="w-[140px] h-[140px]rounded-full"></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize tracking-wider">
          {review.name}
        </p>
        <p className="text-darkGreen uppercase text-sm">{review.userInfo}</p>
      </div>
      <div className="text-darkGreen mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-darkGreen text-opacity-80 text-[0.85em]">{review.text}</div>

      <div className="text-darkGreen mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};
Card.propTypes = null;
export default Card;
