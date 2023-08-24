import React from "react";
import Button from "./ReuseButton";

const Card = ({ stand, pledge, desc, num }) => {
  return (
    <div className="Card ring rounded  mx-auto my-9 p-4 max-w-lg text-black place-items-center ">
      <div className="pb-2 sm:flex sm:justify-between">
        <b>
          <h2 className="text-xl ">{stand}</h2>
        </b>
        <h3 className="text-xl text-emerald-500">{pledge}</h3>
      </div>

      <p className=" text-xl py-4 font-sans ">{desc}</p>
      <div className="md:flex justify-between items-center">
        <div className="text-2xl">
          {num} <span className="text-xl text-emerald-500">left </span>{" "}
        </div>
        <Button
          className="py-2 px-2 mt-4 text-white"
          id="btn"
          text="Select Reward"
        />
      </div>
    </div>
  );
};

export default Card;
