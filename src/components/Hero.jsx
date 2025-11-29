import React, { useEffect, useState } from "react";
import bgp from "../assets/fruswoman.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set your wedding date here (from invitation card)
  const weddingDate = new Date("2025-12-31T15:00:00");

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
      className="relative py-24 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgp})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative text-center mt-20 px-6 md:px-12 text-white max-w-3xl space-y-3">
        {/* Couple Name */}
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-wide">JESUTOFUNMI</h1>
          <h1 className="text-4xl font-bold tracking-wide text-[#f1b42f]">&</h1>
          <h1 className="text-4xl font-bold tracking-wide">MICHAEL</h1>
        </div>

        {/* Invitation */}
        <p className="text-xl md:text-2xl">
          We joyfully invite you to attend our wedding ceremony
        </p>

        {/* CTA Button */}
        <a
          href="#rsvp"
          className="inline-block mt-4 md:mt-6 bg-[#f1b42f] hover:brightness-110 text-white text-lg md:text-xl px-10 py-3 rounded-full font-semibold transition"
        >
          RSVP
        </a>

        {/* Location & Date */}
        <div className="mt-4 md:mt-6 space-y-1 text-lg md:text-xl">
          <p>Rosewood Gardens, Lagos</p>
          <p>December 31, 2025</p>
          <p className="text-sm text-gray-200 mt-1">
            For inquiries or directions, contact Jesutofunmi at 08168965322
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mt-6 md:mt-8 flex justify-center gap-8 text-lg md:text-xl">
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
