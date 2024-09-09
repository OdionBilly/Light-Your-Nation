
export const Weare = () => {

  return (
    <div className=" bg-[#070737]">
      <h1 className="py-2 font-merriweather text-[#fff] text-[30px] text-left lg:text-[48px] ml-[50px] lg:ml-20">
        A Brief History{" "}
      </h1>{" "}
      <div className="flex justify-between align-baseline max-sm:flex-col text-[#fff] ">
        <p className=" lg:text-[20px] ml-0 lg:ml-[80px] px-5 lg:px-5 mt-4 w-[100%]  py-10 lg:py-[70px]">
          Light your nation has it's Inception back in the year 2020, where the
          idea to bring together and mentor young people was birthed. The
          training focused on harnessing the power of the mind to dignifying the
          lives of the young men. Then, weekly meetings on mentorship and
          quarterly football outreaches were held and to date over 2500 men have
          been impacted. Recently (2023), as a foundation we adopted other
          community empowerment pillars such advocacy against drug abuse and
          widows adoption to enhance our ambitions to transforming the whole
          community. To date we have adopted 15 widows families whom we
          regularly supply with food items and other households amenities.
        </p>
        <div className="w-[100%] shadow-lg mt-0 md:mt-[50px] lg:mt-0">
          <img
            src="/src/assets/slide-image-1.png"
            className="lg:size-[90%]"
            alt=""
          />
        </div>
      </div>
      {/* section 2 */}
      <div className="overflow-hidden flex flex-col md:flex-col lg:flex-row gap-10">
        <div className="overflow-hidden ml-[10px] lg:ml-[80px] mt-10 md:mt-5 lg:mt-10 flex flex-col md:flex-row">
          <img
            src="/src/assets/doctors..png"
            className="size-[380px] lg:size-[400px]"
            alt=""
          />

          <div className="py-10 bg-[#f4ccd3]">
            <h1 className="font-merriweather text-[23px] md:text-[23px] lg:text-[24px] px-5">
              Community Health Outreach
            </h1>
            <p className=" font-roboto w-[370px] py-5 px-5 text-[13px] lg:text-[15px] ">
              Light Your Nation organisation also reaches out to communities who
              find it difficult to have access to health care, such as the
              locals receiving eye check up, dental, Hearing, E.N.T,
              Consultation, mobile laboratory services, blood pressure care,
              Diabetes screening, general body check up, blood sugar level and
              many more.
            </p>
          </div>
        </div>

        <div className=" text-[#fff] ml-[10px] mt-10 md:mt-5 lg:mt-10 flex flex-col md:flex-row lg:flex-col md:gap-5 xl:gap-0">
          <div className="md:ml-2 xl:ml-0 md:mt-20 xl:mt-0">
            <h1 className="font-merriweather text-[25px] max-sm:px-4 text-left">
              Home Orphanage Visit
            </h1>
            <p className="w-[300px] text-[15px] text-left font-roboto max-sm:px-4 py-1 ">
              Food items, 2 double decker beds, 4 mattresses, 4 blankets ,
              clothes and kitchen utensils distribution to ADASA children
              orphanage in Machakos county.
            </p>
          </div>

          <img
            src="/src/assets/child.jpg"
            className="w-[370px] md:w-[410px] lg:w-[350px] mt-5"
            alt=""
          />
        </div>
      
      </div>
    </div>
  );
};
