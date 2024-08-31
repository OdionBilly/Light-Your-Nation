import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { BiMenu, BiX} from "react-icons/bi";

export const Navbar = () => {

  let [isOpen, setIsOpen] = useState(true)
  return (
    <div>
      <nav className="flex relative justify-between items-center font-bold text-[15px] py-6 max-sm:px-10 px-[100px] bg-[#070737] text-[#f1f1f1]">
        <img
          className="w-[40px] lg:w-[50px] rounded-full"
          src="/src/assets/logo.jpeg"
          alt=""
        />
        <ul
          className={`max-sm:gap-2 flex max-sm:flex-col max-sm:absolute max-sm:top-[87px] max-sm:items-center z-10 max-sm:bg-[#070737] max-sm:left-[200px] max-sm:w-[190px] max-sm:h-[150px] md:gap-4 lg:gap-10 md:pl-[170px] font-roboto ${
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
              isActive ? "text-[blue]" : "nav-link"
            }
          >
            <li className="max-sm:text-[12px]">CONTACT</li>
          </NavLink>
        </ul>
        <div className=" max-sm:items-center max-sm:z-30 max-sm:absolute top-[190px] max-sm:bg-[#070737] max-sm:py-4 max-sm:w-[190px] max-sm:h-[100px] left-[200px] flex max-sm:flex-col  justify-center gap-4 ">
          <button
            // onClick={()=> }
            className="max-sm:px-1 max-sm:py-1 max-sm:w-[80px] px-10 lg:py-2 bg-[#070737] text-[#f1f1f1] border-2 border-slate-300 hover:bg-[#f1f1f1] hover:text-[#0f0f5f] max-sm:text-[10px] text-[15px]"
          >
            Donate
          </button>

          <button className="max-sm:px-1 max-sm:py-1 max-sm:w-[80px] px-10 lg:py-2 bg-[#f1f1f1] text-[#0f0f5f] hover:bg-[#070737] border-2 border-slate-300 hover:text-[#f1f1f1] max-sm:text-[10px] text-[15px]">
            join-us
          </button>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden cursor-pointer "
        >
          {isOpen ? <BiMenu className="size-8" /> : <BiX className="size-8" />}
          {<BiMenu className="size-8 max-sm:hidden" />}
        </div>
      </nav>
    </div>
  );
};
