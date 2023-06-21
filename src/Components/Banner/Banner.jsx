import React from "react";
import bannerPng from "../../assets/banner/banner.png";
import Container from "../Share/Container/Container";
const Banner = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 text-white  bg-[#07332F] w-full">
        <div className="space-y-6 text-center md:text-start p-4 ">
          <h2 className="text-5xl">
            Your Best Medical <br className="hidden lg:block" />
            Help Center
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,{" "}
            <br className="hidden lg:block" />
            consequuntur exercitationem! Ipsam blanditiis harum iure natus.{" "}
            <br className="hidden lg:block" />
            Consequatur deserunt beatae numquam!
          </p>
          <div>
            <button className="bg-[#F7A582] px-3 py-2 rounded shadow boder-0 hover:border-1 mb-6 hover:bg-[#f5966e] lg:order-first ">
              All Service
            </button>
          </div>
        </div>
        <div className="p-4">
          <img src={bannerPng} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
