import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateItems = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const items = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    image,
    item_title,
    category,
    description,
    marks,
    dueDate: initialDueDate,
    userName,
    userEmail,
    userImg,
  } = items;

  const [dueDate, setDueDate] = useState(new Date(initialDueDate));

  const formatDateForDatabase = (dueDate) => {
    const dateObj = new Date(dueDate);
    const year = dateObj.getFullYear();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[dateObj.getMonth()];
    const day = dateObj.getDate();

    return `${day < 10 ? "0" : ""}${day}-${month}-${year}`;
  };

  const handleUpdateItems = (event) => {
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

    const formattedDueDate = formatDateForDatabase(dueDate);

    const updatedItem = {
      image,
      item_title,
      category,
      description,
      marks,
      dueDate: formattedDueDate,
      userName,
      userEmail,
      userImg,
    };

    axiosSecure
      .put(`/items/${_id}`, updatedItem)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Item Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/assignment");
          });
        }
      })
      .catch((error) => {
        console.error("Error updating item:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to update item. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const helmetContext = {};
  return (
    <div className="bg-[#F4F3F0] rounded-xl p-10">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Update Items</title>
        </Helmet>
      </HelmetProvider>
      <h2 className="font-bold text-3xl text-center mb-4">Update Item</h2>
      <form
        data-aos="fade-up"
        data-aos-duration="1000"
        onSubmit={handleUpdateItems}
      >
        <div className="md:flex md:mb-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="https://www..."
                className="input input-bordered w-full"
                name="image"
                defaultValue={image}
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
                defaultValue={item_title}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <select
                name="category"
                defaultValue={category}
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
                defaultValue={description}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Marks"
                className="input input-bordered w-full"
                name="marks"
                defaultValue={marks}
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
                dateFormat="dd-MMM-yyyy"
                placeholderText="Select due date"
                minDate={new Date()} // Disable past dates
                required
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="UPDATE"
          className="btn btn-block bg-gray-600 max-[450px]:mt-5 text-white hover:bg-green-600"
        />
      </form>
    </div>
  );
};

export default UpdateItems;
