import { BsBookmarkStar } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

const MovieCard = ({ name, IMDB, image, text }) => {
  return (
    <div className="bg-[#0c1b24] bg-opacity-50 w-[30ch] min-h-[600px] rounded-lg border border-[#1d3340] shadow-inner shadow-[rgba(56,55,55,0.4)] p-4 flex flex-col items-start">
      <div className="flex items-center justify-center mx-auto">
        <img src={image} alt="movieposter" className="max-h-[300px]" />
      </div>
      <div className="flex-grow flex flex-col justify-between mt-2">
        <div>
          <h1 className="font-bold mt-4 text-3xl">{name}</h1>
          <div className="mb-8">
            <p className="font-bold text-gray-400 text-[1.2rem]">
              Rating: {IMDB}
            </p>
            <p className="mt-1 text-[1rem] leading-6">{text}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button>
            <BsBookmarkStar />
          </button>
          <button className="px-4 py-1 rounded-md border border-platinumSilver text-platinumSilver hover:bg-platinumSilver hover:text-darkGreen text-[1.2rem] font-Kanit font-semibold transition-all duration-200">
            <div className="flex items-center gap-3">
              <p>Find Mates </p>
              <FaUserFriends />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = null;
export default MovieCard;
