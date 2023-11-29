import { FaGear } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className="bg-white min-h-screen h-auto w-[23vw]">
      <h1 className="text-[2rem] uppercase cursor-pointer text-center pt-6 font-Kanit font-[300] tracking-[0.2em]">
        Movie Mate
      </h1>
      <div className="flex flex-col mx-auto w-full items-center justify-center h-fit mt-4 py-6 border-b-[1px] border-gray-300">
        <img
          src="https://i.pinimg.com/564x/49/aa/80/49aa80b2e1fb69181770132b827b4f91.jpg"
          alt="#"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h3 className="font-[600] font-Kanit pt-2">Akshat Dubey</h3>
        <p className="text-gray-600 cursor-pointer text-[1rem] mt-[-0.4rem]">
          Edit Profile
        </p>
      </div>
      <div className="px-10 my-10">
        <ul className="flex flex-col gap-8 text-darkGreen font-[500] text-md">
          <div className="flex items-baseline gap-3">
            <FaHome />
            <li className="cursor-pointer hover:text-[#10212b]">Dashboard</li>
          </div>
          <div className="flex items-baseline gap-3">
            <FaBell />
            <li className="cursor-pointer hover:text-[#10212b]">
              Notifications
            </li>
          </div>
          <div className="flex items-baseline gap-3">
            <IoChatboxEllipses />
            <li className="cursor-pointer hover:text-[#10212b]">
              Chat Requests
            </li>
          </div>
          <div className="flex items-baseline gap-3">
            <FaUserFriends />
            <li className="cursor-pointer hover:text-[#10212b]">Matches</li>
          </div>
          <div className="flex items-baseline gap-3">
            <FaGear className="text-[1.3rem]" />
            <li className="cursor-pointer hover:text-[#10212b]">
              Edit Profile
            </li>
          </div>
        </ul>
      </div>

      <div className="h-fit w-[80%] flex flex-col mx-auto items-center mt-4 px-12 py-5 gap-4 border-black bg-gray-100 rounded-lg shadow-lg shadow-[rgba(0,0,0,0.4)]">
        <h3 className="font-[500] text-darkGreen text-[1.5rem]">
          Need Our Help?
        </h3>
        <button className="px-6 py-1 text-[1.1rem] font-[500] rounded-full border-2 bg-[#dba723] hover:bg-[#e6ac19] border-gray-700 transition-all duration-200">
          Contact Us
        </button>
      </div>

      <div className="my-8 flex justify-center">
        <div className="flex items-center bg-darkGreen rounded-md border text-platinumSilver hover:bg-[#10212b] hover:text-platinumSilver transition-all duration-200 px-5 py-2 gap-2">
          <RiLogoutBoxRLine />
          <button className="text-[1.1rem] font-[500]  ">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
