import React, { useEffect, useRef, useState } from "react";

const Marquee = () => {
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    // Mengambil tinggi maksimal dari semua card
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((ref) => ref.offsetHeight);
      setMaxHeight(Math.max(...heights));
    }
  }, []);

  const profiles = [
    { name: "Alif Ramadhan", role: "Fullstack Developer" },
    { name: "Rafly Aziz", role: "Fullstack Developer" },
    { name: "Wahyu Anang", role: "Fullstack Developer" },
    { name: "Tegar Alfa Rizzi", role: "Fullstack Developer" },
    { name: "Nita Fitrotul", role: "Fullstack Developer" },
    { name: "Muhammad Rifqi", role: "Fullstack Developer" },
    { name: "Gede Brandon", role: "Fullstack Developer" },
    { name: "Jetro Sulthan", role: "Fullstack Developer" },
  ];

  return (
    <div className="text-white py-8 bg-white p-4">
      <marquee behavior="scroll" direction="left" scrollamount="10">
        <div className="flex space-x-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-lg`}
              style={{ minHeight: `${maxHeight}px` }}
            >
              <img
                src="https://via.placeholder.com/100x100"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <div className="text-center">
                <p className="text-sm text-gray-700">{profile.role}</p>
                <p className="mt-2 text-gray-500">{profile.name}</p>
              </div>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
