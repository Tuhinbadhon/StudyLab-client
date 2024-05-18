import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import Swal from "sweetalert2";

const GiveMark = () => {
  const helmetContext = {};
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const items = useLoaderData();
  console.log(items);
  const {
    _id,
    pdf,
    note,
    userName,
    userEmail,
    itemId,
    title,
    totalMarks,
    obtainMarks,
    email,
    status,
    feedback,
  } = items;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const obtainMarks = form.obtainMarks.value;
    const feedback = form.feedback.value;
    const status = "completed";

    const updatedItem = {
      obtainMarks,
      feedback,
      status,
    };
    axios
      .put(
        `https://b9a11server-site.vercel.app/attemptedItems/${_id}`,
        updatedItem
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",

            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            // Redirect to assignments page
            navigate("/pending");
          });
        }
      })
      .catch((error) => {
        console.error("Error updating item:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to submit item. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div className="lg:mt-10 lg:mx-20 mt-5">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>STUDYLAB | Give marks</title>
        </Helmet>
      </HelmetProvider>
      <div className="md:p-10 p-4">
        <h2 className="overflow-auto mb-3">
          <b>Pdf link: </b>
          <a href={pdf} target="blank" className="underline">
            {pdf}
          </a>
        </h2>
        <h2 className=" mb-5">
          {" "}
          <b>Note:</b> {note}
        </h2>
        <div className="pdf-preview ">
          <h2 className="mb-3 text-center">PDF Preview </h2>
          <iframe
            src={pdf}
            title="PDF Preview"
            className="border  lg:h-[550px] lg:w-[1000px] md:h-[300px] md:w-[600px] max-[450px]:h-[200px] max-[450px]:w-[350px]"
          />
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-3 rounded-lg  mt-7"
          >
            <div className="md:flex">
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Marks</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Marks"
                    className="input input-bordered w-full"
                    name="obtainMarks"
                    id=""
                    required
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Feedback</span>
                </label>
                <label className="input-group">
                  <textarea
                    type="text"
                    placeholder="Feedback"
                    className="textarea textarea-bordered w-full"
                    name="feedback"
                    id=""
                    required
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn mt-3 btn-block bg-gray-600 max-[450px]:mt-5 text-white hover:bg-green-600 "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default GiveMark;
