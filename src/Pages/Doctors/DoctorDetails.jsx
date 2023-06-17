import React from "react";
import { useLoaderData } from "react-router-dom";

const DoctorDetails = () => {
  const doctorDetails = useLoaderData();
  console.log(doctorDetails);
  return (
    <div className="pt-5">
      <div className="md:flex md:space-x-4 w-2/3 md:mx-auto">
        <img src={doctorDetails.image} alt="" />
        <div className="space-y-3">
          <h4 className="font-semibold text-xl">{doctorDetails.name}</h4>
          <p>{doctorDetails.email}</p>
          <p>Visit: ${doctorDetails.price}</p>
        </div>
      </div>
      <div>
        <p>{doctorDetails.description}</p>
      </div>
    </div>
  );
};

export default DoctorDetails;
