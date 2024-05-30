import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { RotatingLines } from "react-loader-spinner";

const MySubmitted = () => {
  const { user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const helmetContext = {};

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
        const userAssignments = response.data.filter(
          (assignment) => assignment.userEmail === user.email
        );
        setAssignments(userAssignments);
      } catch (error) {
        console.error("Error fetching assignments:", error);
        setError(error);
      } finally {
        setLoading(false); // Set loading state to false after fetch completes
      }
    };

    if (user) {
      fetchAssignments();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <RotatingLines
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="lg:mt-10 mx-5 lg:mx-20 mt-5">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>STUDYLAB | My Assignments</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto text-center mb-5">
        <span className="text-xl mb-3 lg:font-semibold">
          Submitted Assignments:
        </span>{" "}
        <b>{assignments.length}</b>
      </div>

      <div className="flex flex-col gap-5">
        {assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="bg-white border shadow-md rounded-lg p-4"
          >
            <div>
              <h3 className="text-xl mb-3 lg:font-semibold">
                Title: {assignment.title}
              </h3>
              <p>
                <b>Status:</b>{" "}
                <span
                  className={` font-extrabold text-lg ${
                    assignment.status === "completed"
                      ? "text-green-500"
                      : "text-orange-400"
                  }`}
                >
                  {assignment.status}
                </span>
              </p>
              <p>
                <b>Assignment Marks:</b> {assignment.totalMarks}
              </p>
              <p>
                <b>Obtained Marks:</b> {assignment.obtainMarks}
              </p>
              <p>
                <b>Feedback:</b> {assignment.feedback}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySubmitted;
