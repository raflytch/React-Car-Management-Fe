import React from "react";
import Button from "../Elements/Buttons/Button";
import Loading from "../Elements/Loading/Loading";
import useFetchedDetailCar from "../../hooks/useFetchedDetailsCar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CarDetail = () => {
  const { carDetails, loading, error } = useFetchedDetailCar();
  const navigate = useNavigate();

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
      confirmButtonText: "OK",
    });
    return null;
  }

  if (loading) return <Loading />;
  if (!carDetails) return <p>Car details not found.</p>;

  return (
    <section className="bg-white rounded-lg">
      <div className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-xl font-medium text-black">Car Details</p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-red-500">
          {carDetails.car.name}
        </h1>

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute w-full border-2 border-red-500 bg-red-500 -z-10 md:h-96 rounded-2xl hidden md:block"></div>

          <div className="w-full p-6 bg-blue-600 bord md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              className="h-24 w-24 md:mx-6 rounded-full border-red-500 border-2 object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
              src={carDetails.car.fotoMobil}
              alt={carDetails.car.name}
            />

            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">
                  Year: {carDetails.car.tahun}
                </p>
                <p className="text-blue-200">
                  License Plate: {carDetails.car.noPlat}
                </p>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                Price:{" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(carDetails.car.harga)}
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default CarDetail;
