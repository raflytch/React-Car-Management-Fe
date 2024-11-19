import React from "react";
import Button from "../Elements/Buttons/Button";

const ConnectUs = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-screen-xl px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-xl shadow-lg h-[80%]">
              <img
                alt="Grow your audience"
                src="https://marketplace.canva.com/EAF7-Xtd-w0/2/0/1143w/canva-red-and-black-modern-car-service-poster-aUaFFgeqN60.jpg"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                Contact <span className="text-blue-600">Us</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Need a ride? Have questions about our services? We're here to
                assist you with all your car rental needs.
              </p>
              <Button width="auto" color="red">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectUs;
