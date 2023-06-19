import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Container from "../Components/Share/Container/Container";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeader = location.pathname.includes(``);
  return (
    <>
      <Container>
        <div className="py-1  bg-[#07332F]">
          <Navbar></Navbar>
        </div>
      </Container>
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
