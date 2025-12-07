import React, { useState } from "react";

const faqs = [
  {
    question: "When is the wedding ceremony and reception?",
    answer:
      "The wedding ceremony and reception will take place on Saturday, June 20th, 2026 at 2:00 PM."
  },
  {
    question: "Where is the venue?",
    answer:
      "The event will be held at Rosewood Garden Estate, 123 Celebration Avenue, Los Angeles, California."
  },
  {
    question: "What are the colours of the day?",
    answer:
      "The colours of the day are Ivory and Soft Gold."
  },
  {
    question: "Is the event strictly by invitation?",
    answer:
      "Yes, attendance is by invitation only. Please bring your invitation card."
  },
  {
    question: "Do I need an access card to enter?",
    answer:
      "Yes, guests are required to present their invitation at the entrance."
  },
  {
    question: "Who can I contact if I have questions or need help finding the venue?",
    answer:
      "For inquiries or assistance on the wedding day, you can reach out to the event coordinator at (123) 456-7890."
  },
  {
    question: "What time should guests arrive?",
    answer:
      "The program starts at 2:00 PM, so guests are encouraged to arrive a bit earlier to be seated comfortably."
  },
  {
    question: "Is there a dress code?",
    answer:
      "There is no strict dress code, but guests are welcome to dress in the event colours: Ivory and Soft Gold."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-yellow-100 via-yellow-50 to-white text-center">
      {/* Section Header with divider lines */}
      <div className="flex items-center justify-center mb-10">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-raleway font-bold text-[#b27c33]">FAQs</h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      <div className="max-w-4xl mx-auto text-left space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 font-montserrat rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              {faq.question}
              <span className="text-[#f1b42f] font-bold">{openIndex === index ? "-" : "+"}</span>
            </h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
