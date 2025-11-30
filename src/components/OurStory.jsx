import Groom from "../assets/man.jpeg";
import Bride from "../assets/woman.jpg";
import Slider from "react-slick";

// Import Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import assets
import flowerright from "../assets/flowerright.png";
import flowerleft from "../assets/flowerleft.png";

const OurStory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="our-story" className="relative py-24 px-6 bg-white text-center">
      {/* Wedding flowers at top left and top right */}
      <div className="absolute -top-11 left-0 w-50 h-50">
        <img
          src={flowerleft}
          alt="Wedding Flower"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute -top-11 right-0 w-50 h-50">
        <img
          src={flowerright}
          alt="Wedding Flower"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Section Header with dividers */}
      <div className="flex items-center justify-center mb-12">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-raleway font-bold text-[#b27c33]">Our Story</h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      {/* Responsive layout: Slider on mobile */}
      <div className="md:hidden font-montserrat">
        <Slider {...settings}>
          {/* Groom's Slide */}
          <div className="flex flex-col items-center">
            <img
              src={Groom}
              alt="Groom"
              className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]"
            />
            <p className="text-xl text-gray-800">
              From the moment we met, I knew there was something special. Our bond grew stronger over time, filled with shared laughter, adventures, and love. I can’t wait to call her my wife.
            </p>
          </div>

          {/* Bride's Slide */}
          <div className="flex flex-col items-center">
            <img
              src={Bride}
              alt="Bride"
              className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]"
            />
            <p className="text-xl text-gray-800">
              The day I met him, I knew my life was about to change. He brought joy, laughter, and love into my life, and I can’t imagine spending my future with anyone else but him.
            </p>
          </div>
        </Slider>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center items-center gap-20">
        {/* Groom's Story */}
        <div className="flex flex-col items-center">
          <img
            src={Groom}
            alt="Groom"
            className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]"
          />
          <p className="text-xl text-gray-800 max-w-lg">
            From the moment we met, I knew there was something special. Our bond grew stronger over time, filled with shared laughter, adventures, and love. I can’t wait to call her my wife.
          </p>
        </div>

        {/* Bride's Story */}
        <div className="flex flex-col items-center">
          <img
            src={Bride}
            alt="Bride"
            className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]"
          />
          <p className="text-xl text-gray-800 max-w-lg">
            The day I met him, I knew my life was about to change. He literally brought joy, laughter, and love into my life, and I can’t imagine spending my future with anyone else but him.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
