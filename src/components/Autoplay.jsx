import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container mb-12 gap-10 backdrop-contrast-125 bg-white/30 max-sm:w-[1024px] md:w-[100%]">
      <Slider
        {...settings}
        className="sm:px-5 md:px-[px] xl:px-[50px] py-2 overflow-hidden"
      >
        <div className="mb-[0px] p-4 shadow-lg bg-[gray] ">
          <p className=" px-5 xl:px-10 mt-5 xl:ml-10  ">
            "A few years ago, I was going through a really tough time
            financially and emotionally. I felt overwhelmed and unsure of how I
            will make through I’m deeply grateful for their support, and it’s
            inspired me to be there for others in need whenever I can."
            <h1 className="text-right">Mr Hassan</h1>
          </p>
        </div>
        <div className=" p-4 shadow-lg bg-[green] ">
          <p className=" px-5 xl:px-10 mt-5 xl:ml-10 ">
            "A few years ago, I was going through a really tough time
            financially and emotionally. I felt overwhelmed and unsure of how I
            will make through I’m deeply grateful for their support, and it’s
            inspired me to be there for others in need whenever I can."
            <h1 className="text-right">Mr Hassan</h1>
          </p>
        </div>

        <div className="p-4 shadow-lg bg-[red] ">
          <p className="px-5 xl:px-10 mt-5 xl:ml-10">
            "A few years ago, I was going through a really tough time
            financially and emotionally. I felt overwhelmed and unsure of how I
            will make through I’m deeply grateful for their support, and it’s
            inspired me to be there for others in need whenever I can."
            <h1 className="text-right">Mr Hassan</h1>
          </p>
        </div>
        <div className="p-4 shadow-lg bg-[purple]">
          <p className="px-5 xl:px-10 mt-5 xl:ml-10">
            "A few years ago, I was going through a really tough time
            financially and emotionally. I felt overwhelmed and unsure of how I
            will make through I’m deeply grateful for their support, and it’s
            inspired me to be there for others in need whenever I can."
            <h1 className="text-right">Mr Hassan</h1>
          </p>
        </div>
        <div className="p-4 shadow-lg bg-[orange]">
          <p className="px-5 xl:px-10 mt-5 xl:ml-10">
            "A few years ago, I was going through a really tough time
            financially and emotionally. I felt overwhelmed and unsure of how I
            will make through I’m deeply grateful for their support, and it’s
            inspired me to be there for others in need whenever I can."
            <h1 className="text-right">Mr Hassan</h1>
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
