import React from "react";
import logo from "../../../../public/logo.png";
import Container from "../../../Components/Share/Container/Container";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className="mt-20 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="">
          <img src={logo} alt="" />
          <p className="mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            obcaecati et officia aliquam harum suscipit unde quod cum, maxime
            vel!
          </p>
          <div className="mt-5">
            <button className="border border-[#F7A582] px-3 py-2 rounded-md hover:shadow-md text-[#F7A582] font-semibold">
              Appointment
            </button>
          </div>
        </div>
        <div className="space-y-2 flex flex-col">
          <header className="text-xl font-bold">Quick Links</header>
          <Link className="pt-6 hover:font-semibold ">About</Link>
          <Link className="hover:font-semibold ">Service</Link>
          <Link className="hover:font-semibold ">Doctors</Link>
          <Link className="hover:font-semibold ">Departments</Link>
          <Link className="hover:font-semibold ">Online Payment</Link>
          <Link className="hover:font-semibold ">Contact Us</Link>
          <Link className="hover:font-semibold ">My Account</Link>
        </div>
        <div className="space-y-2 flex flex-col">
          <header className="text-xl font-bold">Doc House Services</header>
          <Link className="pt-6 hover:font-semibold ">Padiatric Clinic</Link>
          <Link className="hover:font-semibold ">Diagnosis Clinic</Link>
          <Link className="hover:font-semibold ">Cardiac Clinic</Link>
          <Link className="hover:font-semibold ">Labratory Analysis</Link>
          <Link className="hover:font-semibold ">Gynecological Clinic</Link>
          <Link className="hover:font-semibold ">Personal Counseling</Link>
          <Link className="hover:font-semibold ">Dental Clinic</Link>
        </div>
        <div className="space-y-2 flex flex-col">
          <header className="text-xl font-bold">Working Hours</header>
          <Link className="pt-6 hover:font-semibold ">
            Monday- 10 am to 7 pm
          </Link>
          <Link className="hover:font-semibold ">Monday- 10 am to 7 pm</Link>
          <Link className="hover:font-semibold ">Monday- 10 am to 7 pm</Link>
          <Link className="hover:font-semibold ">Monday- 10 am to 7 pm</Link>
          <Link className="hover:font-semibold ">Monday- 10 am to 7 pm</Link>
          <Link className="hover:font-semibold ">Monday- 10 am to 7 pm </Link>
          <Link className="hover:font-semibold ">Monday- 10 am to 7 pm</Link>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-center pb-5">
        <p className="flex items-center ">
          Copyright all reservd by <FaCopyright className="mx-3"></FaCopyright>{" "}
          Jihad 2023
        </p>
      </div>
    </Container>
  );
};

export default Footer;
