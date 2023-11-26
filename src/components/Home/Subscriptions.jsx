import { MdOutlineAttachMoney } from "react-icons/md";
import { TbUserPlus } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

const Subscriptions = () => {
  return (
    <div className="w-full py-[8rem] px-4 bg-platinumSilver" id="subscription">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Card1 */}
        <div className="w-full shadow-xl p-4 flex flex-col rounded-lg my-4 hover:scale-105 duration-300">
          <FaUser className="w-20 mx-auto mt-[-2rem] text-[#2BA84A] bg-platinumSilver scale-[2.75]" />
          <h2 className="text-4xl text-gray-800 font-bold py-8 text-center">
            Free
          </h2>
          <p className="text-center text-4xl font-bold">₹0</p>
          <div className="font-medium mt-8">
            <li className="py-4 border-b border-black border-opacity-30lack border-opacity-30 mx-8">
              Limited Movies
            </li>
            <li className="py-4 border-b border-black border-opacity-30lack border-opacity-30 mx-8">
              Limited Matches
            </li>
            <li className="py-4 border-b border-black border-opacity-30 mx-8 mb-8 line-through">
              Gender Specific Matches
            </li>
          </div>
          <button className="bg-darkGreen w-[200px] rounded-md text-[1rem] text-white font-medium  my-6 mx-auto px-6 py-3">
            Sign up for free
          </button>
        </div>

        {/* Card 2  */}

        <div className="w-full shadow-xl p-4 flex flex-col rounded-lg my-4 hover:scale-105 duration-300">
          <TbUserPlus className="w-20 mx-auto mt-[-2rem] text-[#2BA84A] bg-platinumSilver scale-[2.75]" />
          <h2 className="text-4xl text-gray-800 font-bold py-8 text-center">
            Pro
          </h2>
          <p className="text-center text-4xl font-bold">₹249</p>
          <div className="font-medium mt-8">
            <li className="py-4 border-b border-black border-opacity-30 mx-8">
              Unlimited Movies
            </li>
            <li className="py-4 border-b border-black border-opacity-30 mx-8">
              Unlimited Matches
            </li>
            <li className="py-4 border-b border-black border-opacity-30 mx-8 mb-8 line-through">
              Gender Specific Matches
            </li>
          </div>
          <button className="bg-darkGreen w-[200px] rounded-md text-[1rem] text-white font-medium my-6 mx-auto px-6 py-3">
            Start a Free Trial
          </button>
        </div>

        {/* Card 3 */}

        <div className="w-full shadow-xl p-4 flex flex-col rounded-lg my-4 hover:scale-105 duration-300">
          <MdOutlineAttachMoney className="w-20 mx-auto mt-[-2rem] text-[#2BA84A] bg-platinumSilver scale-[3]" />
          <h2 className="text-4xl text-gray-800 font-bold py-8 text-center">
            Super
          </h2>
          <p className="text-center text-4xl font-bold">₹599</p>
          <div className="font-medium mt-8">
            <li className="py-4 border-b border-black border-opacity-30 mx-8">
              Unlimited Movies
            </li>
            <li className="py-4 border-b border-black border-opacity-30 mx-8">
              Unlimited Matches
            </li>
            <li className="py-4 border-b border-black border-opacity-30 mx-8 mb-8">
              Gender Specific Matches
            </li>
          </div>
          <button className="bg-darkGreen w-[200px] rounded-md text-[1rem] text-white font-medium my-6 mx-auto px-6 py-3">
            Start a Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
