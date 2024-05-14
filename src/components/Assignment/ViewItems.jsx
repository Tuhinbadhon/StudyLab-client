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

          <Link to="/" className="card-actions justify-end mt-4">
            <button className="btn w-full bg-indigo-400 text-white hover:bg-indigo-300">
              Take assignment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewItems;
