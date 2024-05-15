import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";

const MySubmitted = () => {
  const { user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const helmetContext = {};
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/attemptedItems",
          {
            headers: {
              Authorization: `Bearer ${user.token}`, // Assuming you're using token-based auth
            },
          }
        );
        setAssignments(response.data);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    if (user) {
      fetchAssignments();
    }
  }, [user]);

  return (
    <div className="lg:mt-10 lg:mx-20 mt-5">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>STUDYLAB | My Assignments</title>
        </Helmet>
      </HelmetProvider>
      <h2 className="text-2xl font-bold mb-5">
        My Assignments:{assignments.length}
      </h2>
      <div className="flex flex-col gap-5">
        {assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="bg-white shadow-md rounded-lg p-4"
          >
            <h3 className="text-xl font-semibold">{assignment.title}</h3>
            <p>
              <b>Status:</b> {assignment.status}
            </p>
            <p>
              <b>Assignment Marks:</b> {assignment.marks}
            </p>
            <p>
              <b>Obtained Marks:</b> {assignment.obtainedMarks}
            </p>
            <p>
              <b>Feedback:</b> {assignment.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySubmitted;
