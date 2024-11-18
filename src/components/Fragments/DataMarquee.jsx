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
    <div className="text-white py-8 bg-white p-4">
      <marquee behavior="scroll" direction="left" scrollamount="10">
        <div className="flex space-x-8">
          {profiles.map((profile, index) => (
           <div
           key={index}
           className="flex flex-col items-center bg-red-400 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
         >
           <img
             src={`src/assets/images/${
               profile.name === "Nita Fitrotul" ? "girl.jpg" : "boy.jpg"
             }`}
             alt="Profile"
             className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
           />
           <div className="text-center">
             <p className="text-sm text-white font-semibold">{profile.role}</p>
             <p className="mt-2 text-gray-200">{profile.name}</p>
           </div>
         </div>
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
