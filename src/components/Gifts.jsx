import { Link } from "react-router-dom";
import flower1 from "../assets/coin.png";
import flower2 from "../assets/coin.png";

const Gifts = () => {
  return (
    <section id="gifts" className="relative py-24 px-6 bg-white text-center overflow-hidden">
      
      {/* FLOATING FLOWERS ANIMATION */}
      <img
        src={flower1}
        className="absolute w-12 opacity-40 top-10 left-[-120px] pointer-events-none float-drift-1"
      />

      <img
        src={flower2}
        className="absolute w-12 opacity-35 top-1/3 left-[-140px] pointer-events-none float-drift-2"
      />

      <img
        src={flower1}
        className="absolute w-12 opacity-30 bottom-10 left-[-110px] pointer-events-none float-drift-3"
      />

      {/* Decorative gold lines */}
      <div className="flex items-center justify-center mb-6">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <span className="mx-4 text-4xl font-bold text-[#f1b42f]">
          Gifts & Blessings
        </span>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
        As we begin this beautiful journey together, your love and support mean the world to us.
        <br />
        If you would like to bless us with a gift, we truly appreciate your kindness and generosity.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
        {/* Naira button */}
        <Link
          to="/gifts/naira"
          className="px-10 py-3 bg-[#f1b42f] text-white text-lg font-semibold rounded-full hover:brightness-110 transition shadow-md"
        >
          Send Naira (₦)
        </Link>

        {/* Pounds button (third) */}
        <Link
          to="/gifts/dollar"
          className="px-10 py-3 bg-[#f1b42f] text-white text-lg font-semibold rounded-full hover:brightness-110 transition shadow-md"
        >
          Send Dollar ($)
        </Link>

        {/* Euro button (second) */}
        <Link
          to="/gifts/euro"
          className="px-10 py-3 bg-[#f1b42f] text-white text-lg font-semibold rounded-full hover:brightness-110 transition shadow-md"
        >
          Send Euro (€)
        </Link>
      </div>

    </section>
  );
};

export default Gifts;
