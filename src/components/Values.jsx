import React from 'react'
import videoBg from "../assets/vid3.mp4"

export const Values = () => {
  return (
    <div className="bg-[#070737] md:p-1 mt-[90px]">
      <div className="flex max-sm:flex-col max-md:flex-col sm:mt-0  lg:mt-0 lg:pt-1 px-0 lg:py-5">
        <div className="lg:w-[1000px] md:mt-[90px] lg:mt-[10px] md:ml-5">
          {/* <video src={videoBg} autoPlay loop muted /> */}
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/I8_RJZa_rW8?si=LdJRNXQlahDCkefb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="max-sm:py-5 lg:py-10 bg-[#070737] md:mt-0">
          <h1 className="font-merriweather sm:text-[20px] md:text-[30px] lg:text-[35px] text-center text-[#fff] lg:mt-[10px]">
            {" "}
            Objectives
          </h1>
          <p className="md:w-[369px] lg:w-[80%] box shadow-lg max-sm:mt-4 px-10 py-2 lg:py-5 text-[#fff]">
            <ol className="font-roboto">
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
