import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [gender, setGender] = useState(null);

  function changeHandler(event) {
    setFormData((perv) => ({
      ...perv,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!gender) {
      toast.error("Please select a gender.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
    const accountData = {
      ...formData,
      gender,
    };
    console.log(accountData);
  }

  return (
    <div>
      <div className="flex bg-darkGreen p-1 gap-x-1 my-6 rounded-full max-w-max text-[1.25rem] box-border">
        <button
          className={`${
            gender === "male"
              ? "bg-white text-black"
              : "bg-transparent text-white"
          } py-2 px-5 rounded-full transition-all duration-200 box-border`}
          onClick={() => setGender("male")}
        >
          Male
        </button>
        <button
          className={`${
            gender === "female"
              ? "bg-white text-black"
              : "bg-transparent text-white"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setGender("female")}
        >
          Female
        </button>
      </div>

      <form onSubmit={submitHandler} className="text-[1.25rem]">
        {/* first name and lastname */}
        <div className="flex gap-x-4 mt-[20px]">
          <label htmlFor="firstname" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              required
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>

          <label htmlFor="lastname" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              required
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>
        {/* email address */}
        <div className="mt-[20px]">
          <label htmlFor="email" className="w-full mt-[20px]">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email <sup className="text-red-500">*</sup>
            </p>
            <input
              type="email"
              required
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={formData.email}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>

        {/* create and confirm password */}
        <div className="w-full flex gap-x-4 mt-[20px]">
          <label htmlFor="password" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-red-500 p-1">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="text-black rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>

          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="relative cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible className="absolute top-[2.73rem] right-[1.80rem] text-black" />
            ) : (
              <AiOutlineEye className="absolute top-[2.73rem] right-[1.80rem] text-black" />
            )}
          </span>

          <label htmlFor="confirmPassword" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-red-500 p-1">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="rounded-[0.5rem] text-richblack-5 w-full p-[12px] text-black"
            />
          </label>
        </div>
        <button className=" w-full bg-platinumSilver text-[1.2rem] rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};
SignupForm.propTypes = null;
export default SignupForm;
