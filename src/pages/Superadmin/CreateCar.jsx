import React from "react";
import carImage from "../../assets/car01.webp";
import useCreateCar from "../../hooks/useCreateCar";

const CreateCar = () => {
  const { formData, imagePreview, handleCreate, handleSubmit, loading } =
    useCreateCar();

  return (
    <section className="flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Create a New Car</h1>
          <p className="mt-4 text-gray-500">
            Fill in the details below to add a new car to the system.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-6"
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
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter car name"
              value={formData.name}
              onChange={handleCreate}
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
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter car year"
              value={formData.tahun}
              onChange={handleCreate}
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
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter license plate"
              value={formData.noPlat}
              onChange={handleCreate}
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
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
              value={formData.harga}
              onChange={handleCreate}
              required
            />
          </div>
          <div className="w-full">
            {imagePreview && (
              <div className="mb-4">
                <img
                  src={imagePreview}
                  alt="Car Preview"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
            <label
              htmlFor="carImage"
              className="block text-center cursor-pointer"
            >
              <input
                type="file"
                accept="image/*"
                id="carImage"
                name="fotoMobil"
                className="hidden"
                onChange={handleCreate}
              />
              <div className="border-2 border-dashed border-gray-300 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition">
                <div className="flex justify-center items-center">
                  <img
                    src="../../src/assets/images/upload-image.png"
                    alt="Upload"
                    className="h-6 w-6 sm:h-8 sm:w-8 mr-2"
                  />
                  <span className="text-gray-600 text-sm sm:text-base">
                    Upload Car Image
                  </span>
                </div>
              </div>
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-block rounded-lg bg-slate-600 w-full lg:w-auto px-5 py-3 text-sm font-medium text-white"
              disabled={loading}
            >
              {loading ? "Creating..." : "Add Car"}
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:block lg:relative lg:h-full lg:w-1/2">
        <div className="absolute inset-0 h-full w-full object-cover ">
          <img
            alt="Add a new car"
            src={carImage}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CreateCar;
