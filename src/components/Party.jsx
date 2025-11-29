import React from "react";

// Example assets
import bridesmaid1 from "../assets/woman.jpg";
import bridesmaid2 from "../assets/woman.jpg";
import groomsman1 from "../assets/man.jpeg";
import groomsman2 from "../assets/man.jpeg";
import planner from "../assets/woman.jpg"; // Event planner
import officiant from "../assets/man.jpeg"; // Officiant

const Party = () => {
  const members = [
    { name: "Alice", role: "Bridesmaid", img: bridesmaid1 },
    { name: "Sophia", role: "Bridesmaid", img: bridesmaid2 },
    { name: "David", role: "Groomsman", img: groomsman1 },
    { name: "James", role: "Groomsman", img: groomsman2 },
    { name: "Lara", role: "Event Planner", img: planner },
    { name: "Rev. Michael", role: "Officiant", img: officiant },
  ];

  return (
    <section id="party" className="py-24 px-6 bg-gradient-to-r from-yellow-100 via-yellow-50 to-white text-center">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-10">
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
        <h2 className="mx-4 text-4xl font-bold text-[#b27c33]">
          Wedding Party
        </h2>
        <span className="w-16 h-[2px] bg-[#f1b42f]"></span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-1 transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-2">
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Party;
