import BrowseMovies from "../BrowseMovies/BrowseMovies";
import { Link as RouteLink } from "react-router-dom";
const MoviePreview = () => {
  return (
    <div className="h-fit w-[85%] py-10 flex flex-col rounded-xl mx-auto bg-white scale-[0.8] relative">
      <div className="max-h-[30rem] h-fit backdrop-blur-20 overflow-hidden">
        <BrowseMovies />
      </div>
      <RouteLink to="/BrowseMovies">
        <div className="absolute hover:text-gray-700 cursor-pointer rounded-b-xl bottom-0 min-w-full min-h-[6rem] bg-transparent backdrop-blur-md flex items-center justify-center">
          <div className="text-[1.5rem] font-bold rounded-lg transition-all duration-300">
            Browse Movies
          </div>
        </div>
      </RouteLink>
    </div>
  );
};

export default MoviePreview;
