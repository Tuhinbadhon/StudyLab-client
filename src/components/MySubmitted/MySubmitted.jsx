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
          "https://b9a11server-site.vercel.app/attemptedItems",
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
    <div className="lg:mt-10 mx-5 lg:mx-20 mt-5">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>STUDYLAB | My Assignments</title>
        </Helmet>
      </HelmetProvider>

      <div className="flex flex-col gap-5">
        {assignments.map((assignment) =>
          assignment.userEmail === user.email ? (
            <div
              key={assignment._id}
              className="bg-white  border shadow-md rounded-lg p-4"
            >
              <div>
                <h3 className="text-xl mb-3 lg:font-semibold">
                  Title: {assignment.title}
                </h3>
                <p>
                  <b>Status:</b>{" "}
                  <span className="font-extrabold text-lg text-orange-400">
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
          ) : null
        )}
      </div>
    </div>
  );
};

export default MySubmitted;
