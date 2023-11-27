import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="h-full bg-hero-curves bg-no-repeat bg-cover pt-[2rem]" id="hero">
      <div className="w-[65%] h-screen text-platinumSilver pt-[6rem] md:pt-[5em] mx-auto text-cener flex justify-between ">
        <div className="w-full h-fit pt-16 mx-auto md:m-0 md:text-left text-center">
          <h1 className="text-4xl md:text-7xl font-[700] font-Kanit  py-2 ">Movie Mate</h1>
          <div className="flex gap-2 mt-[-0.2rem] mb-8 text-[0.7em] md:text-[1em]">
            <p className="text-gray-500 font-bold">For all the </p>
            <Typed
              className="text-forestGreen font-bold "
              strings={[
                "Cinephiles",
                "Film Aficionados",
                "Cinema Buffs",
                "Movie Enthusiasts",
              ]}
              typeSpeed={100}
              backSpeed={60}
              loop
            />
          </div>

          <p className="text-[0.9em] font-thin">Got no one to go out for a movie with?</p>
          <p className="text-[0.9em] font-thin">
            Find a <span className="font-bold text-forestGreen">Movie Mate</span> today!
          </p>
          <button className="mt-8 py-2 px-4 rounded-md text-[1.1rem] font-bold border-[2px] border-platinumSilver text-platinumSilver hover:bg-platinumSilver hover:text-darkGreen transition-all duration-200">
            Get Started
          </button>
        </div>
        <div className="w-[24vw] h-fit overflow-hidden hidden md:block mr-12">
          <img
            src="/assets/homepage-img.png"
            alt="image"
            className="scale-[1.4]"
          />
        </div>
      </div>
    </div>
  );
};
Hero.propTypes = null;
export default Hero;
