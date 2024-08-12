import React from 'react'

export const Cart = () => {
  return (
    <div>
      <h1 className="text-[40px] font-extrabold text-center bg-[#ebe6e6] pt-2 ">
        LIGHTING YOUR NATION{" "}
      </h1>
      <div className="flex max-sm:flex-col max-md:flex-col xl:flex-row gap-10 max-sm:px-[50px] md:pl-1 lg:px-[80px] pt-10 bg-[#cee8ce] py-10">
        <div className="gap-10 flex text-center ">
          <div className="shadow-lg bg-[#f5f4f4] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000">
            <img
              className="size-[400px] max-md:size-[200px]"
              src="/src/assets/mission-2.jpeg"
              alt=""
            />

            <h1 className="font-merriweather text-[20px]">MISSION</h1>
            <p className="w-[300px] md:w-[200px] py-4 pl-[10px] lg:ml-[70px] font-roboto text-[15px]">
              With the passion that we have as an organisation, we do our best
              to give back to the community we have been on the field for so
              many years,
            </p>
          </div>
        </div>
        <div className="flex text-center">
          <div className="shadow-lg bg-[#f5f4f4] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000">
            <img
              className="size-[400px] max-md:size-[200px]"
              src="/src/assets/passion.webp"
              alt=""
            />

            <h1 className="font-merriweather text-[20px]">PASSION</h1>
            <p className="w-[300px] md:w-[200px] py-4 pl-[10px] lg:ml-[70px] font-roboto text-[15px]">
              With the passion that we have as an organisation, we do our best
              to give back to the community we have been on the field for so
              many years ,
            </p>
          </div>
        </div>
        <div className="flex text-center">
          <div className="shadow-lg bg-[#f5f4f4] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-500 ">
            <img
              className="size-[400px] max-md:size-[200px]"
              src="/src/assets/vision.jpg"
              alt=""
            />

            <h1 className="font-merriweather text-[20px]">VISION</h1>
            <p className="w-[300px] md:w-[200px] py-4 pl-[10px] lg:ml-[70px] font-roboto text-[15px]">
              With the passion that we have as an organisation, we do our best
              to give back to the community we have been on the field for so
              many years ,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
