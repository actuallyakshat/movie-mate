import Template from "./Template";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div className="pt-20 text-white bg-login-bg bg-cover min-h-screen h-full">
      <Template
        title="Welcome Back"
        desc1="Find the best company for your favourite movies!"
        desc2="Your mates await you..."
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};
Login.propTypes = null;
export default Login;
