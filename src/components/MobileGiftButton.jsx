import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MobileGiftButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust threshold based on your Hero height
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden z-50 flex items-center gap-2 px-2 transition-opacity duration-500 ${
        showButton ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Main static button */}
      <button
        className="bg-[#b27c33] text-white text-sm sm:text-base font-semibold py-3 px-6 rounded-full shadow-md hover:brightness-110 transition text-center whitespace-nowrap flex items-center gap-2"
      >
        Send Cash <span>→</span>
      </button>

      {/* Currency buttons */}
      <Link
        to="/gifts/naira"
        className="bg-[#b27c33] text-white text-sm font-semibold py-3 px-4 rounded-full shadow-md hover:brightness-110 transition text-center"
      >
        ₦
      </Link>
      <Link
        to="/gifts/dollar"
        className="bg-[#b27c33] text-white text-sm font-semibold py-3 px-4 rounded-full shadow-md hover:brightness-110 transition text-center"
      >
        $
      </Link>
      <Link
        to="/gifts/euro"
        className="bg-[#b27c33] text-white text-sm font-semibold py-3 px-4 rounded-full shadow-md hover:brightness-110 transition text-center"
      >
        €
      </Link>
    </div>
  );
};

export default MobileGiftButton;
