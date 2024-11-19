import React from 'react';
import girl from '../../assets/images/girl.jpg';
import boy from '../../assets/images/boy.jpg';

const Marquee = () => {
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
    <div className="py-8 p-4">
      <marquee behavior="scroll" direction="left" scrollamount="10">
        <div className="flex space-x-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-blue-600 p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-90"
            >
              <div className="relative">
                <img
                  src={profile.name === "Nita Fitrotul" ? girl : boy}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-inner"
                />
                <div className="absolute -right-12 top-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-white text-lg mb-1">
                  {profile.name}
                </h3>
                <p className="text-sm text-white/90 font-medium px-3 py-1 rounded-full bg-black/50">
                  {profile.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
