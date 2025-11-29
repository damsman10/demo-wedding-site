// FloatingWhatsApp.jsx
import React from "react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/2348168965322"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 p-4 rounded-full transition transform hover:scale-110 z-50 flex items-center justify-center shadow-lg"
      style={{
        background: "#ffffff",               // white button
        border: "2px solid #FFD700",        // gold ring
        boxShadow: "0 6px 18px rgba(218,165,32,0.35)", // soft gold glow
      }}
    >
      {/* FULL, WORKING WHATSAPP SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="#DAA520" // gold icon
        className="w-6 h-6"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 224.8 32c-118.7 0-214.6 96-214.6 214.7 
                0 37.8 9.9 74.6 28.7 107L0 480l130.6-38.2c31.4 17.2 66.8 26.3 102.9 26.3h.1
                c118.6 0 214.5-96 214.5-214.7 0-57.3-22.3-111.3-67.2-156.3zM224.7 439.6
                c-32.2 0-63.8-8.7-91.2-25.1l-6.5-3.9-77.4 22.6 23.1-75.7-4.2-6.8c-17-27.7-26-59.6-26-92.1
                0-95.6 77.7-173.3 173.4-173.3 46.2 0 89.6 18 122.3 50.7 32.7 32.6 50.7 76 50.7 122.2
                0 95.6-77.7 173.4-173.4 173.4zm101.3-130.1c-5.5-2.8-32.8-16.1-37.9-17.9-5.1-1.9-8.8-2.8-12.5 
                2.8-3.7 5.6-14.3 17.9-17.5 21.6-3.2 3.7-6.4 4.2-11.9 1.4-32.2-16.1-53.3-28.8-74.8-65.1-5.7-9.8 
                5.7-9.1 16.1-30.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.1-41.3-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2 
                -3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19.1-19.4 46.6 0 27.5 19.9 54.2 22.7 58 
                2.8 3.7 38.9 59.3 94.3 83.1 13.1 5.6 23.3 8.9 31.2 11.4 13.1 4.2 25 3.6 34.4 2.2 
                10.5-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.4z"/>
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
