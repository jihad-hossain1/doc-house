import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Container from "../Components/Share/Container/Container";

const Main = () => {
  return (
    <>
      <div className="py-1  bg-[#07332F]">
        <Navbar></Navbar>
      </div>
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Main;
