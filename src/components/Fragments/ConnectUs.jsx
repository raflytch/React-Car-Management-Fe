import React from "react";
import Button from "../Elements/Buttons/Button";

const ConnectUs = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-screen-xl px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="Grow your audience"
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                Why Choose <span className="text-blue-600">Piplined?</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Unlock the potential of your brand with our innovative
                solutions.
              </p>
              <Button width="auto" color="red">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectUs;
