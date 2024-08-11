import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { ToastContainer } from "react-toastify";

import { IoCloseSharp } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { LuAlignJustify, LuLogIn, LuLogOut } from "react-icons/lu";
import { MdAppRegistration } from "react-icons/md";

defineElement(lottie.loadAnimation);

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navlink = (
    <>
      {!user && (
        <>
          <li className="border-b lg:border-hidden rounded-md pb-1 mt-2">
            <Link to="/" onClick={() => setIsDropdownOpen(false)}>
              Home
            </Link>
          </li>
          <li className="border-b  lg:border-hidden rounded-md pb-1 mt-2 ">
            <Link to="/assignment" onClick={() => setIsDropdownOpen(false)}>
              Assignments
            </Link>
          </li>
          <li className="border-b  md:border-hidden rounded-md pb-1 mt-2 ">
            <Link
              to="/login"
              className="md:hidden"
              onClick={() => setIsDropdownOpen(false)}
            >
              Login / Register
            </Link>
          </li>
        </>
      )}

      {user && (
        <>
          <li className="border-b  lg:border-hidden rounded-md pb-1 mt-2 ">
            <Link to="/" onClick={() => setIsDropdownOpen(false)}>
              Home
            </Link>
          </li>
          <li className="border-b  lg:border-hidden rounded-md pb-1 mt-2 ">
            <Link
              to="/createassignment"
              onClick={() => setIsDropdownOpen(false)}
            >
              Create Assignments
            </Link>
          </li>
          <li className="border-b  lg:border-hidden rounded-md pb-1 mt-2 ">
            <Link to="/pending" onClick={() => setIsDropdownOpen(false)}>
              Pending Assignments
            </Link>
          </li>
          <li className="border-b  lg:border-hidden rounded-md pb-1 mt-2 ">
            <Link to="/profile" onClick={() => setIsDropdownOpen(false)}>
              View Profile
            </Link>
          </li>
        </>
      )}
    </>
  );

  const photoIcon = (
    <div className="w-10 rounded-full">
      <lord-icon
        className="w-full h-full"
        src="https://cdn.lordicon.com/kthelypq.json"
        trigger="loop"
        delay="500"
        colors="primary:#000"
        style={{ width: "40px", height: "40px" }}
      ></lord-icon>
    </div>
  );

  const logOutHandler = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          text: "Successfully logged out",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          text: error.message,
          icon: "error",
        });
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <ToastContainer />
      <div className="navbar px-5 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              className="lg:hidden p-4 focus:outline-none"
              onClick={toggleSidebar}
            >
              <LuAlignJustify className="text-xl" />
            </button>
            {/* Sidebar for small screens */}
            <div
              className={`fixed inset-0 z-40 flex ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } transform transition-transform duration-700 ease-in-out lg:hidden`}
            >
              <div className="w-64 max-[450px]:h-svh min-h-screen font-semibold bg-[#515e68]  text-white flex flex-col">
                <div className="flex p-6 items-center justify-between">
                  <h2 className=" text-xl uppercase  ">StudyLab</h2>
                  <button
                    className=" focus:outline-none bg-gray-600 rounded-md p-[6px] "
                    onClick={(e) => {
                      e.stopPropagation(); // Stop propagation to prevent sidebar from closing
                      toggleSidebar();
                    }}
                  >
                    <IoCloseSharp className="text-xl" />
                  </button>
                </div>
                <ul className="menu mr-5 pt-7 mt-2   z-[10]">{navlink}</ul>
                {/* <div className="flex-grow"></div>
              <div className="mt-auto font-semibold p-4">
                <p className="text-sm">
                  Copyright © {currentYear} - All right reserved by storks Ltd
                </p>
              </div> */}
              </div>
              <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={toggleSidebar}
              ></div>
            </div>
          </div>
          <Link to="/" className="flex items-center">
            <img
              className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10"
              src="/logo.png"
              alt="logo"
            />
            <span className="btn  btn-ghost lg:text-3xl md:text-2xl font-bold max-[450px]:text-xl bg-gradient-to-r from-green-500 to-[#59C6D2] text-transparent bg-clip-text p-0">
              STUDY LAB
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  font-semibold">
            {navlink}
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="dark"
              onChange={handleToggle}
            />
            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user ? (
            <>
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  onClick={toggleDropdown}
                  className="btn btn-ghost  btn-circle avatar "
                >
                  <button
                    style={{ width: "44px", height: "44px" }} // Add width and height to make it a square
                  >
                    {user.photoURL ? (
                      <img
                        className="w-10 h-10 rounded-full" // Change to w-full h-full
                        src={user.photoURL}
                        alt="User Avatar"
                      />
                    ) : (
                      photoIcon
                    )}
                  </button>
                </div>

                {isDropdownOpen && (
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link
                        to="/mysubmitted"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Submit
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/dashboard/cart"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                    </li> */}
                    <li className="mt-2">
                      <button
                        className="bg-gray-200 block text-center "
                        onClick={logOutHandler}
                      >
                        Log Out{" "}
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <div className="max-[450px]:hidden">
              <Link
                to="/login"
                className="btn ml-5 md:btn-sm lg:btn-md bg-gradient-to-r from-green-500 to-[#59C6D2] text-white gap-2"
              >
                Login <LuLogIn />
              </Link>
              <Link
                to="/registration"
                className="btn ml-3 md:btn-sm lg:btn-md bg-gradient-to-r from-green-500 to-[#59C6D2] text-white gap-2"
              >
                Register <MdAppRegistration />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
