import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PendingAssignment = () => {
  const [arts, setArts] = useState([]);
  const helmetContext = {};
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get(
          "https://studylab-ass11.vercel.app/attemptedItems",
          {
            headers: {
              Authorization: `Bearer ${user.token}`, // Assuming you're using token-based auth
            },
          }
        );
        setArts(response.data);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    if (user) {
      fetchAssignments();
    }
  }, [user]);

  let serial = 1;
  const denyGiveMark = () => {
    Swal.fire({
      icon: "warning",

      text: "You don't have the permission to give mark",

      confirmButtonText: "OK",
    });
  };

  return (
    <div className=" lg:mx-10 mx-3">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>STUDYLAB | Pending Assignments</title>
        </Helmet>
      </HelmetProvider>

      {loading ? (
        <span className="loading loading-spinner text-error w-10 h-40"></span>
      ) : (
        <div className="hero min-h-screen overflow-auto bg-gray-200  rounded-2xl  lg:max-w-full ">
          <div className="hero-content flex-col">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-center lg:text-left"
            >
              <h1 className="text-2xl font-bold">All Pending Assignments</h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="overflow-x-auto"
            >
              <div className="overflow-x-auto max-w-72 md:max-w-full lg:max-w-full">
                <table className="table table-striped table-hover border ">
                  <thead className=" font-semibold text-base md:text-xl lg:text-xl">
                    <tr>
                      <th className="border text-center ">Serial</th>
                      <th className="border text-center ">Examinee Name</th>
                      <th className="border text-center ">Title</th>
                      <th className="border text-center ">Assignment Marks</th>
                      <th className="border text-center ">Status</th>
                      <th className="border text-center "></th>
                    </tr>
                  </thead>
                  <tbody className=" font-normal text-base md:text-lg lg:text-lg">
                    {arts &&
                      arts.map((art) => {
                        if (art.status === "pending") {
                          return (
                            <tr key={art._id} className="">
                              <td className="border text-center ">
                                {serial++}
                              </td>
                              <td className="border text-center ">
                                {art.userName}
                              </td>
                              <td className="border ">{art.title}</td>
                              <td className="border text-center">
                                {art.totalMarks}
                              </td>
                              <td className="border">
                                <span
                                  className={`px-4 py-2 text-white rounded-3xl ${
                                    art.status === "completed"
                                      ? "bg-green-500"
                                      : "bg-orange-400"
                                  }`}
                                >
                                  {art.status}
                                </span>
                              </td>
                              <td className="border">
                                {user && user.email === art.email ? (
                                  <Link to={`/givemark/${art._id}`}>
                                    <button className="btn text-white bg-indigo-400 rounded-3xl">
                                      Give mark
                                    </button>
                                  </Link>
                                ) : (
                                  <button
                                    onClick={() => {
                                      denyGiveMark();
                                    }}
                                    className="btn text-white bg-indigo-400 rounded-3xl"
                                  >
                                    Give mark
                                  </button>
                                )}
                              </td>
                            </tr>
                          );
                        } else {
                          return null;
                        }
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAssignment;
