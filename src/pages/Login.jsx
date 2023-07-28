import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/LOGO.svg";
import TextContainer from "../components/TextContainer";
import { useState } from "react";
import { userData } from "../data/tableData";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const togglePassword = () => {
    setPasswordType((state) => (state == "password" ? "text" : "password"));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = userData.find((u) => u.data?.email == loginData.email);
    console.log(user?.data?.password);
    console.log(loginData);
    if (!user) {
      setErrorMessage("User does not exist, Sign Up");
    } else if (user?.data?.password != loginData.password) {
      setErrorMessage("Invalid login details");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="h-screen">
      <div className="px-10 md:px-40 py-20 md:py-28 flex justify-between">
        <img className="" src={Logo} alt="logo" />
        <div className="flex flex-col justify-end md:flex-row items-end md:items-center gap-2">
          <p className="order-1 ">New to Xpress Rewards?</p>
          <Link
            to="/signup"
            className="border-2 border-primary text-primary px-5 py-2 rounded-md md:order-1"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="flex mt-24 justify-center ">
        <div className="w-11/12 md:w-8/12 lg:w-4/12">
          <form
            onSubmit={onSubmit}
            className="bg-white shadow-md rounded p-10 md:p-20 mb-4"
          >
            <div>
              <h3 onClick={togglePassword} className="primary-text mb-2">
                Welcome Back!
              </h3>
              <p className="text-gray-700 text-md">
                Sign in to your Xpress reward partner’s dashboard
              </p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            {errorMessage && (
              <div
                className="p-4 mb-4 text-md text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {errorMessage}
              </div>
            )}
            <div className=" mb-12">
              <TextContainer
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <TextContainer
                label="Password"
                name="password"
                type={passwordType}
                placeholder="Enter Password"
                onChange={handleChange}
              >
                <div
                  onClick={togglePassword}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye cursor-pointer"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />{" "}
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />{" "}
                  </svg>
                </div>
              </TextContainer>
              <p className="align-baseline text-gray-700  text-md mt-4">
                Forgot Password?{" "}
                <a
                  className="text-md text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Reset it
                </a>
              </p>
            </div>

            {/* <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p> */}
            <div className="w-12/12">
              <button
                className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
