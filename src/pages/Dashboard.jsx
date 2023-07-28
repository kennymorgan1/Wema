import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import More from "../assets/images/IconMore.svg";
import Sidebar from "../components/SIdebar";
import Nav from "../components/Nav";
import { tableData } from "../data/tableData";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Sidebar />

      <div className="sm:ml-96">
        <Nav />
        <div className="p-8  rounded-lg">
          <div className="flex justify-between mb-4">
            <div className="flex items-center justify-center h-24">
              <select className="appearance-none w-52 border-none text-gray-700 leading-tight focus:border-primary">
                <option value="all">All</option>
                <option value="all">Active Verifiers</option>
                <option value="all">Pending Verifiers</option>
                <option value="all">Deactivited Verifiers</option>
              </select>
            </div>
            <div className="flex gap-3 items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name/Phone No/Location"
                />
              </div>
              <div className="w-12/12">
                <button
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  <span className=" font-bold text-[20px]">+</span> &nbsp; Add
                  New Verifier
                </button>
              </div>
            </div>
          </div>
          <div className=" overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
                <tr className="border-b">
                  <th scope="col" className="px-6 py-3">
                    <input type="checkbox" />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[13px] font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    First Name
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[13px] font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Last Name
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[13px] font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[13px] font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Partner
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[13px] font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Location
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[13px] font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Status
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 text-[13px] font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4 text-[13px]">{data.firstName}</td>
                    <td className="px-6 py-4 text-[13px]">{data.lastName}</td>
                    <td className="px-6 py-4 text-[13px]">
                      {data.phoneNumber}
                    </td>
                    <td className="px-6 py-4 text-[13px]">{data.partner}</td>
                    <td className="px-6 py-4 text-[13px]">{data.location}</td>
                    <td className="px-6 py-4 text-[13px]">
                      {data.status == "active" && (
                        <span className="bg-green-100 text-green-800 text-[12px] font-medium mr-2 px-2.5 py-0.5 rounded">
                          Active
                        </span>
                      )}
                      {data.status == "awaitingApproval" && (
                        <span className="bg-yellow-100 text-yellow-800 text-[12px] font-medium mr-2 px-2.5 py-0.5 rounded">
                          Awaiting Approval
                        </span>
                      )}
                      {data.status == "deActivated" && (
                        <span className="bg-red-100 text-red-800 text-[12px] font-medium mr-2 px-2.5 py-0.5 rounded">
                          Deactivated
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 cursor-pointer">
                      <img src={More} alt="more" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-white flex justify-between items-center p-5">
              <div className="flex gap-3 items-center">
                <p>Rows per Page</p>
                <select className="appearance-none border w-24 border-gray-300 rounded-lg text-gray-700 leading-tight focus:border-primary focus:shadow-outline">
                  <option value="10">10</option>
                </select>
              </div>
              <div className="flex gap-2 mr-5">
                <p>Previous</p>
                <p className="text-primary">1</p>
                <p>2</p>
                <p className="text-primary">Next</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
