"use client";

import React, { useEffect, useState } from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navIcon = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const outsideClick = (e) => {
      if (!e.target.closest(".navbar-mobile")) {
        setIsOpen(true);
      }
    };
    document.body.addEventListener("click", outsideClick);
    return () => {
      document.body.removeEventListener("click", outsideClick);
    };
  }, []);

  return (
    <div>
      {/* desktop navbar */}
      <div className="flex px-4 justify-between pt-4 items-center max-w-screen-xl m-auto flex-wrap gap-4">
        <div className="items-center">
          <Image
            className="cursor-pointer hover:opacity-75"
            src={logo}
            alt="logo"
          />
        </div>
        <div
          onClick={navIcon}
          className="navbar-mobile xl:hidden text-2xl font-medium cursor-pointer rotate-90"
        >
          {!isOpen ? "X" : "|||"}
        </div>
        <div className="hidden xl:flex gap-9 font-medium items-center">
          <a className="cursor-pointer hover:opacity-70">Services</a>
          <a className="cursor-pointer hover:opacity-70">About Us</a>
          <a className="cursor-pointer hover:opacity-70">Contact Us</a>
          <button className="border-2 border-green-500 p-3 rounded-xl w-24 hover:opacity-70">
            Login
          </button>
          <button className="text-white bg-green-500 p-3 rounded-xl w-28 hover:opacity-80">
            Register
          </button>
        </div>
      </div>

      {/* mobile navbar */}
      <div
        className={
          !isOpen
            ? "navbar-mobile z-10 absolute w-full opacity-95 flex flex-col gap-9 font-medium bg-white_banner py-14 px-10 xl:hidden mt-5 items-center"
            : "hidden"
        }
      >
        <a className="cursor-pointer hover:opacity-70">Services</a>
        <a className="cursor-pointer hover:opacity-70">About Us</a>
        <a className="cursor-pointer hover:opacity-70">Contact Us</a>
        <button className="border-2 border-green-500 p-3 rounded-xl w-24 hover:opacity-70">
          Login
        </button>
        <button className="text-white bg-green-500 p-3 rounded-xl w-28 hover:opacity-80">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
