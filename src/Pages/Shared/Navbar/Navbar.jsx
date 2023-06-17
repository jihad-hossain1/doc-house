// import { Footer } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Banner from "../../../Components/Banner/Banner";
import Container from "../../../Components/Share/Container/Container";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { useCallback } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  },[])
  return (
    <Container>
      <div class="navbar  bg-transparent text-white">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-800"
            >
              <li>
                <Link>Home</Link>
              </li>

              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Appointment</Link>
              </li>
              <li>
                <Link to={`/dashboard`}>Dashoard</Link>
              </li>
              <li>
                <Link to={`/login`}>Login</Link>
              </li>
            </ul>
          </div>
          <Link class="btn btn-ghost normal-case text-xl"></Link>
        </div>
        <div class="navbar-end hidden lg:flex ">
          <ul class="menu menu-horizontal px-1 ">
            <li>
              <Link>Home</Link>
            </li>

            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Appointment</Link>
            </li>
            
            <li onClick={toggleOpen}>
              <span>
                <AiOutlineUser className="text-xl"></AiOutlineUser>
              </span>
              {isOpen && (
                <ul className="bg-white text-green-950">
                  <li className="hover:font-semibold">
                    <Link to={`/dashboard`}>Dashboard</Link>
                  </li>
                  <li className="hover:font-semibold">
                    <Link to={`/`}>Favorite</Link>
                  </li>
                  <li className="hover:font-semibold">
                    <Link to={`/login`}>Login</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <Banner></Banner>
    </Container>
  );
};

export default Navbar;