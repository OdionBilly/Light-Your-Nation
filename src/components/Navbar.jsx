import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

export const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0  w-full z-30 flex flex-wrap justify-between items-center font-bold text-[15px] py-6 max-sm:px-10 px-[100px] bg-[#070737] text-[#f1f1f1] overflow-hidden">
        <img
          className="w-[40px] lg:w-[50px] rounded-full"
          src="/src/assets/logo.jpeg"
          alt=""
        />
        <ul
          className={`max-sm:hidden md:hidden xl:flex max-sm:gap-2 flex max-sm:flex-col max-sm:absolute max-sm:top-[87px] max-sm:items-center z-10 max-sm:bg-[#070737] max-sm:left-[200px] max-sm:w-[590px] max-sm:h-[150px] md:gap-4 lg:gap-10 md:pl-[170px] font-roboto ${
            setIsOpen ? "top-[120px]" : "top-[490px]"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#5c5ce4]" : "nav-link"
            }
          >
            <li className="max-sm:text-[12px]">HOME</li>
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-[blue]" : "nav-link"
            }
          >
            <li className="max-sm:text-[12px] ">WHO WE ARE</li>
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              isActive ? "text-[blue]" : "nav-link"
            }
          >
            <li className="max-sm:text-[12px]  ">WHAT WE DO</li>
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? " text-[blue] " : "nav-link"
            }
          >
            <li className="max-sm:text-[12px]">CONTACT</li>
          </NavLink>
        </ul>
        <div className="max-sm:hidden md:hidden lg:flex flex-wrap max-sm:items-center max-sm:z-30 max-sm:absolute top-[0px]   max-sm:w-[190px] max-sm:h-[100px] left-[200px] flex max-sm:flex-col  justify-center gap-4 ">
          <Link
            to={`/Donate`}
            className="max-sm:px-1 max-sm:py-1 max-sm:w-[80px] px-6 lg:py-2
            bg-[#070737] text-[#f1f1f1] border-2 border-slate-300
            hover:bg-[#f1f1f1] hover:text-[#0f0f5f] max-sm:text-[10px]
            text-[15px] transition duration-300 ease-in-out"
          >
            {" "}
            Donate
          </Link>

          <button className="max-sm:px-1 max-sm:py-1 max-sm:w-[80px] px-6 lg:py-2 bg-[#f1f1f1] text-[#0f0f5f] hover:bg-[#070737] border-2 border-slate-300 hover:text-[#f1f1f1] max-sm:text-[10px] text-[15px] transition-all duration-300 ease-in-out">
            join-us
          </button>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden cursor-pointer flex "
        >
          {isOpen ? <BiX className="size-8" /> : <BiMenu className="size-8" />}
          {/* {<BiMenu className="size-8 max-sm:hidden" />} */}
        </div>
      </nav>

      {/* mobile menu */}
      {isOpen && (
        <div className="max-w-full  pl-10 pt-[99px] pb-5 bg-[#070737] text-[#fff] w-full transition duration-3s00 ease-in-out">
          <ul className="flex flex-col gap-y-2 z-10 max-sm:left-[0px] font-roboto  ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#5c5ce4]" : "nav-link"
              }
            >
              <li className="max-sm:text-[12px] hover:bg-[gray] ">HOME</li>
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "text-[blue]" : "nav-link"
              }
            >
              <li className="max-sm:text-[12px] hover:bg-[gray] ">
                WHO WE ARE
              </li>
            </NavLink>
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                isActive ? "text-[blue]" : "nav-link"
              }
            >
              <li className="max-sm:text-[12px] hover:bg-[gray]  ">
                WHAT WE DO
              </li>
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? " text-[blue] " : "nav-link"
              }
            >
              <li className="max-sm:text-[12px] hover:bg-[gray]">CONTACT</li>
            </NavLink>
          </ul>

          {/* Donate section */}
          <div className="max-w-[360px] flex flex-col gap-y-4 mt-2 py-2">
            <div className="w-[80px]">
              <Link
                to={`/Donate`}
                className="py-1 max-sm:px-5 md:px-10 max-sm:w-[80px]
            bg-[#070737] text-[#f1f1f1] border-2 border-slate-300
            hover:bg-[#f1f1f1] hover:text-[#0f0f5f] max-sm:text-[10px]
            text-[15px] transition duration-300 ease-in-out"
              >
                {" "}
                Donate
              </Link>
            </div>

            <div>
              <button
                className="max-sm:px-1 max-sm:py-1 max-sm:w-[80px] px-10 lg:py-2 bg-[#f1f1f1] 
              text-[#0f0f5f] hover:bg-[#070737] border-2 border-slate-300 hover:text-[#f1f1f1] max-sm:text-[10px] text-[15px] transition-all duration-300 ease-in-out"
              >
                join-us
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
