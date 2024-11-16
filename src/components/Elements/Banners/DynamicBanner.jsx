import React from "react";

const DynamicBanner = ({ imageSrc, title, description }) => {
  return (
    <section className="relative hidden w-1/2 bg-gray-950 lg:flex">
      <img
        alt="Banner"
        src={imageSrc}
        className="absolute inset-0 w-full object-cover aspect-auto h-full"
      />
      <div className="relative flex flex-col justify-start p-8 text-gray-800 from-black/50 via-transparent">
        <h2 className="font-bold text-red-600 text-4xl lg:text-xl">{title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-teal-600">
          {description}
        </p>
      </div>
    </section>
  );
};


export default DynamicBanner;
