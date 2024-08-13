import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

export const Hero = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="w-[100%] sm:h-[500px] md:h-[400px] xl:h-[600px] overflow-hidden ]">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
      >
        <div data-src="/src/assets/slider-image/image-1.jpg" />
        <div data-src="/src/assets/slider-image/image-2.jpg" />
        <div data-src="/src/assets/slider-image/image-3.jpg" />
        <div data-src="/src/assets/slider-image/image-4.jpg" />
        <div data-src="/src/assets/slider-image/image-5.jpg" />
        <div data-src="/src/assets/slider-image/image-6.jpg" />
        <div data-src="/src/assets/slider-image/image-7.jpg" />
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
  );
};
