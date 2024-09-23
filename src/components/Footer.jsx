import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";


export const Footer = () => {
  return (
    <div className="bg-[#070737] relative">
      <div className=" flex max-sm:flex-col md:flex-row lg:flex-row  justify-between md:px-10 xl:px-[70px] bg-[#070737] text-[#f1f1f1] max-sm:py-1 py-10">
        <ul className="max-sm:gap-3 gap-4 flex max-sm:flex-col md:flex-col lg:flex-col max-sm:items-center  font-regular text-[15px] max-sm:mt-12">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>who we are</li>
          </Link>
          <Link to="/">
            <li>what we do</li>
          </Link>
          <Link to="/">
            <li>contact</li>
          </Link>
        </ul>

        <div className="max-sm:absolute flex justify-between max-sm:gap-[110px] max-sm:top-[10px] md:gap-[80px] xl:gap-[250px] ">
          <div className="max-sm:mt-10 max-sm:px-2 gap-3 text-[15px] font-regular flex max-sm:flex-col md:flex-col xl:flex-col">
            <p>Drug Eradication</p>
            <p>Youth Empowerment</p>
            <p>Widows Campaign</p>
            <p>Drug Eradication</p>
          </div>

          <div className="max-sm:mt-10 max-sm:px-2 gap-3 text-[15px] font-regular flex  max-sm:flex-col md:flex-col xl:flex-col">
            <p>Skills Acquisition</p>
            <p>Oral Care</p>
            <p>Blood Donation</p>
            <p>Community Health</p>
          </div>
        </div>

        
          <div className="max-sm:mt-[100px]  flex flex-col items-center">
            <div className="flex gap-3 pt-4">
              {<BsFacebook className="size-6" />}
              {<BsInstagram className="size-6" />}
              {<BsLinkedin className="size-6" />}
            </div>
          </div>
        </div>
        <div>
          <p className=" py-5 text-[#fff] text-center">Copyright @ 2024</p>
        </div>
      
    </div>
  );
}
