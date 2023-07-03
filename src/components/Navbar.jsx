import { useState } from "react";
import "./index.css";

import { logo, logotext } from "../assets";
import { navLinks } from "../constants";
import NavbarBorderbtn, { NavbarBtn } from "./Buttons";
import { close, menu } from "../vector";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar max-sm:flex max-sm:justify-between max-sm:items-center max-sm:space-x-4">
      <a href="/" className="flex items-center justify-between space-x-1">
        <img
          src={logo}
          alt="hoobank"
          className="w-[102px] h-[103px] max-sm:w-[60px] max-sm:h-[59px]"
        />
        <img
          src={logotext}
          alt="DQAW"
          className="w-[76px] h-[46px] max-sm:w-[46px] max-sm:h-[26px]"
        />
      </a>
      <div className="min-sm:hidden hidden max-sm:flex max-sm:justify-center max-sm:items-center">
        <NavbarBorderbtn />
      </div>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1 space-x-[50px]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-primaryfont font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="max-sm:hidden">
        <NavbarBorderbtn />
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-primary shadow-xl  absolute   top-20 right-0 mx-4 my-2 min-w-[140px] rounded-3xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <ul className="  font-primaryfont  list-none sm:flex hidden justify-center items-center flex-1 space-x-[50px]">
        <li className="btn  text-white text-xs font-bold conic  ">ABOUT</li>
        <li className="btn text-white text-xs font-bold">SERVICES</li>
        <li className="btn text-white text-xs font-bold">TECHNOLOGIES</li>
        <li className="btn text-white text-xs font-bold">HOW TO </li>
      </ul> */
}
{
  /* NAVBAR BUTTONS */
}
<div>
  <NavbarBorderbtn />
</div>;
{
  /* NAVBAR BUTTONS FINISHED */
}
{
  /*  */
}
