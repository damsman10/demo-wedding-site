import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ShareButton from "../ShareButton";

const Footer = () => {
  return (
    <footer className="bg-[#a67304] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Appreciation Paragraph */}
        <div className="flex flex-col gap-6">
          <a href="#home" className="text-white text-2xl font-bold tracking-wider">
          JUDITH <span className="text-[#f1b42f]">&</span> OPE
        </a>
          <p className="text-lg mb-4">
            Thank you for visiting our wedding website. Your love, support, and presence mean the world to us. We’re excited to celebrate this special day with you!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-center mb-4">Quick Links</h3>
          <ul className="space-y-2 text-center">

            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#our-story" className="hover:underline">Our Story</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#rsvp" className="hover:underline">RSVP</a></li>
            <li><a href="#gifts" className="hover:underline">Gifts</a></li>

          </ul>
        </div>


        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-gray-100 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-gray-100 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-gray-100 transition" />
            </a>
          </div>
        
          <div className="text-center mt-6">
            <ShareButton />
          </div>
        </div>
        
      </div>

      {/* Bottom line: copyright + credit */}
      <div className="mt-8 border-t border-white/40 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} John & Jane's Wedding.</p>
        <p className="mt-2 pb-4 sm:pb-0">
          Developed by <a href="https://syndeco-technologies.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Syndeco Technologies</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
