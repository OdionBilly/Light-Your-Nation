import React from 'react'
import { BiAccessibility , BiBuilding, BiHeart} from 'react-icons/bi';

export const Cart = () => {
  return (
    <div className="">
      <h2 className=" text-[20px] font-merriweather text-center py-5">
        {/* lighting your Nation */}
      </h2>
      <div className="flex max-sm:flex-col lg:justify-between gap-5 px-[2px] mx-8 md:mx-[13px] py-4 md:px-1 lg:mx-[50px] lg:px-[20px]">
        <div className="bg-[blue] ">
          <img src="" alt="" />
          {
            <BiAccessibility className="size-[100px] lg:size-[150px] md:size-[80px] ml-[100px] md:ml-[70px] lg:ml-[120px] p-2 bg-slate-100 rounded-full mb-4" />
          }
          <h1 className="font-merriweather ml-[110px] md:ml-[60px] lg:ml-[140px] md:text-[20px] lg:text-[25px] py-2">
            PASSION
          </h1>
          <p className="md:w-[227px] lg:w-[400px] px-5 lg:px-10 text-[15px] font-roboto py-2">
            we love humanity because we are derived from it
          </p>
          <div className="pt-2 ml-5">
            <button className="p-2 bg-slate-500 px-4" type="button">
              SEE MORE
            </button>
          </div>
        </div>

        <div className="bg-[blue]">
          <img src="" alt="" />
          {
            <BiBuilding className="size-[100px] md:size-[80px] lg:size-[150px] ml-[100px] md:ml-[70px] lg:ml-[120px] p-2  bg-slate-100 rounded-full mb-4" />
          }
          <h1 className=" font-merriweather ml-[110px]  md:ml-[60px] lg:ml-[140px] md:text-[20px] lg:text-[25px] py-2">
            MISSION
          </h1>
          <p className="md:w-[227px] lg:w-[400px] px-5 lg:px-5 text-[15px] font-roboto">
            To Empower the boy child, Giving Neccesary Care to the Community
          </p>
        </div>

        <div className="bg-[blue]">
          <img src="" alt="" />
          {
            <BiHeart className="size-[100px] md:size-[80px] lg:size-[150px] ml-[100px] md:ml-[70px] lg:ml-[120px] p-2 bg-slate-100 rounded-full mb-4" />
          }
          <h1 className="ml-[120px] md:ml-[70px] lg:ml-[50px] py-2 font-merriweather md:text-[20px] lg:text-[25px]">
            VISION
          </h1>
          <p className="md:w-[227px] lg:w-[400px] px-5 lg:px-5 text-[15px]">
            we love humanity because we are derived from it
          </p>
        </div>
      </div>
    </div>
  );
}
