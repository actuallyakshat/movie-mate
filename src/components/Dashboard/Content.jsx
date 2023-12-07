import { FaSearch } from "react-icons/fa";
import MoviePreview from "./MoviePreview";
import RequestsAndMeets from "./RequestsAndMeets";
import { Link as RouteLink } from "react-router-dom";
const Content = () => {
  return (
    <div className="w-full min-h-screen h-full">
      <div className="flex justify-between w-full pl-12 pr-24 mt-6">
        <div className="bg-transparent flex gap-3 text-white border border-white rounded-lg p-2 shadow-md shadow-[rgba(0,0,0,0.2)]">
          <input
            type="text"
            placeholder="Search Here"
            required
            className="bg-transparent outline-none text-[1.1rem] px-2"
          />
          <button>
            <FaSearch className="text-xl w-fit pr-2 text-white" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <RouteLink to="/upgrade">
            <button className="text-white border border-white px-4 py-2 text-[1.1rem] font-bold hover:bg-white hover:text-black rounded-lg transition-all duration-300">
              Upgrade Now
            </button>
          </RouteLink>
          <RouteLink to="/chat">
            <button className="text-white border border-white px-4 py-2 text-[1.1rem] font-bold hover:bg-white hover:text-black rounded-lg transition-all duration-300">
              Chats
            </button>
          </RouteLink>
        </div>
      </div>
      <MoviePreview />
      <RequestsAndMeets />
    </div>
  );
};

export default Content;
