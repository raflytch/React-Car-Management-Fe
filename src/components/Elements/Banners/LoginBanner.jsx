import carBanner from "../../../assets/images/car-banner-login.jpg";

const LoginBanner = () => {
  return (
    <section className="relative hidden h-screen w-1/2 bg-gray-950 lg:flex">
      <img
        alt="Car Rental Banner"
        src={carBanner}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="relative flex flex-col justify-start p-8 text-gray-800">
        <h2 className="text-xl font-bold text-red-600 sm:text-4xl">
          Explore the Roads with Ease
        </h2>
        <p className="mt-4 text-md leading-relaxed text-teal-600">
          <span className="text-red-600 font-semibold">
            Drive your dream car today!
          </span>{" "}
          Affordable, flexible, and comfortable.
        </p>
      </div>
    </section>
  );
};

export default LoginBanner;
