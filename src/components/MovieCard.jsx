const MovieCard = ({ name, IMDB, image, text }) => {
  return (
    <div className="w-[25ch] rounded-lg border shadow-md shadow-[rgba(39,37,37,0.7)] p-4 bg-black flex flex-col items-start">
      <div className="flex items-center justify-center mx-auto">
        <img src={image} alt="movieposter" className="max-h-[300px]"/>
      </div>
      <div className="flex-1">
        <h1 className="font-bold mt-4 text-3xl">{name}</h1>
        <div>
          <p className="font-bold text-gray-400 text-[1.2rem]">Rating: {IMDB}</p>
          <p className="mt-1 text-[1rem] leading-6">{text}</p>
        </div>
        {/* <div className="flex gap-4 mt-8">
          <button>wishlist</button>
          <button>find mates</button>
        </div> */}
      </div>
    </div>
  );
};

MovieCard.propTypes = null;
export default MovieCard;
