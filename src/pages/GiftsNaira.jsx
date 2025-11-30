import HeaderPage from "../components/Sticky/HeaderPage";
import { Link } from "react-router-dom";

const GiftsNaira = () => {
  return (
    <section className="py-24 px-6 bg-white text-center">
      
      <HeaderPage />

      {/* header with gold lines */}
      <div className="font-montserrat flex items-center justify-center mb-6">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-bold text-[#a67304]">
          Bless Us With A Gift (₦)
        </h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
        Your support means the world to us.   
        Thank you for choosing to be a blessing. 💛
      </p>

      {/* EMBEDDED PAYSTACK PAYMENT PAGE */}
      {/* <div className="mb-16 flex justify-center">
        <iframe
          src="https://paystack.shop/pay/xv1-zobzym"
          className="w-full md:w-2/4 h-[750px] rounded-xl border"
          allow="payment *"
        ></iframe>
      </div> */}

      {/* BANK TRANSFER DETAILS */}
      <div className="max-w-xl mx-auto bg-[#fffdf5] border border-[#e4c989] rounded-xl p-8 shadow-sm mb-16">
        <h3 className="text-2xl font-semibold text-[#b3871f] mb-4">
        </h3>

        <p className="text-lg text-gray-800 mb-2">
          <strong>Bank Name:</strong> Access Bank
        </p>
        <p className="text-lg text-gray-800 mb-2">
          <strong>Account Name:</strong> John & Jane Wedding Gift
        </p>
        <p className="text-lg text-gray-800 mb-6">
          <strong>Account Number:</strong> 0123456789
        </p>

        <button
          onClick={() => navigator.clipboard.writeText("0123456789")}
          className="px-6 py-3 bg-[#f1b42f] text-white rounded-full font-semibold hover:brightness-110 transition"
        >
          Copy Account Number
        </button>
      </div>

    {/* SWITCH TO EURO PAGE */}

    <div className="mt-10 sm:block hidden">
      <Link
        to="/gifts/euro"
        className="text-[#b3871f] text-lg font-semibold hover:underline inline-flex items-center gap-2"
      >
        Switch to Euro (€) Gift Page
        <span>→</span>
      </Link>
    </div>

      {/* SWITCH TO POUNDS PAGE */}
      <div className="mt-3 sm:block hidden">
      <Link
        to="/gifts/dollar"
        className="text-[#b3871f] text-lg font-semibold hover:underline inline-flex items-center gap-2"
      >
        Switch to dollar ($) Gift Page
        <span>→</span>
      </Link>
    </div>



    </section>
  );
};

export default GiftsNaira;
