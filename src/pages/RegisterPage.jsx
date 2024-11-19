import React from "react";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
import DynamicBanner from "../components/Elements/Banners/DynamicBanner";
import CarRegisterBanner from "../assets/images/car-banner-login.jpg";

const RegisterPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <div className="flex flex-1 items-center justify-center py-12 px-6 sm:px-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-center text-3xl font-bold text-red-600 sm:text-4xl">
            Register
          </h1>
          <p className="mx-auto mt-2 max-w-md text-center text-gray-500">
            Hello, welcome! Please fill in your details to get started.
          </p>
          <FormRegister />
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-red-600 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <DynamicBanner
        imageSrc={CarRegisterBanner}
        title="Join the Journey"
        description="Start your adventure today! Reliable, easy, and affordable car rentals."
      />
    </div>
  );
};

export default RegisterPage;
