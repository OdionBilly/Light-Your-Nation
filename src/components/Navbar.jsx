import React from 'react'
import { NavLink ,Link} from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center font-bold text-[15px] py-6 max-sm:px-10 px-[100px] bg-[#070737] text-[#f1f1f1]">
        <img
          className="w-[40px] lg:w-[50px] rounded-full"
          src="/src/assets/logo.jpeg"
          alt=""
        />
        <ul className="max-sm:hidden max-lg:hidden flex  md:gap-4 lg:gap-10 md:pl-[170px] font-roboto ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#5c5ce4]" : "nav-link"
            }
          >
            <li>HOME</li>
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-[blue]" : "nav-link"
            }
          >
            <li>WHO WE ARE</li>
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              isActive ? "text-[blue]" : "nav-link"
            }
          >
            <li>WHAT WE DO</li>
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "text-[blue]" : "nav-link"
            }
          >
            <li>CONTACT</li>
          </NavLink>
        </ul>
        <div className=" flex flex-col-1 justify-center gap-4 max-sm:hidden max-lg:hidden">
          <button 
          onClick={()=> }
          className="max-sm:px-6 px-10 lg:py-2 bg-[#070737] text-[#f1f1f1] border-2 border-slate-300 hover:bg-[#f1f1f1] hover:text-[#0f0f5f] sm:text-[13px] text-[15px]">
            Donate
          </button>

          <button className="max-sm:px-6 sm:py-2 px-10 lg:py-2 bg-[#f1f1f1] text-[#0f0f5f] hover:bg-[#070737] border-2 border-slate-300 hover:text-[#f1f1f1]">
            join us
          </button>
        </div>
        <div className="lg:hidden cursor-pointer ">
          {" "}
          {<BiMenu className="size-8" />}
        </div>
      </nav>
    </div>
  );
}

