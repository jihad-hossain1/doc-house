import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { FaLocationDot, FaDollarSign, FaRegCalendar } from "react-icons/fa6";

const DoctorCard = ({ doctor }) => {
  // const [use,setUse] = useState
  const { image, price, name, location, doctorLabel, rating, dateTime } =
    doctor;
  return (
    <>
      <div className=" border border-neutral-100 rounded-lg p-3 inline-block hover:border-neutral-200 hover:shadow-md shadow relative">
        <img
          src={image}
          className="w-full h-56 object-cover rounded-md "
          alt=""
        />
        <div className="mt-3 space-y-2">
          <div>
            <h4 className="text-xl font-semibold">{name}</h4>
            <p className="mb-2">{doctorLabel?.label}</p>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
          </div>

          <div className="flex flex-col space-y-4">
            <p className="flex space-x-5 items-center">
              {" "}
              <FaLocationDot className="text-xl"></FaLocationDot>
              {location.map((i, index) => (
                <p key={index}>{i?.label}</p>
              ))}
            </p>
            <p className="flex space-x-5 items-center">
              <FaRegCalendar className="text-xl"></FaRegCalendar>
              <span>Available On {dateTime?.value.slice(0, 10)}</span>
            </p>
            <p className="flex space-x-5 items-center">
              <FaDollarSign className="text-xl"></FaDollarSign>{" "}
              <span>${price}</span>
            </p>
          </div>
        </div>
        <div className="text-center mt-3 w-full">
          <Link to={`/doctor/${doctor._id}`}>
            <button className="bottom-0 w-full rounded-lg border border-[#F7A582] hover:bg-[#F7A582] font-semibold hover:text-white text-[#F7A582] px-3 py-4 ">
              {" "}
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
