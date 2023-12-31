// import { Footer } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
// import Banner from "../../../Components/Banner/Banner";
import Container from "../../../Components/Share/Container/Container";
import { AiOutlineUser } from "react-icons/ai";
import { useState, useContext, useCallback } from "react";

import { AuthContext } from "../../../provider/AuthProvider";
import logoIcon from "../../../../public/logow.png";
// import ThemeContext from "../../../provider/ThemeContext";
import useTheme from "../../../hook/useTheme";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
              className="bg-neutral-800 text-white  dark:text-white menu menu-sm dropdown-content mt-3 p-2  rounded-box w-52 "
            >
              <li className="">
                <Link>Home</Link>
              </li>

              <li>
                <Link>About</Link>
              </li>

              <li>
                <Link to={`appointment`}>Appointment</Link>
              </li>
              {user && (
                <li>
                  <Link to={`/dashboardLayout`}>Dashoard</Link>
                </li>
              )}
              {user ? (
                <li onClick={handleLogOut}>
                  <Link>LogOut</Link>
                </li>
              ) : (
                <li>
                  <Link to={`/login`}>Login</Link>
                </li>
              )}
              <div className="">
                <label className="cursor-pointer inline-block label">
                  <input
                    onChange={toggleTheme}
                    type="checkbox"
                    checked={theme === "dark"}
                    className="toggle toggle-error"
                  />
                </label>
              </div>
            </ul>
          </div>
          <Link class="btn btn-ghost normal-case text-xl">
            <img src={logoIcon} className="w-32 md:w-48" alt="" />
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex ">
          <ul class="menu menu-horizontal px-1 ">
            <li>
              <Link className="hover:text-orange-500 ">Home</Link>
            </li>

            <li>
              <Link className="hover:text-orange-500 ">About</Link>
            </li>
            <li>
              <Link className="hover:text-orange-500 " to={`appointment`}>
                Appointment
              </Link>
            </li>
            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  onChange={toggleTheme}
                  type="checkbox"
                  checked={theme === "dark"}
                  className="toggle toggle-error"
                />
              </label>
            </div>

            <li onClick={toggleOpen}>
              <span>
                <AiOutlineUser className="text-xl"></AiOutlineUser>
              </span>
              {isOpen && (
                <ul className="bg-white text-green-950">
                  <li className="hover:font-semibold">
                    <Link to={`/`}>Favorite</Link>
                  </li>
                  {user ? (
                    <>
                      <li className="hover:font-semibold">
                        <Link to={`/dashboardLayout`}>Dashboard</Link>
                      </li>
                      <li onClick={handleLogOut}>
                        <Link>LogOut</Link>
                      </li>
                    </>
                  ) : (
                    <li className="hover:font-semibold">
                      <Link to={`/login`}>Login</Link>
                    </li>
                  )}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
