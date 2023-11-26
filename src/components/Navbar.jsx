import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-center items-center fixed w-full bg-darkGreen z-[100]">
      <div className="text-platinumSilver font-[500] flex justify-between items-center h-[5rem] max-w-[1240px] w-full px-4">
        <h1 className="font-bold text-2xl uppercase cursor-pointer">
          Movie Mate
        </h1>
        <ul className="hidden md:flex text-[1.1rem] items-center ">
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
          <li className="mx-2">
            <button className="px-4 py-1 rounded-md border border-platinumSilver text-platinumSilver hover:bg-platinumSilver hover:text-darkGreen transition-all duration-200">
              Login
            </button>
          </li>
          <li>
            <button className="px-4 py-1 rounded-md border border-platinumSilver text-platinumSilver hover:bg-platinumSilver hover:text-darkGreen transition-all duration-200">
              Sign Up
            </button>
          </li>
          {/* <li className="p-4">Browse Movies</li>
        <li className="p-4">Upcoming meets</li>
        <li className="p-4">Chat</li> */}
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
          >
            Movie Mate
          </h1>
          <ul className="m-4 uppercase">
            <li className="p-4 hover:underline cursor-pointer">Home</li>
            <li className="p-4 hover:underline cursor-pointer">About</li>
            <li className="p-4 hover:underline cursor-pointer">Pricing</li>
            <li className="p-4">Login</li>
            <li className="p-4">Sign Up</li>
            {/* <li className="p-4">Browse Movies</li>
          <li className="p-4">Upcoming meets</li>
          <li className="p-4">Chat</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = null;
export default Navbar;
