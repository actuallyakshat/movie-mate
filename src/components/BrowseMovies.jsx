import moviedata from "../moviedata";
import MovieCard from "./MovieCard";
import { useState } from "react";
const BrowseMovies = () => {
  const [movies, setMovies] = useState(moviedata);
  return (
    <div className="pt-20 text-2xl text-white min-h-screen h-full">
      <div className="max-w-[90vw] w-fit h-[80vh] mx-auto mt-10 flex p-8 gap-8">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

BrowseMovies.propTypes = null;
export default BrowseMovies;
