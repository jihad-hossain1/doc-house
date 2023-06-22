import React from "react";
import { FaLocationArrow, FaPhoneAlt, FaRegClock } from "react-icons/fa";
const Opening = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="h-[200px] p-5 text-white bg-[#07332F] flex space-x-3 rounded-lg shadow hover:shadow-md m-4   items-center justify-center">
        <div>
          <FaRegClock className="font-extralight text-5xl"></FaRegClock>
        </div>
        <div>
          <h4 className="font-bold mb-3">Opening Hours</h4>
          <p>Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>
      <div className="h-[200px] p-5 text-white bg-[#F7A582] flex space-x-3 rounded-lg shadow hover:shadow-md m-4  items-center justify-center ">
        <div>
          <FaLocationArrow className="font-extralight text-5xl"></FaLocationArrow>
        </div>
        <div>
          <h4 className="font-bold mb-3">Our Locations</h4>
          <p>abc road, abc, 1200 xyz country</p>
        </div>
      </div>
      <div className="h-[200px] p-5 text-white bg-[#07332F] flex space-x-3 rounded-lg shadow hover:shadow-md m-4  items-center justify-center">
        <div>
          <FaPhoneAlt className="font-extralight text-5xl"></FaPhoneAlt>
        </div>
        <div>
          <h4 className="font-bold mb-3">Contact Us</h4>
          <p>+88 00xxx xxx 0xx</p>
          <p>+88 00xxx xxx 0xx</p>
        </div>
      </div>
    </div>
  );
};

export default Opening;
