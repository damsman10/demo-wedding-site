import React, { useState } from "react";
import HeaderPage from "../components/Sticky/HeaderPage";
import couple from "../assets/couple.jpg";
import couple2 from "../assets/couple2.jpg";
import couple3 from "../assets/couple3.jpg";
import couple4 from "../assets/couple4.jpg";
import couple5 from "../assets/couple5.jpg";
import couple6 from "../assets/herobg.jpg";

const GalleryPage = () => {
  const images = [
    couple,
    couple2,
    couple3,
    couple4,
    couple5,
    couple6,
    // ...add as many as you like
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <section className="py-24 px-6 text-center">
      
      <HeaderPage />

      {/* Section Title with dividers */}
      <div className="flex items-center justify-center mb-12">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h1 className="mx-4 text-5xl font-bold text-[#a67304]">Wedding Gallery</h1>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery image ${index + 1}`}
            loading="lazy"
            className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={() => {
              setCurrentImage(img);
              setLightboxOpen(true);
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setLightboxOpen(false)}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setLightboxOpen(false)}
        >
          <img
            src={currentImage}
            alt="Enlarged wedding image"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
