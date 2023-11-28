import Template from "./Login-Signup/Template";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <div className="pt-20 text-white bg-signup-bg bg-cover min-h-screen h-full">
      <Template
        title="Join others in the road of finding the perfect cinema companion"
        desc1="Now you never have to hit the theatres alone!"
        desc2="Sign up for free."
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};
Signup.propTypes = null;
export default Signup;
