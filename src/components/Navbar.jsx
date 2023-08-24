import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, Setnav] = useState(false);

  const handleNav = () => {
    Setnav(!nav);
  };

  const navlists = [
    {
      name: "About",
      page: "#about",
    },
    {
      name: "Discover",
      page: "#discover",
    },
    {
      name: "Get Started",
      page: "#getstarted",
    },
  ];

  return (
    <nav className="w-full min-h-[40px] md:min-h-[50px] flex justify-between items-start absolute z-10 bg-transparent p-10 p md:px-24">
      {/* logo section */}
      <div className="">
        <h1 className="text-2xl text-yellow-50 font-bold cursor-pointer">
          {/* <Link to="/"> Crowd</Link> */}
          <a href="/">CrowdFund</a>
        </h1>
      </div>

      {/* navbar ists.....................desktop view 
      used map() to render the navlists here so that it can be updated easily from the array of navlists*/}

      <ul className="hidden md:flex px-6 items-center">
        {navlists.map((navlist) => (
          <li key={navlist.name} className="p-4 text-sm ">
            {/* <Link to={navlist.page}>{navlist.name}</Link> */}
            <a href={navlist.page}>{navlist.name}</a>
          </li>
        ))}
      </ul>

      {/* hamburger icon */}
      <div
        className={"md:hidden z-10 text-xl font-bold font-mono cursor-pointer "}
        onClick={handleNav}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute left-0 top-20 w-screen m-auto py-8 h-screen bg-black/90 flex-col "
            : "absolute left-[-100%] h-screen ease-in duration-700"
        }
      >
        <ul className="h-screen w-full pt-9 text-center">
          {navlists.map((navlist) => (
            <li
              key={navlist.name}
              className="text-xl text-bold py-6 cursor-pointer"
            >
              <a href={navlist.page}>{navlist.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
