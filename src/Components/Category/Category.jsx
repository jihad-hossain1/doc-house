import React from "react";
import { icons } from "../Icon/Icons";
const Category = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-10">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="shadow-md rounded p-4 flex justify-center items-center  cursor-pointer overflow-hidden gap-3"
        >
          <img
            src={icon.icon}
            className=" object-cover bg-rose-200 p-4 rounded-md w-2/4 md:w-20"
            alt=""
          />
          <h4 className="font-semibold">{icon.label}</h4>
        </div>
      ))}
    </div>
  );
};

export default Category;
