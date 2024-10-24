import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import facebookIcon from "../../assert/facebook-icon.png";
import zaloIcon from "../../assert/zalo_icon.png";
import { useNavigate } from "react-router-dom";

import "./nav.css";
export default function Navbar({ toggleDarkMode, darkMode }) {
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const navigateToFacebook = () => {
    navigate("https://www.facebook.com/profile.php?id=100009283092043");
  };

  const navigateToZalo = () => {
    window.location.href = "https://www.facebook.com";
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={` left-0 z-50 sticky flex justify-center  bg-white w-screen  h-18 ${
        visible ? "top-0" : ""
      }`}
    >
      <div className="flex flex-row gap-4 w-full justify-center items-center h-full  rounded-lg">
        <div className="basis-1/5 justify-center flex">
          <button className="px-2 py-2">
            <img
              className="w-36 h-12 rounded-lg object-cover "
              src="https://www.senviet.art/wp-content/uploads/2021/12/doanthanhnien.jpg"
              alt="Logo"
            />
          </button>
        </div>
        <div className=" basis-3/5  justify-center items-center place-content-between flex flex-row font-semibold text-">
          <Link
            to="/"
            className={`hover mx-4 ${currentPath === "/" ? "active" : ""}`}
          >
            Trang chủ
          </Link>
          <Link
            to="/article/tin-tuc"
            className={`mx-4 hover ${
              currentPath.startsWith("/article/tin-tuc") ? "active" : ""
            }`}
          >
            Tin tức
          </Link>
          <Link
            to="/article/hoat-dong-doan"
            className={`mx-4 hover ${
              currentPath.startsWith("/article/hoat-dong-doan") ||
              currentPath === "/article/hoat-dong-doan"
                ? "active"
                : ""
            }`}
          >
            Hoạt động đoàn{" "}
          </Link>
          <Link
            to="/article/su-kien"
            className={`mx-4 hover ${
              currentPath.startsWith("/article/su-kien") ||
              currentPath === "/article/su-kien"
                ? "active"
                : ""
            }`}
          >
            Sự kiện
          </Link>
          <Link to="#" className="dropdown ">
            <div className="flex items-center  gap-2">
              Khác
              <FontAwesomeIcon className="w-3 h-3 icon " icon={faAngleDown} />
            </div>
            <div class="dropdown-content ">
              <div className="flex flex-col justify-center text-sm font-normal  w-full h-full">
                <Link
                  to="/contact-ads"
                  className="hover:bg-slate-50 flex items-center "
                >
                  Liên hệ
                </Link>
                <Link to="/doan-vien-tieu-bieu" className="hover:bg-slate-50  ">
                  Đoàn viên tiêu biểu
                </Link>
              </div>
            </div>
          </Link>
        </div>
        <div className="basis-1/5 flex items-center bg-white p-1  rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 pt-0.5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="ml-2 outline-none bg-transparent"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
        <div className="basis-1/5 flex items-center justify-center gap-2 mr-4">
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onChange={toggleDarkMode}
              checked={darkMode}
            />
            <label for="checkbox" class="checkbox-label">
              <FontAwesomeIcon className="fa-moon" icon={faMoon} />
              <FontAwesomeIcon className="fa-sun" icon={faSun} />
              <span class="ball"></span>
            </label>
          </div>
          <FontAwesomeIcon
            className=" h-6 w-6 hover:cursor-pointer"
            icon={faCircleUser}
          />
          <div className="w-[1px] h-6 bg-gray-600"></div>
          <img
            onClick={navigateToFacebook}
            src={facebookIcon}
            alt="Facebook Icon"
            className="w-6 h-6 object-cover hover:cursor-pointer"
          />
          <img
            src={zaloIcon}
            alt="Zalo Icon"
            className="w-6 h-6 object-cover hover:cursor-pointer rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
