import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();

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
        setAssignments(response.data);
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

  // Filter assignments for the current user
  const userAssignments = assignments.filter(
    (assignment) => assignment.userEmail === user.email
  );

  return (
    <div>
      <div className="flex justify-evenly mb-8">
        {/* <h2 className="text-4xl">Items: {userAssignments.length}</h2> */}
      </div>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Title</th>
              <th>Assignment Marks</th>
              <th>Obtain Marks</th>
              <th>Feedback</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userAssignments.map((assignment, index) => (
              <tr key={assignment._id} className="text-center">
                <th>{index + 1}</th>
                <td>{assignment.title}</td>
                <td>{assignment.totalMarks}</td>
                <td>{assignment.obtainMarks}</td>
                <td>{assignment.feedback}</td>
                <td>
                  <span
                    className={` font-extrabold  ${
                      assignment.status === "completed"
                        ? "text-green-500"
                        : "text-orange-400"
                    }`}
                  >
                    {assignment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
