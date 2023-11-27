const Analytics = () => {
  return (
    <div className="w-full py-16 px-4 bg-about-bg-1" id="about">
      <div className="max-w-[1240px] mx-auto flex flex-col">
        <div className="flex flex-col justify-center items-center md:items-start gap-6 md:gap-4 bg-platinumSilver rounded-lg shadow-md p-8">
          <p className="text-darkGreen font-bold text-4xl mb-8 text-center mx-auto underline ">
            About Movie Mate
          </p>
          <div className="text-center md:text-left">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#18564C] ">
              What is Movie Mate?
            </h1>
            <p className="py-2 text-[0.9em]">
              Movie Mate is a unique platform designed to enhance your
              movie-watching experience. It connects individuals seeking
              companions for movie nights, offering curated film suggestions,
              tailored matching options, and a community of like-minded users.
              Whether you are looking for someone to share a cinematic adventure
              or exploring new releases, Movie Mate is your go-to destination
              for fostering meaningful connections through the magic of movies.
            </p>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#18564C] ">
              How does Movie Mate match users for movie nights?
            </h1>
            <p className="py-2 text-[0.9em]">
              Movie Mate employs a sophisticated algorithm that considers your
              movie preferences, genres, and viewing history. Our goal is to
              connect you with compatible movie buddies who share similar
              tastes, ensuring an enjoyable and tailored cinematic experience
              every time you hit play.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#18564C] ">
              How does Movie Mate ensure a safe and enjoyable movie companion
              experience?
            </h1>
            <p className="py-2 text-[0.9em]">
              At Movie Mate, user safety and enjoyment are paramount. We
              implement stringent verification processes, provide user reviews,
              and offer a secure messaging system. Our commitment is to create a
              trusted space where members can connect, share, and enjoy movies
              together in a fun and secure environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
