import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Title from "./template/Title";

const SearchSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [sortParam, setSortParam] = useState("");
  const [sort, setSort] = useState({
    name: "Mới nhất",
    value: "lastest",
  });
  const sorts = [
    {
      name: "Mới nhất",
      value: "lastest",
    },
  ];
  const [sortResult, setSortResult] = useState({
    name: "Sắp xếp",
    value: "",
  });
  const sortsResult = [
    {
      name: "Mới nhất",
      value: "lasted",
    },
    {
      name: "Xem nhiều nhất",
      value: "views",
    },
  ];
  const categories = [
    {
      name: "Tất cả",
      slug: "all",
    },
    {
      name: "Tin tức",
      slug: "tin-tuc",
    },
    {
      name: "Sự kiện",
      slug: "su-kien",
    },
    {
      name: "Hoạt động đoàn",
      slug: "hoat-dong-doan",
    },
  ];
  const [activeTab, setActiveTab] = useState(categories[0].slug);
  const handleTabClick = (tabSlug) => {
    setActiveTab(tabSlug);
  };
  const handleSort = (value) => () => {
    setSort(value);
  };
  const handleSortResult = (value) => {
    searchParams.set("sort", value);
    setSortParam(searchParams.toString());
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  const newSort = searchParams.toString();
  const [departmentList, setDepartmentList] = useState([]);
  const [specializesList, setSpecializesList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [isFilterShow, setIsFilterShow] = useState(false);
  const [isDropFilter, setIsDropFilter] = useState(false);

  const handleSearch = (event) => {
    localStorage.setItem("search", event.target.value);
  };

  const [department, setDepartment] = useState(null);
  const [isDropSort, setIsDropSort] = useState(false);
  const [isDropSortResult, setIsDropSortResult] = useState(false);
  const [specialized, setSpecialized] = useState(null);
  const [subject, setSubject] = useState(null);
  const [year, setYear] = useState(null);

  return (
    <div className="flex justify-between gap-5 px-4 mt-4">
      <div className={`flex md:flex-col flex-col justify-center h-fit gap-2`}>
        <div
          className={`md:w-full flex xl:min-w-[280px] md:min-w-[280px]    items-center flex-col gap-5 pr-4 `}
        >
          <div className="flex items-center gap-2 bg-gray-50 border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ">
            <form className="xl:w-96 md:w-96 w-56 mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 xl:p-4 md:p-4 xl:ps-10 md:ps-10 ps-10 text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-0"
                  placeholder="Từ khóa"
                  required
                  onChange={handleSearch}
                />
              </div>
            </form>
            <div className="w-0.5 h-8 bg-gray-300"></div>
            <div className="relative inline-block z-50 md:w-32 xl:w-32 w-28 ">
              <button
                onClick={() => {
                  setIsDropSort(!isDropSort);
                }}
                className="inline-flex gap-2 justify-center items-center w-full px-4 py-2 xl:text-sm md:text-sm text-xs font-medium text-gray-700 focus:outline-none focus:ring-0"
              >
                {sort.name}
                <svg
                  className={` h-5 w-5 transition-transform duration-200 ease-in-out ${
                    isDropSort ? "rotate-180" : ""
                  } `}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.659l3.71-3.45a.75.75 0 111.02 1.1l-4 3.75a.75.75 0 01-1.02 0l-4-3.75a.75.75 0 01-.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <ul
                className={`${
                  isDropSort ? "absolute" : "hidden"
                } z-10 text-xs font-medium text-gray-500 -right-2 top-14 w-36 rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                {sorts.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 hover:cursor-pointer"
                    onClick={() => {
                      setSort(item);
                      setIsDropSort(!isDropSort);
                    }}
                  >
                    <div
                      className={`flex  justify-between px-4 py-2  hover:bg-gray-100 ${
                        item.name == sort.name ? "bg-gray-100 rounded-lg " : ""
                      }`}
                    >
                      <p>{item.name}</p>
                      <svg
                        className={`w-4 h-4 ${
                          item.name == sort.name ? "block " : "hidden"
                        }`}
                        fill="currentColor"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="px-8">
          <Title title={"Tìm kiếm"} />
        </div>
        <div className="flex flex-row justify-between px-8 gap-2 ">
          {/* Recomment */}
          <div className="flex gap-5 border-b  text-center font-semibold">
            {categories.map((item) => (
              <button
                key={item.slug}
                onClick={() => handleTabClick(item.slug)}
                className={`text-lg pb-1  w-fit ${
                  activeTab === item.slug
                    ? "text-black font-bold border-b-2 border-gray-700"
                    : "text-gray-500"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* Sort result */}
          <div className="xl:max-w-1/4 xl:min-w-1/4 bg-white">
            <div className="relative inline-block  w-fit min-w-32 ">
              <button
                onClick={() => {
                  setIsDropSortResult(!isDropSortResult);
                }}
                className="inline-flex gap-2 border shadow-md rounded-lg border-gray-300 justify-center items-center w-full  px-4 py-2  text-sm font-medium text-gray-700 focus:outline-none focus:ring-0"
              >
                {sortResult.name}
                <svg
                  className={` h-5 w-5 transition-transform duration-200 ease-in-out ${
                    isDropSortResult ? "rotate-180" : ""
                  } `}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.659l3.71-3.45a.75.75 0 111.02 1.1l-4 3.75a.75.75 0 01-1.02 0l-4-3.75a.75.75 0 01-.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <ul
                className={`${
                  isDropSortResult ? "absolute" : "hidden"
                } z-10 text-xs font-medium text-gray-500 -right-2 top-14 w-36 rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                {sortsResult.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 hover:cursor-pointer"
                    onClick={() => {
                      setSortResult(item);
                      setIsDropSortResult(!isDropSortResult);
                      handleSortResult(item.value);
                    }}
                  >
                    <div
                      className={`flex  justify-between px-4 py-2  hover:bg-gray-100 ${
                        item.name == sortResult.name
                          ? "bg-gray-100 rounded-lg "
                          : ""
                      }`}
                    >
                      <p>{item.name}</p>
                      <svg
                        className={`w-4 h-4 ${
                          item.name == sortResult.name ? "block " : "hidden"
                        }`}
                        fill="currentColor"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-screen rounded-lg mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
