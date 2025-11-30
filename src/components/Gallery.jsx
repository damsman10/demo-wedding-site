import React, { useState } from "react";
import { Link } from "react-router-dom";
import couple from "../assets/couple.jpg";
import couple2 from "../assets/couple2.jpg";
import couple3 from "../assets/couple3.jpg";
import solidbg from "../assets/solidbg.jpg";

const HomeGallery = () => {
  const images = [couple, couple2, couple3];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <section id="gallery" style={{ backgroundImage: `url(${solidbg})` }} className="py-24 px-6 text-center">
      
      {/* Section Header with dividers */}
      <div className="flex items-center justify-center mb-12">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-raleway font-bold text-[#a67304]">Gallery</h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer border-4 border-[#f1b42f] hover:scale-105 transition"
            onClick={() => {
              setCurrentImage(img);
              setLightboxOpen(true);
            }}
          />
        ))}
      </div>

      {/* Button to full gallery page */}
      <Link
        to="/gallery"
        className="inline-block font-montserrat mt-8 px-8 py-3 bg-[#a67304] text-white rounded-full text-lg font-semibold hover:brightness-110 transition"
      >
        View Full Gallery
      </Link>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={currentImage}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </section>
  );
};

export default HomeGallery;
