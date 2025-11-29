import { useEffect, useState } from "react";
import bgp from "../assets/herobg.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Wedding date from invitation
  const weddingDate = new Date("2026-03-07T13:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative pt-36 pb-18 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgp})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative text-center mt-20 px-6 md:px-12 text-white max-w-3xl">
        {/* Couple Names */}
        <div className="relative block">
          <h1 className="text-5xl mb-16 md:text-6xl font-playfair tracking-wide block">
            JUDITH
          </h1>

          {/* Ampersand */}
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-7xl text-[#f1b42f] font-playfair">
            &
          </span>

          <h1 className="text-5xl mb-6 md:text-6xl font-playfair tracking-wide block">
            OPEOLUWA
          </h1>
        </div>

        {/* Invitation */}
        <p className="text-xl md:text-2xl font-courgette mt-4">
          We joyfully invite you to attend our wedding ceremony
        </p>

        {/* RSVP Button */}
        <a
          href="#rsvp"
          className="inline-block mt-6 bg-[#758a2f] hover:brightness-110 text-white text-lg md:text-xl px-10 py-3 rounded-full font-semibold transition"
        >
          RSVP
        </a>

        {/* Location & Date (RESTORED) */}
        <div className="mt-4 md:mt-6 space-y-1 text-lg md:text-xl font-montserrat">
          <p>Pleasant Event Center, Ikeja, Lagos</p>
          <p>March 07, 2026</p>
          {/* <p className="text-sm text-gray-200 mt-1 font-raleway">
            For inquiries or directions, contact Jesutofunmi at 08168965322
          </p> */}
        </div>

        {/* Countdown Timer */}
        <div className="mt-8 flex justify-center gap-8 text-lg md:text-xl font-inter font-semibold">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
            const value = Object.values(timeLeft)[i];
            return (
              <div key={i} className="space-y-1">
                <span className="block font-bold text-2xl md:text-3xl">{value}</span>
                <div className="text-[#f1b42f]">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
