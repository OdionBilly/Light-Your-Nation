import React from 'react'
import { BiAccessibility , BiBuilding, BiHeart} from 'react-icons/bi';
import heroimage from '../assets/Hero-image-2.png'

export const Cart = () => {
  return (
    <div className="mt-10 backdrop-opacity-10 backdrop-invert bg-white/50">
      <div className="mt-[-40px]  ">
        <div className="flex max-sm:flex-col mt-10">
          <div className="w-[100%] mt-10 px-12">
            <h1 className="text-center font-merriweather text-[30px] md:text-[25px] lg:text-[35px] lg:mt-10">
              LIGHT YOUR NATION
            </h1>
            <p className="mt-[10px] shadow-2xl  text-center font-roboto sm:text-[15px] lg:text-[20px] mx-3 max-sm:px-6 md:px-5 lg:px-[70px]">
              Every contribution fuels hope, transforms lives, and ignites a
              brighter future. Your support can turn challenges into triumphs
              and dreams into realities. Join us in making a lasting
              impact—because together, we can change the world, one life at a
              time."
            </p>
          </div>

          <div className="w-[100%] md:mt-10 lg:mt-0 opacity-2 ">
            <img src={heroimage} className="" alt="" />
          </div>
        </div>
      </div>

      <h2 className=" text-[20px] md:text-[30px] lg:text-[35px] font-merriweather text-center py-5 mt-10 "></h2>

      {/* passion Section */}
      <div className="flex max-sm:flex-col lg:justify-between gap-5 px-[2px] mx-8 md:mx-[13px] py-10 md:px-1 lg:mx-[60px] lg:px-[00px]   backdrop-opacity-10 backdrop-invert bg-white/50">
        <div className="shadow-2xl transition duration-300 ease-in-out hover:scale-105 ">
          <img src="" alt="" />
          {
            <BiAccessibility className="size-[100px] lg:size-[150px] md:size-[80px] ml-[100px] md:ml-[70px] lg:ml-[120px] p-2 bg-slate-500 rounded-full mb-4" />
          }
          <h1 className="font-merriweather ml-[110px] md:ml-[60px] lg:ml-[140px] md:text-[20px] lg:text-[25px] py-2">
            PASSION
          </h1>
          <p className="md:w-[227px] lg:w-[400px] px-5 lg:px-10 text-[15px] font-roboto py-2">
            Empowering dreams,Building future by Nuturing young Minds as well
            helping the Needy, Less privileges in the various Communities
          </p>
          <div className="pt-2 ml-5 text-[#fff]">
            <button
              className="p-2 bg-[#2525aa] px-4 hover:bg-[#4d4dad]"
              type="button"
            >
              SEE MORE
            </button>
          </div>
        </div>

        <div className="shadow-2xl hover:scale-105 transition duration-300 ease-in-out max-sm:mt-[60px] ">
          <img src="" alt="" />
          {
            <BiBuilding className="size-[100px] md:size-[80px] lg:size-[150px] ml-[100px] md:ml-[70px] lg:ml-[120px] p-2  bg-slate-500 rounded-full mb-4" />
          }
          <h1 className=" font-merriweather ml-[110px]  md:ml-[60px] lg:ml-[140px] md:text-[20px] lg:text-[25px] py-2">
            MISSION
          </h1>
          <p className="md:w-[227px] lg:w-[400px] px-5 lg:px-5 text-[15px] font-roboto">
            To Equip individuals Boy/Girl with the proper Skills, necessities
            and stronger cognitive Abilities in Fostering prosperity in the
            African Communities .
          </p>
        </div>

        <div className="shadow-2xl hover:scale-105 transition duration-300 ease-in-out max-sm:mt-[60px]">
          <img src="" alt="" />
          {
            <BiHeart className="size-[100px] md:size-[80px] lg:size-[150px] ml-[100px] md:ml-[70px] lg:ml-[120px] p-2 bg-slate-500 rounded-full mb-4" />
          }
          <h1 className="ml-[120px] md:ml-[70px] lg:ml-[140px] py-2 font-merriweather md:text-[20px] lg:text-[25px]">
            VISION
          </h1>
          <p className="md:w-[227px] lg:w-[400px] px-5 lg:px-5 text-[15px]">
            To Empower Africa And the rest of the world with hope . We believe
            through our community campeign which focuses on Empowerment, Lives
            will be transformed.
          </p>
        </div>
      </div>
    </div>
  );
}
