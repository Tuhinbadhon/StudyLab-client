import axios from "axios";
import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ViewItems = () => {
  const { user } = useContext(AuthContext);
  const helmetContext = {};
  const items = useLoaderData();
  console.log(items);

  const handleSubmit = async (event) => {
    // if (user?.email === userEmail) {
    //   return Swal.fire({
    //     title: "Error!",
    //     text: "Action not permitted.",
    //     icon: "error",
    //     confirmButtonText: "OK",
    //   });
    // }
    event.preventDefault();
    const form = event.target;
    const itemId = items._id;
    const title = items.item_title;
    const marks = items.marks;
    const email = items.userEmail;
    const pdf = form.pdf.value.trim();
    const note = form.note.value.trim();
    const userName = user.displayName;
    const userEmail = user.email;
    if (!pdf || !note) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const newSubmitItems = {
      pdf,
      note,
      userName,
      userEmail,
      itemId,
      title,
      marks,
      email,
    };
    console.log(newSubmitItems);

    try {
      const response = await axios.post(
        "https://b9a11server-site.vercel.app/attemptedItems",
        newSubmitItems
      );
      if (response.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Item Added Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        document.getElementById("my_modal_5").close();
      }
    } catch (error) {
      console.error("There was an error submitting the item!", error);
    }
  };

  return (
    <div className="lg:mt-10 lg:mx-20 mt-5">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>STUDYLAB | {items.item_title}</title>
        </Helmet>
      </HelmetProvider>
      <div className="md:flex bg-base-100">
        <figure className=" ">
          <img
            src={items.image}
            alt="Album"
            className="p-4  md:max-w-96 lg:max-w-[700px] lg:max-h-[500px] "
          />
        </figure>
        <div className="card-body justify-center">
          <h2 className="card-title mb-5">{items.item_title} </h2>

          <div className="flex flex-col gap-2">
            <p>
              <b>Difficulty level:</b> {items.category}{" "}
            </p>
            <p>
              <b>Description:</b> {items.description}{" "}
            </p>
            <p>
              <b>Assignment Marks:</b> {items.marks}{" "}
            </p>
            <p>
              <b>Date:</b> {items.dueDate}{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <b>User Name:</b> {items.userName}{" "}
            </p>
            <p>
              <b>User Email:</b> {items.userEmail}
            </p>
          </div>

          <div>
            <button
              className="btn w-full mt-5"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Take assignment
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <div className="flex justify-between items-baseline">
                  <h2 className="text-center font-bold text-2xl">
                    Assignment submission form
                  </h2>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-square btn-outline hover:bg-red-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
                <form className="" onSubmit={handleSubmit}>
                  <div className="">
                    <div className="form-control md:w-full">
                      <label className="label">
                        <span className="label-text">Import PDF/doc link</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          placeholder="https://www..."
                          className="input input-bordered w-full"
                          name="pdf"
                          id=""
                          required
                        />
                      </label>
                    </div>
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Quick note</span>
                      </label>
                      <label className="input-group">
                        <textarea
                          type="text"
                          placeholder="Leave a note here"
                          className="textarea textarea-bordered w-full"
                          name="note"
                          id=""
                          required
                        />
                      </label>
                    </div>
                    <input
                      type="submit"
                      value="Submit"
                      className="btn mt-3 btn-block bg-gray-600 max-[450px]:mt-5 text-white hover:bg-green-600"
                    />
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItems;
