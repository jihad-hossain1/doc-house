import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Container from "../Components/Share/Container/Container";
import Banner from "../Components/Banner/Banner";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noBanner = location.pathname.includes("appointment");

  return (
    <>
      <div className="py-1  bg-[#07332F]">
        <Navbar></Navbar>
      </div>

      {/* {noBanner || (
        <div className="bg-[#07332F] ">
          <Banner></Banner>
        </div>
      )} */}

      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Main;
