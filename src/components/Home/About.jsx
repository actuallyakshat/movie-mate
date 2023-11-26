const Analytics = () => {
  return (
    <div className="w-full bg-platinumSilver py-16 px-4" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-[#18564C] font-bold ">About Movie Mate</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            What is Movie Mate?
          </h1>
          <p className="py-2 text-[0.9em]">
            Movie Mate is a unique platform designed to enhance your
            movie-watching experience. It connects individuals seeking
            companions for movie nights, offering curated film suggestions,
            tailored matching options, and a community of like-minded users.
            Whether you are looking for someone to share a cinematic adventure
            or exploring new releases, Movie Mate is your go-to destination for
            fostering meaningful connections through the magic of movies.
          </p>
          <button className="bg-black text-platinumSilver w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-opacity-80 duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
