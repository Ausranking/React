import React from "react";
import Button from "./ReuseButton";

const InactiveCard = ({ stand, pledge, desc }) => {
  return (
    <div className="Card opacity-25 mx-auto ring rounded my-4 p-4 max-w-lg text-black place-items-center ">
      <div className="pb-2 sm:flex sm:justify-between">
        <h2 className="text-xl ">{stand}</h2>

        <h3 className="text-xl text-emerald-500">{pledge}</h3>
      </div>

      <p className="text-justify text-xl">{desc}</p>
      <div className="text-2xl">{0} left </div>
      <Button id="btn" text="Out of Stock" className='opacity-7 color p-2 text-gray-400 bg-red-600 w-4/12'/>
    </div>
  );
};

export default InactiveCard;
