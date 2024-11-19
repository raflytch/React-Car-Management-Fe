import React from "react";
import { useForm } from "react-hook-form";
import carImage from "../../assets/images/Car01.webp";
import useCreateCar from "../../hooks/useCreateCar";
import Loading from "../../components/Elements/Loading/Loading";

const CreateCar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      tahun: "",
      noPlat: "",
      harga: "",
    },
  });

  const { imagePreview, handleCreate, onSubmit, loading } =
    useCreateCar(setValue);
  const hargaValue = watch("harga");

  const handlePriceChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, "");

    if (value) {
      const number = parseInt(value, 10);
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(number);

      setValue("harga", formatted);
    } else {
      setValue("harga", "");
    }
  };

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
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-0 mt-8 max-w-md space-y-6"
          encType="multipart/form-data"
        >
          <div>
            <input
              type="text"
              {...register("name", {
                required: "Car name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter car name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              {...register("tahun", {
                required: "Year is required",
                min: {
                  value: 1900,
                  message: "Year must be after 1900",
                },
                max: {
                  value: new Date().getFullYear(),
                  message: "Year cannot be in the future",
                },
              })}
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter car year"
            />
            {errors.tahun && (
              <p className="mt-1 text-sm text-red-500">
                {errors.tahun.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("noPlat")}
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter license plate"
            />
          </div>

          <div>
            <input
              type="text"
              {...register("harga", {
                required: "Price is required",
                validate: (value) => {
                  const number = parseInt(value.replace(/[^0-9]/g, ""));
                  if (isNaN(number) || number <= 0) {
                    return "Please enter a valid price";
                  }
                  return true;
                },
              })}
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
              value={hargaValue}
              onChange={handlePriceChange}
            />
            {errors.harga && (
              <p className="mt-1 text-sm text-red-500">
                {errors.harga.message}
              </p>
            )}
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
              {loading ? <Loading /> : "Add Car"}
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:block lg:relative lg:h-full lg:w-1/2">
        <div className="absolute inset-0 h-full w-full object-cover rounded-lg overflow-hidden">
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
