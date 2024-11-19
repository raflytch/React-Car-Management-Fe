import React from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useUpdateCar } from "../../hooks/useUpdateCar";
import NotFoundPage from "../NotFoundPage";
import Loading from "../../components/Elements/Loading/Loading";
import Button from "../../components/Elements/Buttons/Button";

const UpdateCar = () => {
  const {
    notFound,
    imagePreview,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleImageUpdate,
    loading,
    updateLoading,
    imageLoading,
    validateYear,
    validatePrice,
    currentYear,
    startYear,
  } = useUpdateCar();

  if (notFound) {
    return <NotFoundPage />;
  }

  if (loading || updateLoading) {
    return <Loading />;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 w-full overflow-y-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                {imageLoading && (
                  <div className="flex justify-center items-center h-48 sm:h-56 md:h-64 bg-gray-200 rounded-lg shadow-md">
                    <Loading />
                  </div>
                )}

                {imagePreview && !imageLoading && (
                  <div className="mb-4">
                    <img
                      src={imagePreview}
                      alt="Car"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}

                <div className="w-full">
                  <label
                    htmlFor="carImage"
                    className="block text-center cursor-pointer"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      id="carImage"
                      className="hidden"
                      onChange={handleImageUpdate}
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
              </div>

              <div className="w-full">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div>
                    <label
                      className="block mb-1 sm:mb-2 text-sm sm:text-base"
                      htmlFor="name"
                    >
                      Car Name
                    </label>
                    <input
                      className={`w-full rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      } p-2.5 sm:p-3 text-sm`}
                      placeholder="Car Name"
                      {...register("name", { required: "Car name is required" })}
                      type="text"
                      id="name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block mb-1 sm:mb-2 text-sm sm:text-base"
                      htmlFor="year"
                    >
                      Year ({startYear} - {currentYear})
                    </label>
                    <input
                      className={`w-full rounded-lg border ${
                        errors.year ? 'border-red-500' : 'border-gray-200'
                      } p-2.5 sm:p-3 text-sm`}
                      placeholder={`Enter year (${startYear}-${currentYear})`}
                      {...register("year", { 
                        required: "Year is required",
                        validate: validateYear
                      })}
                      type="text"
                      id="year"
                    />
                    {errors.year && (
                      <p className="mt-1 text-red-500 text-xs">{errors.year.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block mb-1 sm:mb-2 text-sm sm:text-base"
                      htmlFor="licensePlate"
                    >
                      License Plate
                    </label>
                    <input
                      className={`w-full rounded-lg border ${
                        errors.licensePlate ? 'border-red-500' : 'border-gray-200'
                      } p-2.5 sm:p-3 text-sm`}
                      placeholder="License Plate"
                      {...register("licensePlate", { 
                        required: "License plate is required",
                        minLength: {
                          value: 4,
                          message: "License plate must be at least 4 characters"
                        }
                      })}
                      type="text"
                      id="licensePlate"
                    />
                    {errors.licensePlate && (
                      <p className="mt-1 text-red-500 text-xs">{errors.licensePlate.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block mb-1 sm:mb-2 text-sm sm:text-base"
                      htmlFor="price"
                    >
                      Price
                    </label>
                    <input
                      className={`w-full rounded-lg border ${
                        errors.price ? 'border-red-500' : 'border-gray-200'
                      } p-2.5 sm:p-3 text-sm`}
                      placeholder="Price"
                      {...register("price", { 
                        required: "Price is required",
                        validate: validatePrice
                      })}
                      type="text"
                      id="price"
                    />
                    {errors.price && (
                      <p className="mt-1 text-red-500 text-xs">{errors.price.message}</p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      color="red"
                      width="full"
                      className="text-sm sm:text-base p-2.5 sm:p-3"
                      disabled={updateLoading}
                    >
                      Update Car
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default UpdateCar;
