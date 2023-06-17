
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { green } from "@mui/material/colors";
// import Navbar from "../Shared/Navbar/Navbar";

const Dashbord = () => {
  const isAdmin = true;
  return (
    <>
      {/* Dashboard Navbar start */}
      {/* <div className="">
        <Navbar></Navbar>
      </div> */}
      {/* Dashboard Navbar end */}
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start ">
          {/* <!-- Page content here --> */}
          {/* <Outlet></Outlet> */}
          <label
            htmlFor="my-drawer-2"
            className="lg:hidden border border-primary rounded-md px-4 mt-5 shadow-md hover:shadow-lg hover:font-semibold"
          >
            Open Menu
          </label>
          <div className="ml-16 md:mx-auto">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 ">
            {/* <!-- Sidebar content here --> */}
            {isAdmin ? (
              <>
                <li>
                  <Link to={`/`}>All Users</Link>
                </li>
                <li>
                  <Link to={`addItem`}>Add Doctor</Link>
                </li>
                <li>
                  <Link to={`/`}>Mange Doctors</Link>
                </li>
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={`/`}>All Users</Link>
                </li>
                <li>
                  <Link to={`addItem`}>Add Doctor</Link>
                </li>
                <li>
                  <Link to={`/`}>Mange Doctors</Link>
                </li>
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <Link to={`/`}>All Users</Link>
            </li>
            <li>
              <Link to={`addItem`}>Add Doctor</Link>
            </li>
            <li>
              <Link to={`/`}>Mange Doctors</Link>
            </li>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
