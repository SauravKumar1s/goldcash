import React from "react";
import { span } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div>
      {" "}
      <nav className="flex items-center justify-between flex-wrap bg-black p-3 fixed w-full z-10 top-0 pin-t">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <li className="list-none text-white no-underline hover:text-white hover:no-underline">
            <img
              src="https://goldcash.co/wp-content/uploads/tlogo.png"
              className="w-32 text-white no-underline text-2xl pl-2 font-semibold"
              to="/"
            />
          </li>
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-6">
              <span
                className="inline-block font-semibold text-lg py-2 px-2 text-bold text-yellow-600 no-underline hover:text-green-900 cursor-pointer"
                to="/card"
              >
                Home
              </span>
            </li>
            <li className="mr-6">
              <span
                className="inline-block font-semibold text-lg py-2 px-2 text-bold text-white no-underline hover:text-yellow-600 cursor-pointer"
                to="/enrollcourse"
              >
                About Us
              </span>
            </li>

            <li className="mr-6">
              <span
                className="inline-block font-semibold text-lg py-2 px-2 text-bold text-white no-underline hover:text-yellow-600 cursor-pointer"
                to="/enrollcourse"
              >
                About Us
              </span>
            </li>
            <li className="mr-6">
              <span
                className="inline-block font-semibold text-lg py-2 px-2 text-bold text-white no-underline hover:text-yellow-600 cursor-pointer"
                to="/enrollcourse"
              >
                About Us
              </span>
            </li>
            <li className="mr-6">
              <span
                className="inline-block font-semibold text-lg py-2 px-2 text-bold text-white no-underline hover:text-yellow-600 cursor-pointer"
                to="/enrollcourse"
              >
                About Us
              </span>
            </li>
            <li className="mr-6">
              <span
                className="inline-block font-semibold text-lg py-2 px-2 text-bold text-white no-underline hover:text-yellow-600 cursor-pointer"
                to="/enrollcourse"
              >
                About Us
              </span>
            </li>
            <li className="mr-6">
              <span
                className="inline-block font-semibold text-lg py-2 px-2 text-bold text-white no-underline hover:text-yellow-600 cursor-pointer"
                to="/enrollcourse"
              >
                About Us
              </span>
            </li>
            <li className="mr-6">
              <span
                className="inline-block font-semibold text-lg py-2 px-2 text-bold text-white no-underline hover:text-yellow-600 cursor-pointer"
                to="/enrollcourse"
              >
                About Us
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
