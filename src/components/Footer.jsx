import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";


export const Footer = () => {
  return (
    <div>
      <div className=" bg-[#070737] text-[#f1f1f1] mt-10 flex max-sm:flex-col justify-around align-baseline py-10">
        <ul className="max-sm:gap-3 gap-4 flex flex-col max-sm:items-center  font-regular text-[15px]">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/">
            <li>WHO WE ARE</li>
          </Link>
          <Link to="/">
            <li>WHAT WE DO</li>
          </Link>
          <Link to="/">
            <li>CONTACT</li>
          </Link>
        </ul>

        <div className=" flex flex-col items-center">
          <div className="flex gap-3 pt-4">
            {<BsFacebook />}
            {<BsInstagram />}
            {<BsLinkedin />}
          </div>
          <p className="pt-4">Copyright @ 2024</p>
        </div>
      </div>
    </div>
  );
}
