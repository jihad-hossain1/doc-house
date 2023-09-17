import React from "react";

import useDoctors from "../../hook/useDoctors";
import DoctorCard from "./DoctorCard";
import Heading from "../Heading/Heading";

const ExpertDocators = () => {
  const [doctors] = useDoctors();
  console.log(doctors);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
        {doctors && doctors.length > 0 ? (
          doctors
            .slice(0, 3)
            .map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
            ))
        ) : (
          <div className="border border-neutral-200 pb-4 rounded-md shadow-sm hover:shadow">
            <Heading
              title="No Doctors Info Found!"
              subtitle="Please wait few time...."
              center={true}
            ></Heading>
          </div>
        )}
      </div>
    </>
  );
};

export default ExpertDocators;
