import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import BackToTopButton from "../common/BackToTopButton";
import "./layout.css";
const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className={"bg-white relative scroll-smooth	"}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className=" w-screen  flex justify-center min-h-[100vh] ">
        <Outlet />
      </div>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
