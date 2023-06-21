import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Container from "../Components/Share/Container/Container";
import Banner from "../Components/Banner/Banner";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeader = location.pathname.includes(``);
  return (
    <>
      <div className="py-1  bg-[#07332F]">
        <Navbar></Navbar>
      </div>

      <div className="bg-[#07332F] ">
        <Banner></Banner>
      </div>
      <Container>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Main;
