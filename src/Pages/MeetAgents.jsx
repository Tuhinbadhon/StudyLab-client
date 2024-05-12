import React from "react";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "animate.css";
import { Link } from "react-router-dom";
const MeetAgents = () => {
  return (
    <div className="h-full " data-aos="fade-up" data-aos-duration="1000">
      {/* paragraph section */}
      <div className="text-center max-w-screen-sm mx-auto px-2 lg:px-0 mb-6">
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-lg font-medium text-indigo-600 lg:text-3xl lg:font-bold  mt-6 lg:mt-20 "
        >
          Meet Our Top Artist
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-sm lg:text-lg font-normal mt-6 mb-6"
        >
          Begin your artistic journey with our team of dedicated craft
          enthusiasts, ready to guide you through every step of the creative
          process. Meet our seasoned artisans today and let us unlock the doors
          to your crafting dreams.
        </p>
      </div>

      {/* card section  */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 md:p-4 lg:grid-cols-3 gap-4 lg:gap-6 justify-center">
        {/* agent 1 */}
        <div className="  hover:scale-110 ease-in duration-300  flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://i.ibb.co/xjsyCLx/leo.webp"
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Leonardo DiCaprio
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                Cartoonists
              </p>
            </div>
            <Link to="agent/1">
              <button className="btn bg-indigo-400 text-white hover:bg-indigo-200 hover:text-black rounded-3xl">
                Make an appointment
              </button>
            </Link>

            <div className="flex justify-center pt-2 space-x-4 align-center">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Dribble"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <SiGmail />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <FaTwitterSquare />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Email"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* agent 2 */}
        <div className="hover:scale-110 ease-in duration-300 flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://i.ibb.co/0yqCgPh/kate.jpg"
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Kate Winslet
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                Landscape Artist
              </p>
            </div>
            <Link to="agent/2">
              <button className="btn bg-indigo-400 text-white hover:bg-indigo-200 hover:text-black rounded-3xl">
                Make an appointment
              </button>
            </Link>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Dribble"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <SiGmail />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <FaTwitterSquare />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Email"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* agent 3 */}
        <div className="hover:scale-110 ease-in duration-300 flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://i.ibb.co/FKXPvRS/image11.jpg"
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">Johnny Depp</h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                Ceramic artist
              </p>
            </div>
            <Link to="agent/3">
              <button className="btn bg-indigo-400 text-white hover:bg-indigo-200 hover:text-black rounded-3xl">
                Make an appointment
              </button>
            </Link>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Dribble"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <SiGmail />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <FaTwitterSquare />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Email"
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetAgents;
