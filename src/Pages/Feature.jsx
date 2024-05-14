import React from "react";

const Feature = ({ data }) => {
  const { id, image, title, description } = data;
  return (
    <div className="card rounded-2xl h-full bg-base-100 p-5 border">
      <figure className="rounded-2xl  bg-[#F3F3F3]">
        <img src={image} alt="Shoes" className="max-w-80 max-h-56 p-6" />
      </figure>
      <div className="w-full pt-5">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions pt-4 w-full justify-between">
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
