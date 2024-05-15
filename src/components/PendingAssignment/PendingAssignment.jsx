import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

const PendingAssignment = () => {
  const [arts, setArts] = useState([]);
  const helmetContext = {};
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get(
          "https://b9a11server-site.vercel.app/attemptedItems",
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

  return (
    <div className="">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>STUDYLAB | Pending Assignments</title>
        </Helmet>
      </HelmetProvider>

      {loading ? (
        <span className="loading loading-spinner text-error w-10 h-40"></span>
      ) : (
        <div className="hero min-h-screen bg-base-200 rounded-2xl  max-w-sm md:max-w-md lg:max-w-full md:mx-auto">
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
                      <th className="border ">Serial</th>
                      <th className="border ">Examinee Name</th>
                      <th className="border ">Title</th>

                      <th className="border ">Assignment Marks</th>
                      <th className="border "></th>
                      <th className="border "></th>
                    </tr>
                  </thead>
                  <tbody className=" font-normal text-base md:text-lg lg:text-lg">
                    {arts &&
                      arts.map((art) => (
                        <tr key={art._id} className="">
                          <td className="border ">{serial++}</td>
                          <td className="border ">{art.userName}</td>
                          <td className="border ">{art.title}</td>
                          <td className="border">{art.marks}</td>

                          <td className="border">
                            {user ? (
                              <Link to={`/craftitems/${art._id}`}>
                                <button className="btn text-white  bg-indigo-400  rounded-3xl">
                                  Give mark
                                </button>
                              </Link>
                            ) : (
                              <button
                                onClick={viewDetailsDeny}
                                className="btn text-white bg-indigo-400 rounded-3xl"
                              >
                                Give mark
                              </button>
                            )}
                          </td>
                          <td className="border">
                            <button className="btn text-white bg-indigo-400 rounded-3xl">
                              Pending
                            </button>
                          </td>
                        </tr>
                      ))}
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
