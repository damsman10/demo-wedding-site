import React, { useState } from "react";

const Rsvp = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState(""); // updated
  const [response, setResponse] = useState("");
  const [guests, setGuests] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !phone || !response) return;
    if (response === "Joyfully Accept" && !guests) return;

    const payload = {
      fullName,
      phone, // updated
      response,
      guests: response === "Joyfully Accept" ? guests : "0",
    };

    try {
      setLoading(true);

      await fetch(
        "https://script.google.com/macros/s/AKfycbx4CPhO179g69J0dZI1Kl9XFWbcAcEFfZfjS2_V9CsjFocQPdt8ZklJA7eTAqlG6mvr/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      setShowModal(true);

      // Clear form
      setFullName("");
      setPhone(""); // updated
      setResponse("");
      setGuests("");
    } catch (error) {
      console.error("RSVP ERROR:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="py-24 px-6 text-center">
      {/* Title */}
      <div className="flex items-center justify-center mb-6">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-bold text-[#f1b42f]">RSVP</h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      <p className="text-xl text-gray-700 mb-8">
        Please let us know if you'll be attending our wedding.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">

        {/* Full Name */}
        <div>
          <label className="block text-lg text-gray-800 text-left mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 border border-[#f1b42f] rounded-md text-lg focus:ring-2 focus:ring-[#f1b42f]"
            placeholder="Your full name"
            required
          />
        </div>

        {/* WhatsApp Phone Number */}
        <div>
          <label className="block text-lg text-gray-800 text-left mb-2">
            WhatsApp Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-[#f1b42f] rounded-md text-lg focus:ring-2 focus:ring-[#f1b42f]"
            placeholder="e.g. +2348012345678"
            required
          />
        </div>

        {/* Response */}
        <div>
          <label className="block text-lg text-gray-800 text-left mb-2">
            Will you attend?
          </label>
          <select
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="w-full p-3 border border-[#f1b42f] rounded-md text-lg focus:ring-2 focus:ring-[#f1b42f]"
            required
          >
            <option value="">Select an option</option>
            <option value="Joyfully Accept">Joyfully Accept</option>
            <option value="Regretfully Decline">Regretfully Decline</option>
          </select>
        </div>

        {/* Guests (conditional) */}
        {response === "Joyfully Accept" && (
          <div>
            <label className="block text-lg text-gray-800 text-left mb-2">
              Number of Attendees (including you)
            </label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-3 border border-[#f1b42f] rounded-md text-lg focus:ring-2 focus:ring-[#f1b42f]"
              placeholder="e.g. 1, 2, 3"
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-full font-semibold mt-6 transition 
            ${loading ? "bg-gray-400" : "bg-[#f1b42f] text-white hover:brightness-110"}`}
        >
          {loading ? "Submitting..." : "Submit RSVP"}
        </button>
      </form>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl p-8 max-w-md w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-[#f1b42f] mb-4">
              🎉 Thank You!
            </h3>

            <p className="text-gray-700 mb-6">
              Your RSVP has been received.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-[#f1b42f] text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rsvp;
