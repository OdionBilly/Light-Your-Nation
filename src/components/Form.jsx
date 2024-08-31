import React from 'react'

export const Form = () => {
  return (
    <div className="bg-[#242424] py-10 text-[#fff]">
      <div className=" lg:flex justify-between align-baseline  ">
        <div className="bg-[#242424] text-[#fff] text-center lg:text-left font-spacegrotesk px-5 lg:px-[100px] py-10 lg:py-6">
          <h1 className="text-[40px] lg:text-[80px] ">Contact</h1>
          <p className="text-[#d9d9d9] md:px-[170px] lg:px-10 lg:text-left lg:ml-[-30px]">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-[#242424] text-[#fff] px-5 md:px-[190px] py-8 lg:py-10 ">
          <form className=" font-spacegrotesk flex flex-col space-y-4 w-[342px] md:w-[400px] ">
            <input
              type="text"
              placeholder="NAME"
              className="h-12 w-full px-2 border-b-[1px] bg-transparent outline-none"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="h-12 w-full px-2 placeholder:white outline-none border-b-[1px] bg-transparent"
            />
            <input
              type="text"
              placeholder="MESSAGE"
              className="h-12 w-full px-2 pb-8 placeholder:white border-b-[1px] bg-transparent outline-none"
            />
          </form>
          <button
            className=" ml-[235px] px-2 text-[14px]  border-b-[0.1px] mt-5"
            type="button"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>

      {/*Section 2  */}

      <div className='text-center px-5'>
        <p>
          Your Donation Counts, Join Us to Lightened The Nation
        </p>
      </div>
    </div>
  );
}
