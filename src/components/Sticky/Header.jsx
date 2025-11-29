import { useState } from "react";
import ShareButton from "../ShareButton";
import logo from "../../assets/ojlogo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        {/* <a href="#home" onClick={(e) => handleScroll(e, "home")} className="text-white text-2xl font-bold tracking-wider">
          JANE <span className="text-[#f1b42f]">&</span> JOHN
        </a> */}
        <a href="#home" onClick={(e) => handleScroll(e, "home")}>
          <img src={logo} alt="" className="w-18" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white text-base font-medium">
          <a href="#our-story" onClick={(e) => handleScroll(e, "our-story")} className="hover:text-[#f1b42f] transition">OUR STORY</a>
          <a href="#party" onClick={(e) => handleScroll(e, "party")} className="hover:text-[#f1b42f] transition">MEET THE PARTY</a>
          <a href="#faq" onClick={(e) => handleScroll(e, "gifts")} className="hover:text-[#f1b42f] transition">FAQ</a>
          <a href="#rsvp" onClick={(e) => handleScroll(e, "rsvp")} className="hover:text-[#f1b42f] transition">RSVP</a>
          <a href="#gallery" onClick={(e) => handleScroll(e, "gallery")} className="hover:text-[#f1b42f] transition">GALLERY</a>

          {/* SHARE BUTTON (TEXT VARIANT) */}
          <ShareButton variant="text" />
        </nav>

        {/* Desktop Gift Button */}
        <a
          href="#gifts"
          onClick={(e) => handleScroll(e, "gifts")}
          className="hidden md:block bg-[#758a2f] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:brightness-110 transition"
        >
          SEND GIFT
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/60 text-white px-6 py-6 flex flex-col items-center space-y-4">
          <a href="#our-story" onClick={(e) => handleScroll(e, "our-story")} className="hover:text-[#f1b42f] transition">OUR STORY</a>
          <a href="#party" onClick={(e) => handleScroll(e, "party")} className="hover:text-[#f1b42f] transition">MEET THE PARTY</a>
          <a href="#faq" onClick={(e) => handleScroll(e, "faq")} className="hover:text-[#f1b42f] transition">FAQ</a>
          <a href="#rsvp" onClick={(e) => handleScroll(e, "rsvp")} className="hover:text-[#f1b42f] transition">RSVP</a>
          <a href="#gallery" onClick={(e) => handleScroll(e, "gallery")} className="hover:text-[#f1b42f] transition">GALLERY</a>

          <a
            href="#gifts"
            onClick={(e) => handleScroll(e, "gifts")}
            className="bg-[#758a2f] text-white px-6 py-3 rounded-full text-center font-semibold mt-3 hover:brightness-110 transition w-full text-sm"
          >
            SEND GIFT
          </a>

          <ShareButton />

        </div>
      )}
    </header>
  );
};

export default Header;
