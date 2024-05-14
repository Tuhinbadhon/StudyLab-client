import React, { useContext, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AssignmentForm = () => {
  const [dueDate, setDueDate] = useState(null); // State to store the selected due date
  const helmetContext = {};
  const { user } = useContext(AuthContext);

  const formatDateForDatabase = (dueDate) => {
    const dateObj = new Date(dueDate);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // Month is zero-indexed
    const day = dateObj.getDate();

    return `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
  };

  const handleAddItems = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const item_title = form.item_title.value;
    const category = form.category.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const userName = user.displayName;
    const userEmail = user.email;
    const userImg = user.photoURL;

    const newItem = {
      image,
      item_title,
      category,
      description,
      marks,
      dueDate: formatDateForDatabase(dueDate), // Format dueDate before sending to the server
      userName,
      userEmail,
      userImg,
    };

    // Send data to the server
    axios.post("http://localhost:5000/items", newItem).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Item Added Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <div className="bg-[#F4F3F0] rounded-xl p-5  md:p-10">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>STUDYLAB | Form</title>
        </Helmet>
      </HelmetProvider>
      <h2
        data-aos="fade-left"
        data-aos-duration="1000"
        className="font-bold text-3xl text-center mb-4"
      >
        Add Your Assignment Here
      </h2>
      <div className="">
        <form
          className=""
          data-aos="fade-up"
          data-aos-duration="1000"
          onSubmit={handleAddItems}
        >
          <div className="md:flex md:mb-6">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text"> Image URL</span>
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
          </div>
          <div className="md:flex md:mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered w-full"
                  name="item_title"
                  id=""
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text"> Category</span>
              </label>
              <label className="input-group">
                <select
                  name="category"
                  className="input input-bordered"
                  required
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </label>
            </div>
          </div>
          <div className="md:flex md:mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <textarea
                  type="text"
                  placeholder="Description"
                  className="textarea textarea-bordered w-full"
                  name="description"
                  id=""
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text"> Marks</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Marks"
                  className="input input-bordered w-full"
                  name="marks"
                  id=""
                  required
                />
              </label>
            </div>
          </div>
          <div className="form-control md:flex md:mb-6">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Due Date</span>
              </label>
              <div className="input-group">
                <DatePicker
                  selected={dueDate}
                  onChange={(date) => setDueDate(date)}
                  className="input input-bordered w-full"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select due date"
                  required
                />
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="ADD ITEM"
            className="btn btn-block bg-gray-600 max-[450px]:mt-5 text-white hover:bg-green-600 "
          />
        </form>
      </div>
    </div>
  );
};

export default AssignmentForm;
