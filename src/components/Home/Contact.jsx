import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");

  const notify = () => {
    toast.success("Email sent successfully!");
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="w-full py-16 bg-platinumSilver mt-16 px-4">
      <div className="mx-auto max-w-[1600px] grid xl:grid-cols-3 text-center md:text-left">
        <div className="xl:col-span-2">
          <h1 className="md:text-4xl text-[1.6rem] font-bold py-2">
            Have any suggestions for us?
          </h1>
          <p>Feel free to leave your email, and we will reach out to you.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col gap-4 xl:flex-row items-center justify-center w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="text-black rounded-md p-3 w-[18.75em] text-[1rem] flex"
              value={email}
              onChange={handleInputChange}
            />
            <button
              onClick={notify}
              className={`rounded-md bg-black text-white px-6 py-3 w-fit text-[1rem] 2xl:text-[1.3rem] ${
                email.trim() === ""
                  ? "opacity-50 cursor-not-allowed disabled"
                  : ""
              }`}
            >
              Share Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
