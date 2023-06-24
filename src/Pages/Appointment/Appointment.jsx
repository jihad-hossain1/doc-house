import React from "react";
import Container from "../../Components/Share/Container/Container";
import Category from "../../Components/Category/Category";
import imageDent from "../../assets/banner/images/chair.png";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { Outlet } from "react-router-dom";

const Appointment = () => {
  return (
    <div>
      <div className="bg-[#07332F] h-24 md:h-40"></div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8">
          <div className="order-last md:order-first flex justify-center flex-col items-center">
            <DateRange
              rangeColors={["#262626"]}
              date={new Date()}
              direction="vertical"
              showDateDisplay={false}
              minDate={new Date()}
            />
          </div>
          <div>
            <img
              src={imageDent}
              className=" object-cover"
              alt="chember photo"
            />
          </div>
        </div>
        <div>
          <h4 className="text-center text-2xl md:text-4xl font-semibold text-gray-700 py-10">
            Please select a service
          </h4>
          <Category></Category>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
