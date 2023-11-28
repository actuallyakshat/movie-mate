import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-white font-bold text-[2.5rem] mb-4 leading-[3rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-[-10px]">
          <span className="font-bold mb-2">{desc1}</span> <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center justify-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-white"></div>
          <p className="font-medium text-white text-base leading-[1.375rem]">
            OR
          </p>
          <div className="h-[1px] bg-white w-full"></div>
        </div>

        <button className="w-full text-richblack-100 flex rounded-[8px] items-center justify-center border boreder-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p className="text-base">Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px] hidden md:block"></div>
    </div>
  );
};
Template.propTypes = null;
export default Template;
