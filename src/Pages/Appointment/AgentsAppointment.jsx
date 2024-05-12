import React, { useState } from "react";
import { Link } from "react-router-dom";

const AgentsAppointment = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleAgentClick = (agentName) => {
    setSelectedAgent(agentName);
  };

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="flex flex-col gap-4"
    >
      {/* Show selected agent name */}

      {selectedAgent && (
        <div className="rounded-lg p-4 bg-accent dark:bg-gray-100 max-w-sm text-center">
          <h2 className="text-2xl font-semibold">{selectedAgent}</h2>
        </div>
      )}

      {/* agent card -1 */}
      <div
        className={`rounded-2xl max-w-sm p-2 hover:cursor-pointer sm:flex sm:space-x-6 bg-accent dark:bg-gray-500 dark:text-gray-800 ${
          selectedAgent === "Leonardo DiCaprio"
            ? "border-2 border-blue-500"
            : ""
        }`}
        onClick={() => handleAgentClick("Leonardo DiCaprio")}
      >
        <div className="flex-shrink-0  w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src="https://i.ibb.co/xjsyCLx/leo.webp"
            alt=""
            className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500 "
          />
        </div>
        <div className="flex flex-col space-y-4 my-auto glass p-4 rounded-2xl text-white">
          <h2 className="text-2xl font-semibold">Leonardo DiCaprio</h2>
          <span className="text-lg dark:text-gray-100">Expert in English</span>
        </div>
      </div>
      {/* agent card -2 */}
      <div
        className={`rounded-2xl max-w-sm p-2 hover:cursor-pointer sm:flex sm:space-x-6 bg-accent dark:bg-gray-500 dark:text-gray-800 ${
          selectedAgent === "Kate Winslet" ? "border-2 border-blue-500" : ""
        }`}
        onClick={() => handleAgentClick("Kate Winslet")}
      >
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src="https://i.ibb.co/0yqCgPh/kate.jpg"
            alt=""
            className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4 my-auto glass text-white p-4 rounded-2xl">
          <h2 className="text-2xl font-semibold">Kate Winslet</h2>
          <span className="text-lg dark:text-gray-100"> Expert Developer</span>
        </div>
      </div>
      {/* agent card -3 */}
      <div
        className={`rounded-2xl max-w-sm p-2 hover:cursor-pointer sm:flex sm:space-x-6 bg-accent dark:bg-gray-500 dark:text-gray-800 ${
          selectedAgent === "Johnny Depp" ? "border-2 border-blue-500" : ""
        }`}
        onClick={() => handleAgentClick("Johnny Depp")}
      >
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src="https://i.ibb.co/FKXPvRS/image11.jpg"
            alt=""
            className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4 my-auto glass text-white p-4 rounded-2xl">
          <h2 className="text-2xl font-semibold">Johnny Depp</h2>
          <span className="text-lg dark:text-gray-100">CEO of Study Lab</span>
        </div>
      </div>
    </div>
  );
};

export default AgentsAppointment;
