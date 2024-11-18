import React from "react";
import carImage from "../../assets/car01.webp";
import useCreateCar from "../../hooks/useCreateCar";

const CreateCar = () => {
  const { formData, handleChange, handleSubmit, loading } = useCreateCar();
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Create a New Car</h1>
          <p className="mt-4 text-gray-500">
            Fill in the details below to add a new car to the system.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          encType="multipart/form-data"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Car Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter car name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="tahun" className="sr-only">
              Year
            </label>
            <input
              type="number"
              name="tahun"
              id="tahun"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter car year"
              value={formData.tahun}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="noPlat" className="sr-only">
              License Plate
            </label>
            <input
              type="text"
              name="noPlat"
              id="noPlat"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter license plate"
              value={formData.noPlat}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="harga" className="sr-only">
              Price
            </label>
            <input
              type="number"
              name="harga"
              id="harga"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter price"
              value={formData.harga}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="fotoMobil" className="sr-only">
              Car Image
            </label>
            <input
              type="file"
              name="fotoMobil"
              id="fotoMobil"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              disabled={loading}
            >
              {loading ? "Creating..." : "Add Car"}
            </button>
          </div>
        </form>
      </div>
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Add a new car"
          src={carImage}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default CreateCar;
