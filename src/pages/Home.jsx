import React from 'react'
// import videoBg from "../assets/vd.mp4";
import videoBg2 from "../assets/vid2.mp4";
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Cart } from '../components/Cart'
import { Footer } from '../components/Footer'
import { Testimonia } from '../components/Testimonia';

export const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className=" ">
        <Cart />
      </div>
      <div>
        <div className="flex max-sm:flex-col justify-between md:flex-row-reverse lg:flex-row  md:gap-10 lg:gap-10 px-5 w-[100%] mt-5 md:mt-10 lg:mt-[10px]">
          <div className="lg:w-[100%] sm:mt-5 lg:mt-[180px] font-roboto max-sm:mt-10 ">
            <h1 className="text-center text-[20px] md:text-[22px] lg:text-[38px] font-merriweather py-4 md:py-0 lg:py-5 ">
              Focusing on the Boy Child
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
      </div>

      {/* Values */}
      <div className="sm:ml-0 md:ml-[10px] lg:ml-0  backdrop-opacity-10 backdrop-invert bg-white/50">
        <div className="max-sm:mt-10">
          <div className="flex max-sm:flex-col md:flex-row-reverse xl:flex-row sm:mt-0 gap-0 md:gap-1 lg:gap-1 lg:mt-0 lg:pt-1 px-0 lg:py-5">
            <div className="lg:w-[1000px] md:mt-[70px] lg:mt-[10px] md:ml-2 px-5 max-sm:w-[330px] overflow-hidden">
              {/* <video src={videoBg2} controls muted /> */}
              <div className=''>
                <iframe
                  src="https://www.youtube.com/embed/I8_RJZa_rW8?si=LdJRNXQlahDCkefb"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="max-sm:py-5 lg:py-10  md:mt-0">
              <h1 className="font-merriweather sm:text-[20px] md:text-[30px] lg:text-[35px] text-center lg:mt-[9px]">
                {" "}
                Our privious projects
              </h1>
              <p className="md:w-[369px] lg:w-[80%] box shadow-lg max-sm:mt-4 max-sm:px-5 py-2 lg:py-5  ">
                <ul className="font-roboto px-3">
                  <li>
                    Skill acquisition program in 'shoe making and leather
                    production' that impact 20+ young people and widows.
                  </li>
                  <li>
                    * Over 10 successful football outreaches with 500+youths in
                    participants in both 2022 and 2023.
                  </li>
                  <li>
                    * Medical camp in partnership with the dignified future that
                    reached to more than 2000 kiambaa locals in February 2024.
                  </li>
                  <li>
                    {" "}
                    * Medical camp in partnership with the dignified future that
                    reached to more than 2000 kiambaa locals in February 2024.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonia />
      <Footer />
    </div>
  );
}
