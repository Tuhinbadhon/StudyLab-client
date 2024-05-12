import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AgentsAppointment from "./AgentsAppointment";

const Appointment = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading mx-auto loading-spinner text-warning"></span>
    );
  }

  const helmetContext = {};

  const { id } = useParams();
  const [agentId, setAgentId] = useState(id);
  const [agentName, setAgentName] = useState("");
  const [agentImage, setAgentImage] = useState("");
  const [agentDes, setAgentDes] = useState("");
  const [showAgents, setShowAgents] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split("T")[0];

    setMinDate(tomorrowFormatted);
  }, []);

  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setAppointmentTime(event.target.value);
  };

  // today's date in the format yyyy-mm-dd
  const today = new Date().toISOString().split("T")[0];
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    if (agentId === "1") {
      setAgentName("Leonardo DiCaprio");
      setAgentImage("https://i.ibb.co/xjsyCLx/leo.webp");
      setAgentDes("Expert in English");
    } else if (agentId === "2") {
      setAgentName("Kate Winslet");
      setAgentImage("https://i.ibb.co/0yqCgPh/kate.jpg");
      setAgentDes("Expert Developer");
    } else if (agentId === "3") {
      setAgentName("Johnny Depp");
      setAgentImage("https://i.ibb.co/FKXPvRS/image11.jpg");
      setAgentDes("CEO of Study Lab");
    } else {
      setShowAgents(true);
    }
  }, [id]);

  const appointmentbtnhandler = (e) => {
    e.preventDefault();

    const date = e.target.date.value;
    Swal.fire({
      text: "Appointment Saved on " + date,
      icon: "success",
    });

    e.target.reset();
  };

  return (
    <div className="my-10 px-2">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Appointment</title>
        </Helmet>
      </HelmetProvider>

      <div className="lg:hero md:hero min-h-screen bg-base-200 rounded-2xl">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse"
        >
          {showAgents ? (
            <div className="">
              <AgentsAppointment />
            </div>
          ) : (
            <div className="flex flex-col max-w-md p-6 dark:bg-gray-50 dark:text-gray-800">
              <img
                src={agentImage}
                alt=""
                className="flex-shrink-0 object-cover w-64 h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
              />
              <div className="flex flex-col text-center lg:text-left">
                <h2 className="text-2xl font-semibold mt-5">{agentName}</h2>
                <span className=" pb-2 text-xl dark:text-gray-600 mb-4">
                  {agentDes}
                </span>
                <p className="w-64 lg:w-auto">
                  <q>
                    As an experienced educator, {agentName} brings years of
                    teaching expertise and a dedication to fostering academic
                    excellence. Their commitment to understanding students'
                    needs, coupled with their innovative teaching methods, has
                    earned them a reputation for cultivating strong, positive
                    relationships in the classroom.
                  </q>
                </p>
              </div>
            </div>
          )}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="card shrink-0 max-w-80 shadow-2xl bg-base-100"
          >
            <form className="card-body" onSubmit={appointmentbtnhandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Appointment Date
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered border-accent"
                  required
                  min={minDate} // Set min attribute to today's date
                  onChange={handleDateChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Time</span>
                </label>
                <input
                  type="time"
                  name="time"
                  className="input input-bordered border-accent"
                  min="10:00"
                  max="20:00"
                  onChange={handleTimeChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Topic</span>
                </label>
                <select className="select select-accent w-full max-w-xs">
                  <option disabled selected>
                    What do you want to discuss about?
                  </option>
                  <option>
                    Personalized Learning Plans and Academic Goal Setting
                  </option>
                  <option>
                    Improving Study Skills and Note-taking Techniques
                  </option>
                  <option>
                    Preparing for Exams and Test-taking Strategies
                  </option>
                  <option>Exploring Career Paths and Academic Guidance</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Any requirements?{" "}
                  </span>
                </label>
                <textarea
                  name="textArea"
                  className="input input-bordered border-accent"
                  rows="8"
                  cols="50"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Submit Appointment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
