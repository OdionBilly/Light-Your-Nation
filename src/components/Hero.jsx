import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import image1 from "../assets/slider-image/image-1.jpg"
import image2 from "../assets/slider-image/image-2.jpg";
import image3 from "../assets/slider-image/image-3.jpg";
import image4 from "../assets/slider-image/image-4.jpg";
import image5 from "../assets/slider-image/image-5.jpg";
import image6 from "../assets/slider-image/image-6.jpg";
import image7 from "../assets/slider-image/image-7.jpg";






import "react-awesome-slider/dist/styles.css";

export const Hero = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="">
      <div className="">
        <div className="w-[100%] sm:h-[500px] md:h-[400px] xl:h-[600px] overflow-hidden ">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            // animation="slide"
          >
            <div data-src={image1} />
            <div data-src={image2} />
            <div data-src={image3} />
            <div data-src={image4} />
            <div data-src={image5} />
            <div data-src={image6}/>
            <div data-src={image7} />
          </AutoplaySlider>

          {/* <div className="text-left w-full py-4 pt-10 pl-12">
        <div>
          <h1 className="text-[50px] font-extrabold ">LIGHTING YOUR NATION </h1>
          <p className="w-[400px] py-4">
            With the passion that we have as an organisation, we do our best to
            give back to the community we have been on the field for so many
            years , And its our Joy for the world to know that the responsibilty
            for the world irrespective of the community you belong to , Affect
            postively and put a smile on someones face
          </p>
          <button className="px-6 py-2 bg-[#0f0f5f] text-[#f1f1f1]" type="button">
            SEE MORE
          </button>
        </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
