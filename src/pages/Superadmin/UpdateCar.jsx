import React from "react";
import ProtectedRoute from "../../components/ProtectedRoute";

const UpdateCar = () => {
  return (
    <ProtectedRoute>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl px-4 py-16 sm:px-6">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <form action="#" className="space-y-4">
              <div>
                <label className="" htmlFor="carName">
                  Car Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Car Name"
                  type="text"
                  id="carName"
                />
              </div>

              <div>
                <label className="" htmlFor="year">
                  Year
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Year"
                  type="text"
                  id="year"
                />
              </div>

              <div>
                <label className="" htmlFor="licensePlate">
                  License Plate
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="License Plate"
                  type="text"
                  id="licensePlate"
                />
              </div>

              <div>
                <label className="" htmlFor="price">
                  Price
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="price"
                  type="text"
                  id="price"
                />
              </div>

              <div>
                <label className="" htmlFor="carImage">
                  Car Image
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Car Image"
                  type="file"
                  id="carName"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default UpdateCar;
