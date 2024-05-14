import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const ViewItems = () => {
  const helmetContext = {};
  const items = useLoaderData();
  console.log(items);
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
              {" "}
              <b>Difficulty level:</b> {items.category}{" "}
            </p>
            <p>
              {" "}
              <b>Description:</b> {items.description}{" "}
            </p>
            <p>
              {" "}
              <b>Assignment Marks : </b> {items.marks}{" "}
            </p>

            <p>
              {" "}
              <b>Date : </b> {items.dueDate}{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <b>User Name : </b>
              {items.userName}{" "}
            </p>
            <p>
              {" "}
              <b>User Email:</b> {items.userEmail}
            </p>
          </div>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn mt-5"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Take assignment
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h2 className="text-center font-bold text-2xl">
                Assignment submission form
              </h2>
              <form>
                <div className="">
                  <div className="form-control md:w-full">
                    <label className="label">
                      <span className="label-text"> Import PDF/doc link</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="https://www..."
                        className="input input-bordered w-full"
                        name="image"
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
                        name="description"
                        id=""
                        required
                      />
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn mt-3 btn-block bg-gray-600 max-[450px]:mt-5 text-white hover:bg-green-600 "
                  />
                </div>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ViewItems;
