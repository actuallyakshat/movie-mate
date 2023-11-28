import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouteLink, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const [showNavButtons, setShowNavButtons] = useState(true);
  const setIsLoggedIn = props.setIsLoggedIn;
  const [postLogin, setPostLogin] = useState(false);
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLoginSignupClick = () => {
    setShowNavButtons(false);
    setIsHome(false);
  };

  const handleMovieMateClick = () => {
    setShowNavButtons(true);
    setIsLoggedIn(true);
    setIsHome(true);
  };

  useEffect(() => {
    // Update isHome based on the current location
    setIsHome(location.pathname === "/");
    setShowNavButtons(location.pathname === "/");
    if (location.pathname === "/dashboard") {
      setPostLogin(true);
    }
    if (location.pathname === "/") {
      setPostLogin(false);
    }
  }, [location.pathname]);

  return (
    <div
      className={`flex justify-center items-center fixed w-full ${
        isHome ? "bg-darkGreen" : "bg-transparent"
      } z-[100]`}
    >
      <div className="text-platinumSilver font-[500] flex justify-between items-center h-[5rem] max-w-[1240px] w-full px-4">
        <h1
          className="text-2xl uppercase cursor-pointer font-Kanit font-[300] tracking-[0.2em]"
          onClick={handleMovieMateClick}
        >
          <RouteLink to="/">Movie Mate</RouteLink>
        </h1>
        <ul className="hidden md:flex text-[1.1rem] items-center ">
          {showNavButtons && (
            <>
              <li className="p-4 hover:underline cursor-pointer">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="p-4 hover:underline cursor-pointer">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="p-4 hover:underline cursor-pointer">
                <Link
                  to="subscription"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Pricing
                </Link>
              </li>
            </>
          )}
          <li className="p-4">
            <RouteLink to="/login">
              <button
                onClick={handleLoginSignupClick}
                className="px-4 py-1 rounded-md border border-platinumSilver text-platinumSilver hover:bg-platinumSilver hover:text-darkGreen transition-all duration-200"
              >
                Login
              </button>
            </RouteLink>
          </li>
          {!postLogin && (
            <li>
              <RouteLink to="/signup">
                <button
                  onClick={handleLoginSignupClick}
                  className="px-4 py-1 rounded-md border border-platinumSilver text-platinumSilver hover:bg-platinumSilver hover:text-darkGreen transition-all duration-200"
                >
                  Sign Up{" "}
                </button>
              </RouteLink>
            </li>
          )}
          {postLogin && (
            <li className="p-4 hover:underline cursor-pointer">
              <RouteLink to="/chat">Chat</RouteLink>
            </li>
          )}
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={28} /> : <FiMenu />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] border-r h-full bg-darkGreen border-r-gray-400 p-4 ease-in-out duration-500 md:hidden z-[100]"
              : "fixed left-[-100%] top-0 w-[60%] border-r h-full bg-gray-200 border-r-gray-400 p-4 ease-in-out duration-500 z-[100]"
          }
        >
          <h1
            className={
              "font-bold text-2xl text-platinumSilver uppercase ml-2 mt-2"
            }
            onClick={handleMovieMateClick}
          >
            Movie Mate
          </h1>
          <ul className="m-4 uppercase">
            {showNavButtons && (
              <>
                <li className="p-4 hover:underline cursor-pointer">Home</li>
                <li className="p-4 hover:underline cursor-pointer">About</li>
                <li className="p-4 hover:underline cursor-pointer">Pricing</li>
              </>
            )}
            <li className="p-4">Login</li>
            <li className="p-4">Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = null;
export default Navbar;
