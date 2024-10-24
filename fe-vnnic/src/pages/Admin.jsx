import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPeoplePulling } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";
import NavBarAdmin from "../components/dashboard/NavBarDashboard";
export default function Admin() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-screen h-screen flex">
        <div className=" ">
          <button
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <FontAwesomeIcon
              className="active_li flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-white"
              icon={faBars}
            />
          </button>

          <div
            id="default-sidebar"
            data-drawer-target="default-sidebar"
            className=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                <div>
                  {/* <Image
                    className="w-40 h-32"
                    src="/img/logo.png"
                    alt="Logo"
                    width={400}
                    height={400}
                  /> */}
                </div>
                <NavLink to={"home"} className="">
                  <a
                    className={`flex items-center p-2   hover:text-blue-500 text-gray-900 rounded-lg dark:text-blue-500 hover:bg-sky-100 dark:hover:bg-gray-700  group`}
                  >
                    <FontAwesomeIcon
                      className={` flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-white
                        `}
                      icon={faHouse}
                    />
                    <span className="ms-3 ">Dashboard</span>
                  </a>
                </NavLink>
                <NavLink to="news">
                  <a
                    className={`flex items-center  p-2   hover:text-blue-500 text-gray-900 rounded-lg dark:text-blue-500 hover:bg-sky-100 dark:hover:bg-gray-700  group`}
                  >
                    <FontAwesomeIcon
                      className={`  flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-white
                        `}
                      icon={faNewspaper}
                    />
                    <span className="flex-1 ms-3 whitespace-nowrap">News</span>
                  </a>
                </NavLink>
                <NavLink to="users">
                  <a
                    className={`flex items-center  p-2   hover:text-blue-500 text-gray-900 rounded-lg dark:text-blue-500 hover:bg-sky-100 dark:hover:bg-gray-700  group`}
                  >
                    <FontAwesomeIcon
                      className={` flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-white
                        `}
                      icon={faUser}
                    />
                    <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                  </a>
                </NavLink>
                <hr className="bg-slate-400 h-[1px]"></hr>
                <li>
                  <a
                    href="/"
                    className="flex items-center p-2  hover:text-blue-500 text-gray-900 rounded-lg dark:text-blue-500 hover:bg-sky-100 dark:hover:bg-gray-700  group"
                  >
                    <FontAwesomeIcon
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-white"
                      icon={faPeoplePulling}
                    />
                    <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <div className="h-24  bg-gray-50">
            <NavBarAdmin />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
