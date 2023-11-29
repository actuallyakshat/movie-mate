import moviedata from "./moviedata";
import MovieCard from "./MovieCard";
import { useState } from "react";
const BrowseMovies = () => {
  const [movies, setMovies] = useState(moviedata);
  return (
    <div className="pt-20 text-2xl text-white min-h-screen h-full">
      <div className="max-w-[90vw] w-full h-full mx-auto mt-10 flex justify-center p-8 gap-8 flex-wrap">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

BrowseMovies.propTypes = null;
export default BrowseMovies;
