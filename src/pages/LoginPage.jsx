import React from "react";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";
import DynamicBanner from "../components/Elements/Banners/DynamicBanner";
import CarLoginBanner from "../assets/images/car-banner-login.jpg";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-row lg:flex-row">
      <DynamicBanner
        imageSrc={CarLoginBanner}
        title="Explore the Roads with Ease"
        description="Drive your dream car today! Affordable, flexible, and comfortable."
      />

      <div className="flex w-full lg:w-1/2 flex-col justify-center p-4 lg:p-8">
        <div className="mx-auto w-full max-w-md">
          <h1 className="text-center text-3xl font-bold text-red-600 sm:text-4xl">
            Login
          </h1>
          <p className="mx-auto mt-4 text-center text-red-500">
            Hello, welcome back. Please enter your details.
          </p>

          <FormLogin />

          <p className="mt-6 text-center text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-red-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
