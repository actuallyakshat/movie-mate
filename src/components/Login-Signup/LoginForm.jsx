import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((perv) => ({
      ...perv,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label htmlFor="email" className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-red-500">*</sup>
        </p>
        <input
          className="rounded-[0.5rem] w-full p-[12px] text-black text-[1.25rem]"
          type="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email ID"
          name="email"
        />
      </label>

      <label htmlFor="password" className="w-full">
        <p className="text-[0.875rem] mb-[-0.7rem] text-richblack-5 leading-[1.375rem]">
          Password <sup className="text-red-500">*</sup>
        </p>
      </label>
      <input
        className="text-[1.25rem] rounded-[0.5rem] w-full p-[12px] text-black"
        type={showPassword ? "text" : "password"}
        required
        value={formData.password}
        onChange={changeHandler}
        placeholder="Enter Password"
        name="password"
      />
      <span
        className="relative right-3 cursor-pointer"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <AiOutlineEyeInvisible className="absolute top-[-3.5rem] left-[26rem] text-black" />
        ) : (
          <AiOutlineEye className="absolute top-[-3.5rem] left-[26rem] text-black" />
        )}
      </span>

      <Link to="#">
        <p className="text-xs mt-[-1rem] text-blue-100 max-w-max ml-auto">
          Forgot Pasword
        </p>
      </Link>
      <button className="bg-white rounded-[8px] font-medium text-black text-[1.25rem] px-[12px] py-[8px] mt-6">
        Sign In
      </button>
    </form>
  );
};
LoginForm.propTypes = null;
export default LoginForm;
