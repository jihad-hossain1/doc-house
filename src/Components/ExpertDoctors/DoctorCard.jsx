import React from "react";

const DoctorCard = ({ doctor }) => {
  const { image, price, name } = doctor;
  return (
    <div className="border rounded-lg p-3 inline-block">
      <img src={image} className="object-cover" alt="" />
      <div className="mt-3 space-y-2">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p>$ {price}</p>
      </div>
      <div className="text-center mt-3">
        <button className="w-full rounded-lg border border-[#F7A582] hover:bg-[#F7A582] font-semibold hover:text-white text-[#F7A582] px-3 py-4">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
