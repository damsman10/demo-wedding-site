import { useState } from "react";
import { Link } from "react-router-dom";
import ShareButton from "../ShareButton";

const HeaderPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold tracking-wider"
        >
          JANE <span className="text-[#f1b42f]">&</span> JOHN
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white text-base font-medium">
          <Link to="/#our-story" className="hover:text-[#f1b42f] transition">
            OUR STORY
          </Link>
          <Link to="/#party" className="hover:text-[#f1b42f] transition">
            MEET THE PARTY
          </Link>
          <Link to="/#gifts" className="hover:text-[#f1b42f] transition">
            GIFT
          </Link>
          <Link to="/#rsvp" className="hover:text-[#f1b42f] transition">
            RSVP
          </Link>
          <Link to="/gallery" className="hover:text-[#f1b42f] transition">
            GALLERY
          </Link>
          
          {/* SHARE BUTTON (TEXT VARIANT) */}
          <ShareButton variant="text" />
          
        </nav>

        {/* Confirm Button */}
        <Link
          to="/#gifts"
          className="hidden md:block bg-[#f1b42f] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:brightness-110 transition"
        >
          SEND GIFT
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/60 text-white px-6 py-6 space-y-4 flex flex-col items-center">
          <Link to="/#our-story" className="block hover:text-[#f1b42f] transition">
            OUR STORY
          </Link>
          <Link to="/#party" className="block hover:text-[#f1b42f] transition">
            BRIDESMAIDS & GROOMSMEN
          </Link>
          <Link to="/#gifts" className="block hover:text-[#f1b42f] transition">
            GIFT
          </Link>
          <Link to="/#rsvp" className="block hover:text-[#f1b42f] transition">
            RSVP
          </Link>
          <Link to="/gallery" className="block hover:text-[#f1b42f] transition">
            GALLERY
          </Link>
          <Link
            to="/#gifts"
            className="block bg-[#f1b42f] text-white px-6 py-3 rounded-full text-center font-semibold mt-3 hover:brightness-110 transition"
          >
            SEND GIFT
          </Link>

          <ShareButton />
          
        </div>
      )}
    </header>
  );
};

export default HeaderPage;
