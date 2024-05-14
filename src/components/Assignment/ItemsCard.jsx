import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ItemsCard = ({ item, items, setItems }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { _id, image, item_title, description, marks, category } = item;

  const handleDelete = (_id) => {
    if (!user) {
      // Show modal if user is not logged in
      Swal.fire({
        title: "Please Log In",
        text: "You need to log in to perform this action.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Log In",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else if (user.email === item.userEmail) {
      // Proceed with delete operation
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/items/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your item has been deleted.",
                  icon: "success",
                });
                const remaining = items.filter((ite) => ite._id !== _id);
                setItems(remaining);
              }
            });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You don't have the permission to delete it!",
      });
    }
  };

  return (
    <div className="max-[450px]:mx-5 lg:flex  justify-center items-center bg-base-100 rounded-lg border">
      <div className="lg:max-w-60  md:max-w-full  max-[450px]:w-full p-3 ">
        <img
          src={image}
          className=" max-h-44 max-[450px]:max-h-full md:max-h-52 w-full  rounded-xl"
        />
      </div>
      <div className="flex justify-between items-center w-full p-3">
        <div className="">
          <h2 className="card-title">Title: {item_title}</h2>
          <div className="">
            <p className="flex gap-1">
              Difficulty Level: <b>{category}</b>
            </p>
            <p>
              Marks: <b>{marks}</b>{" "}
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical  space-y-4">
            <Link to={`/viewitems/${_id}`}>
              <button className=" text-white rounded-md w-full btn btn-info ">
                View
              </button>
            </Link>
            <Link to={`/updateitems/${_id}`}>
              <button className=" text-white rounded-md btn btn-warning">
                Update
              </button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="  text-white rounded-md btn btn-error "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
