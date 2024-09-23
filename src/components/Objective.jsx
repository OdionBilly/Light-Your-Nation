import React from 'react'

export const Objective = () => {
  return (
    <div className="">
      <div className="max-sm:mt-5">
        <div className="flex max-sm:flex-col justify-between md:flex-row-reverse lg:flex-row  md:gap-10 lg:gap-10 px-5 w-[100%] mt-5 md:mt-10 lg:mt-[10px]">
          <div className="lg:w-[100%] sm:mt-5 lg:mt-[180px] font-roboto ">
            <h1 className="text-center text-[20px] md:text-[22px] lg:text-[38px] font-merriweather py-4 md:py-0 lg:py-5 ">
              Boy Child Advocacy
            </h1>
            <p className="shadow-lg px-2 md:px-2 lg:px-[10px] lg:ml-1 border-2 py-10 md:py-0 md:w-[370px] lg:w-[100%] max-sm:ml-[-10px]">
              Our Mission and vision has driven us to the right path, “In the
              heart of rural communities, where the land stretches wide and the
              horizon seems endless, there’s a quiet struggle that often goes
              unnoticed. Here, life moves at a different pace, and the
              challenges are as vast as the fields. Yet, it’s in these very
              places that our efforts can make the most profound difference.
            </p>
          </div>

          <div className="w-[100%] md:mt-9">
            <img src="/src/assets/community-image-1.jpeg" alt="" />
          </div>
        </div>

        <div className="flex max-sm:flex-col lg:flex-row-reverse md:gap-10 lg:gap-10 px-5 md:pt-10">
          <div className="lg:w-[100%] font-roboto lg:mt-[100px]">
            <h1 className="text-center text-[20] md:text-[22px] lg:text-[38px] font-merriweather py-5 md:py-2 lg:py-5">
              Widows Empowerment And Aid
            </h1>
            <p className="px-5 md:px-2 lg:px-[10px] shadow-lg border-2 py-10 md:py-0 md:w-[370px] lg:w-[100%] ">
              Imagine a small village where access to clean water is a daily
              challenge. By setting up a well, we’re not just providing a
              resource; we’re giving hope and health to families who have long
              walked miles for a basic necessity. To date we have adopted 15
              widows families whom we regularly supply with food items and other
              households amenities.
            </p>
          </div>
          <div className="w-[100%] mt-10 md:mt-8">
            <img src="/src/assets/widows-image-3.jpeg" alt="" />
          </div>
        </div>

        <div className=" mt-10 lg:ml-5">
          <div className="py-5">
            <h1 className=" text-[20] md:text-[22px] lg:text-[30px] font-merriweather">
              Youth Empowerment and Drugs Eradication{" "}
            </h1>

            <p className="px-2 font-roboto lg:w-[50%] py-5 shadow-lg border-2">
              Helping the needy in these rural areas isn’t just about charity;
              it’s about recognizing our shared humanity and the impact of our
              actions. Each contribution, whether big or small, builds a bridge
              between worlds, transforming lives with the simple yet powerful
              act of caring. Together, we can ensure that even in the most
              remote corners, everyone has a chance to thrive and hope for a
              better tomorrow.”
            </p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
