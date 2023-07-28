import { Link } from "react-router-dom";
import Logo from "../assets/images/LOGO.svg";
import IconTransactions from "../assets/images/IconTransactions.svg";
import IconVerifiers from "../assets/images/IconVerifiers.svg";
import Vector from "../assets/images/Vector.svg";

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-10 py-16 overflow-y-auto bg-white dark:bg-gray-800">
        <Link to="#" className="flex items-center px-10 pl-2.5 mb-5">
          <img className="" src={Logo} alt="logo" />
        </Link>
        <ul className="space-y-2 font-medium mt-28">
          <li>
            <Link
              href="#"
              className="flex items-center px-10 py-5 mb-10 text-gray-900 rounded-lg hover:bg-[#F2FAFF] hover:border-l-4 border-primary active:border-l-4 group"
            >
              <img src={IconVerifiers} alt="dashboard" />
              <span className="ml-3">Verifies</span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center px-10 py-5 mb-10 text-gray-900 rounded-lg hover:bg-[#F2FAFF] hover:border-l-4 border-primary group"
            >
              <img src={Vector} alt="dashboard" />
              <span className="ml-3">Deals</span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center px-10 py-5 mb-10 text-gray-900 rounded-lg hover:bg-[#F2FAFF] hover:border-l-4 border-primary group"
            >
              <img src={IconTransactions} alt="dashboard" />
              <span className="ml-3">Transactions</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
