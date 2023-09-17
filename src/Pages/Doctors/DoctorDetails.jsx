import { Rating } from "@mui/material";
import React from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { FaLocationDot, FaDollarSign, FaRegCalendar } from "react-icons/fa6";
import Container from "../../Components/Share/Container/Container";
import About from "../../Components/About/About";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const DoctorDetails = () => {
  const doctorDetails = useLoaderData();
  const location = useLocation();
  console.log(location);
  // console.log(doctorDetails);
  return (
    <>
      <div className="bg-[#07332F] h-24 md:h-40 text-white">
        <Container>
          <div className="pt-5 pl-6">
            <h2>
              Home
              <span className="font-semibold">
                {location?.pathname.slice(0, 8)}profile
              </span>
            </h2>
            <h2 className="text-3xl font-semibold">Doctor Profile</h2>
          </div>
        </Container>
      </div>
      <div className="pt-5 min-h-screen px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={doctorDetails?.image}
            className="rounded-md object-cover w-full max-h-96"
            alt=""
          />
          <div className="space-y-2 ">
            <h4 className="font-bold text-xl">{doctorDetails?.name}</h4>
            <p className="mb-2">{doctorDetails?.doctorLabel?.label}</p>
            <Rating
              name="half-rating-read"
              defaultValue={doctorDetails?.rating}
              precision={0.5}
              readOnly
            />
            <div className="space-y-4">
              <p className="flex space-x-5 items-center">
                {" "}
                <FaLocationDot className="text-xl"></FaLocationDot>
                {doctorDetails?.location?.map((i, index) => (
                  <p key={index}>
                    {i?.label}{" "}
                    <span className="text-[#f57f4d] font-semibold hover:underline cursor-pointer">
                      - Get Directions
                    </span>
                  </p>
                ))}
              </p>
              <div className="flex gap-2">
                <div className="w-20 border border-neutral-200 bg-gray-100 h-16 rounded-md shadow"></div>
                <div className="w-20 border border-neutral-200 bg-gray-100 h-16 rounded-md shadow"></div>
                <div className="w-20 border border-neutral-200 bg-gray-100 h-16 rounded-md shadow"></div>
                <div className="w-20 border border-neutral-200 bg-gray-100 h-16 rounded-md shadow"></div>
              </div>
            </div>
            <div className="flex space-x-2 pt-4">
              <div className="border border-neutral-300 hover:border-neutral-400 shadow-sm px-3 py-1 rounded">
                {doctorDetails?.category}
              </div>
              <div className="border border-neutral-300 hover:border-neutral-400 shadow-sm px-3 py-1 rounded">
                {doctorDetails?.doctorLabel?.label}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-slate-50 mt-10 rounded shadow-sm drop-shadow">
          {/* TODO: create a overview section */}
          <div className="overflow-auto">
            <Tabs>
              <TabList className="md:flex">
                <Tab className="font-bold cursor-pointer py-3 px-8 md:px-24 bg-grey-background border border-grey-intermediate">
                  Overview
                </Tab>
                <Tab className="font-bold cursor-pointer py-3 px-8 md:px-24 bg-grey-background border border-grey-intermediate">
                  Location
                </Tab>
                <Tab className="font-bold cursor-pointer py-3 px-8 md:px-24 bg-grey-background border border-grey-intermediate">
                  Review
                </Tab>
                <Tab className="font-bold cursor-pointer py-3 px-8 md:px-24 bg-grey-background border border-grey-intermediate">
                  Bussiness Hours
                </Tab>
              </TabList>

              <TabPanel className="w-full">
                <About doctorDetails={doctorDetails}></About>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
