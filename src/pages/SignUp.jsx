import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/LOGO.svg";
import Pending from "../assets/images/IconPending.svg";
import TextContainer from "../components/TextContainer";
import { userData } from "../data/tableData";

const SignUp = () => {
  const [step, setStep] = useState(0);
  const [signupData, setSignupData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const nextStep = (data) => {
    setSignupData({ ...signupData, data });
    setStep(step + 1);
  };

  const completeSignUp = (data) => {
    setSignupData({ ...signupData, data });
    debugger;
    if (data.password === data.confirmPassword) {
      userData.push({ ...signupData, data });
      setOpenModal(true);
    } else {
      setErrorMessage("Password Mismatch");
    }
  };

  const currentStep = [
    <StepOne nextStep={nextStep} />,
    <StepTwo completeSignUp={completeSignUp} />,
  ];

  return (
    <div className="">
      <div className="px-10 md:px-40 py-20 md:py-28 flex justify-between">
        <img className="" src={Logo} alt="logo" />
        <div className="flex flex-col justify-end md:flex-row items-end md:items-center gap-2">
          <p className="order-1 ">Already have an account?</p>
          <Link
            to="/"
            className="border-2 border-primary text-primary px-5 py-2 rounded-md md:order-1"
          >
            Sign In
          </Link>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="w-11/12 md:w-8/12 lg:w-4/12">
          <div className="bg-white shadow-md rounded p-10 md:p-20 mb-4">
            <div>
              <h3 className="primary-text mb-2">Welcome to Xpress Rewards</h3>
              <p className="text-gray-700 text-md">
                Complete the form below to get started
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
            {currentStep[step]}
          </div>
        </div>
      </div>

      <Modal
        show={openModal}
        size="2xl"
        popup
        position="center"
        onClose={() => setOpenModal(!openModal)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
            <div className="flex justify-center">
              <img src={Pending} alt="pending" />
            </div>

            <p className="mb-10 font-bold text-[#FF9900] text-4xl">Pending</p>

            <h3 className="mb-10 font-semibold text-lg text-gray-500 dark:text-gray-400">
              Your registration is awaiting approval from our partnership team
            </h3>
            <div className="w-12/12">
              <button
                onClick={() => {
                  setOpenModal(!openModal);
                  navigate("/dashboard");
                }}
                className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Done
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignUp;

const StepOne = ({ nextStep }) => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    nextStep(data);
  };
  return (
    <form onSubmit={onSubmit}>
      <h5 className="primary-text mb-2">Business Information</h5>
      <div className=" mb-6">
        <TextContainer
          label="Business name"
          type="text"
          name="businessName"
          onChange={handleChange}
          required
          placeholder="Enter business name"
        />
      </div>

      <div className="mb-6">
        <TextContainer
          label="Business Email Address"
          type="email"
          name="businessEmail"
          onChange={handleChange}
          required
          placeholder="Enter Business email Address"
        />
      </div>

      <div className="mb-6">
        <TextContainer
          label="Business Phone Number"
          type="text"
          name="businessPhoneNumber"
          onChange={handleChange}
          required
          placeholder="Enter Business Phone Number"
        />
      </div>

      <div className="mb-6">
        <TextContainer
          label="Business Category"
          type="select"
          name="businessCategory"
          onChange={handleChange}
          required
          options={[
            { value: "", label: "Select Business Category" },
            { value: "ltd", label: "Limited" },
            { value: "plc", label: "PLC" },
          ]}
        />
      </div>

      <div className="mb-6">
        <TextContainer
          label="Account No"
          type="text"
          name="accountNo"
          onChange={handleChange}
          required
          placeholder="Enter Account No"
        />
      </div>

      <div className="mb-12">
        <label
          className="block text-gray-800 font-semibold text-[14px] mb-2"
          htmlFor="password"
        >
          Image (Logo)
        </label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="shadow appearance-none border border-gray-300 text-lg rounded-lg w-full p-4 text-gray-700 leading-tight focus:border-primary focus:shadow-outline"
          >
            <div className="flex flex-col items-center justify-center py-10 pb-6">
              <svg
                style={{ color: "#039BF0" }}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-cloud-download"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                  fill="#039BF0"
                ></path>
                <path
                  d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                  fill="#039BF0"
                ></path>
              </svg>
              <p className="mb-2 text-md text-gray-500 dark:text-gray-400">
                Drag here or click the button below to upload
              </p>
              <button
                className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-24  rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Choose File
              </button>
              <p className="text-md text-gray-500 mt-6 dark:text-gray-400">
                Maximum upload size: 10MB (.jpg)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>

      <div className="w-12/12 flex gap-5 items-center">
        <button
          className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-24  rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Next
        </button>
        <p className="order-1 ">Step 1 of 2</p>
      </div>
    </form>
  );
};

const StepTwo = ({ completeSignUp }) => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    completeSignUp(data);
  };
  return (
    <form onSubmit={onSubmit}>
      <h5 className="primary-text mb-2">Business Address</h5>

      <div className="flex gap-6 mb-6">
        <div className="w-3/12">
          <TextContainer
            label="Number"
            type="text"
            name="homeNumber"
            onChange={handleChange}
            required
            placeholder="Enter Home number"
          />
        </div>
        <div className="w-9/12">
          <TextContainer
            label="Street"
            type="text"
            name="street"
            onChange={handleChange}
            required
            placeholder="Enter Street"
          />
        </div>
      </div>

      <div className="flex gap-6 mb-16">
        <div className="w-6/12">
          <TextContainer
            label="City"
            type="text"
            name="city"
            onChange={handleChange}
            required
            placeholder="Enter Home number"
          />
        </div>
        <div className="w-6/12">
          <TextContainer
            label="State"
            type="select"
            name="state"
            onChange={handleChange}
            required
            options={[
              { value: "", label: "Select State" },
              { value: "abia", label: "Abia" },
              { value: "adamawa", label: "Adamawa" },
            ]}
          />
        </div>
      </div>

      <h5 className="primary-text mb-2">Contact Person Information</h5>

      <div className="mb-6">
        <TextContainer
          label="Contact Name"
          type="text"
          name="name"
          onChange={handleChange}
          required
          placeholder="Enter Contact Name"
        />
      </div>

      <div className="mb-6">
        <TextContainer
          label="Contact Phone Number"
          type="text"
          name="phoneNumber"
          onChange={handleChange}
          required
          placeholder="Enter Contact Phone Number"
        />
      </div>

      <div className="mb-16">
        <TextContainer
          label="Contact Email Address"
          type="email"
          name="email"
          onChange={handleChange}
          required
          placeholder="Enter Contact Email Address"
        />
      </div>

      <h5 className="primary-text mb-2">Password</h5>

      <div className="mb-6">
        <TextContainer
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          required
          placeholder="Enter Password"
        />
      </div>

      <div className="mb-16">
        <TextContainer
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          required
          placeholder="Enter Confirm Password"
        />
      </div>

      <div className="w-12/12 flex gap-5 items-center">
        <button
          className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-24  rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
        <p className="order-1 ">Step 2 of 2</p>
      </div>
    </form>
  );
};
