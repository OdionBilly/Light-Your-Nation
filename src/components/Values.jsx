import React from 'react'
import videoBg from "../assets/vd.mp4"

export const Values = () => {
  return (
    <div className=''>
      <div className='bg-slate-500 flex max-sm:flex-col lg:mt-10'>
        <div className=" lg:w-[1000px]">
          <video src={videoBg} autoPlay loop muted />
        </div>

        <div className='max-sm:py-5 lg:py-10 text-[#fff]'>
          <h1 className='font-merriweather sm:text-[20px] lg:text-[35px] text-center'> Objectives</h1>
          <p className='box shadow-lg max-sm:mt-4 px-10'>
            <ol className='font-roboto'>
              <li>
                * To raise young men into dignified men of integrity for
                strongfamilies and healthy communities.
              </li>
              <li>
                * To enhance sustained livelihoods for the vulnerable groups in
                the society
              </li>
              <li>
                * To foster entrepreneurial opportunities through skills
                acquisition.
              </li>
              <li>
                {" "}
                * To stimulate the unlocking of education potentials through
                provision of better learning materials and conditions for school
                kids.
              </li>
            </ol>
          </p>
        </div>
      </div>


    </div>
  );
}
