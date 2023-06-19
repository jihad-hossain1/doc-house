import React from "react";

import useDoctors from "../../hook/useDoctors";
import DoctorCard from "./DoctorCard";

const ExpertDocators = () => {
  const [doctors] = useDoctors();
  console.log(doctors);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
        {doctors.slice(0, 3).map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
        ))}
      </div>
    </>
  );
};

export default ExpertDocators;
