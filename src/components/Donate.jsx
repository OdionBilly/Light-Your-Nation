import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Donate = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div>
        <div className="hero bg-base-200 min-h-screen px-[100px]">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <div>
                <h1 className="text-5xl font-bold">kindly Donate !</h1>
              </div>
            </div>
          </div>

          <div className="mt-[50px] flex flex-col xl:flex-row gap-10 bg-slate-500 text-[#fff]">
            <img
              src="/src/assets/mpesa image .png"
              className="shadow-2xl"
              alt=""
            />
            <div className="mt-10">
              <p className="font-merriweather text-[20px] ">0757021824</p>
              <p className="font-merriweather text-[20px] ">0796279021</p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row py-[50px] text-[#fff] mt-[50px]">
            <img src="/src/assets/Bank.png" className="shadow-2xl" alt="" />

            <div className=" bg-slate-500 px-10">
              <p className="mt-10 font-merriweather text-[20px] py-5">ACOUNT NUMBER.</p>
              <p>051000020724</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
