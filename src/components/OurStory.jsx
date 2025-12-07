import { useState } from "react";
import Groom from "../assets/man.jpeg";
import Bride from "../assets/woman.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurStory = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title, story) => {
    setModalTitle(title);
    setModalContent(story);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const groomStory = `
    We first met in the most unexpected way — at a friend’s small gathering where neither of us planned to stay long. 
    But the moment I started talking to her, everything slowed down. Her calm voice, her kindness, and the way she smiled 
    made me feel like I had known her for years.

    What began as a simple conversation turned into hours of laughter, shared stories, and an effortless connection. 
    It didn’t take long for me to realise that she brought a kind of peace and joy into my life that I had never felt before.

    Over time, our friendship grew into something deeper — something steady and genuine. 
    She became the person I looked forward to seeing, the person I trusted the most, and the one who made every day brighter.

    Asking her to marry me was the easiest decision I’ve ever made.
  `;

  const brideStory = `
    I didn’t expect anything unusual the day we met, but he quickly became someone unforgettable. 
    There was something warm and reassuring about him — 
    the way he listened, the way he laughed, and the effortless comfort he brought into every moment we shared.

    Our conversations flowed naturally, like we had known each other much longer than just a day. 
    Soon, he became a constant in my life — a source of support, joy, and genuine companionship.

    With him, love has always felt simple and true. 
    I found not just a partner, but my best friend — someone I trust deeply and look forward to building a life with.

    Saying “yes” to him was the easiest and most beautiful choice I’ve ever made.
  `;

  const getPreview = (story) => {
    const paragraphs = story.trim().split("\n").filter(p => p.trim() !== "");
    return paragraphs.slice(0, 2).join("\n\n");
  };

  return (
    <section id="our-story" className="relative py-24 px-6 bg-white text-left">

      <div className="flex items-center justify-center mb-12">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-raleway font-bold text-center text-[#b27c33]">
          Our Story
        </h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      {/* MOBILE */}
      <div className="md:hidden font-montserrat">
        <Slider {...settings}>

          {/* Groom */}
          <div className="flex flex-col text-center items-center">
            <img src={Groom} alt="Groom"
              className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]" />

            <p className="text-[18px] text-gray-800 whitespace-pre-line">
              {getPreview(groomStory)}
            </p>

            <button
              className="mt-4 text-[#b27c33] font-semibold"
              onClick={() => openModal("Groom’s Story", groomStory)}
            >
              Read More
            </button>
          </div>

          {/* Bride */}
          <div className="flex flex-col text-center items-center">
            <img src={Bride} alt="Bride"
              className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]" />

            <p className="text-[18px] text-gray-800 whitespace-pre-line">
              {getPreview(brideStory)}
            </p>

            <button
              className="mt-4 text-[#b27c33] font-semibold"
              onClick={() => openModal("Bride’s Story", brideStory)}
            >
              Read More
            </button>
          </div>

        </Slider>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex justify-center gap-20">
        
        {/* Groom */}
        <div className="flex flex-col items-center max-w-lg">
          <img src={Groom} alt="Groom"
            className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]" />

          <p className="text-[18px] text-gray-800 whitespace-pre-line">
            {getPreview(groomStory)}
          </p>

          <button
            className="mt-4 text-[#b27c33] font-semibold"
            onClick={() => openModal("Groom’s Story", groomStory)}
          >
            Read More
          </button>
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center max-w-lg">
          <img src={Bride} alt="Bride"
            className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-[#b27c33]" />

          <p className="text-[18px] text-gray-800 whitespace-pre-line">
            {getPreview(brideStory)}
          </p>

          <button
            className="mt-4 text-[#b27c33] font-semibold"
            onClick={() => openModal("Bride’s Story", brideStory)}
          >
            Read More
          </button>
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-xl w-full p-6 relative shadow-xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-[#b27c33] mb-4">
              {modalTitle}
            </h3>

            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {modalContent}
            </p>

            <button
              className="absolute top-3 right-4 text-gray-500 text-xl hover:text-black"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurStory;
