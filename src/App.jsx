import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/Sticky/Footer"
import Home from "./pages/Home";
import Gallery from "./pages/GalleryPage";
import GiftsNaira from "./pages/GiftsNaira";
import GiftsDollar from "./pages/GiftsDollar";
import GiftsEuro from "./pages/GiftsEuro";
import ScrollToTop from "./components/ScrollToTop";
// import FloatingWhatsApp from "./components/Floating Whatsapp";

import MobileGiftButton from "./components/MobileGiftButton";
// import Rsvp from "./pages/Rsvp";
// import Gifts from "./components/Gifts";

export default function App() {
  return (
    <Router>

      <MobileGiftButton />
      <ScrollToTop />
      {/* <FloatingWhatsApp /> */}

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/gifts/naira" element={<GiftsNaira />} />
        <Route path="/gifts/dollar" element={<GiftsDollar />} />
        <Route path="/gifts/euro" element={<GiftsEuro />} />

        {/* <Route path="/rsvp" element={<Rsvp />} /> */}
        {/* <Route path="/gifts" element={<Gifts />} /> */}


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />

    </Router>
  );
}
