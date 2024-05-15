import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import ItemsCard from "./ItemsCard";

const Assignment = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://b9a11server-site.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter(
          (item) => item.category.toLowerCase() === filter.toLowerCase() // Convert to lowercase for comparison
        )
      );
    }
  }, [items, filter]);

  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase(); // Convert to lowercase
    setFilter(value);
  };

  const viewDetailsDeny = () => {
    Swal.fire({
      title: "Login to view details",
      showCancelButton: true,
      confirmButtonText: "Login",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  const helmetContext = {};

  return (
    <div className="mb-10">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>STUDYLAB | Assignments</title>
        </Helmet>
      </HelmetProvider>
      <div className="flex mt-9 justify-center items-center">
        <label htmlFor="filter" className="mr-2 text-xl font-bold">
          Difficulty Level:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="border rounded-md px-2 py-1"
        >
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {loading ? (
        <span className="loading loading-spinner text-error w-10 h-40"></span>
      ) : (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid md:mx-5 md:grid-cols-2 lg:mx-20 gap-4 mt-8"
        >
          {filteredItems.map((item) => (
            <ItemsCard
              key={item._id}
              item={item}
              items={items}
              setItems={setItems}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Assignment;
