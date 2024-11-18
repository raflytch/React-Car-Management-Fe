import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import { fetchDetailsCars as detailsCarService } from "../../services/cars.service";
import { updateCar as updateCarService } from "../../services/cars.service";

const UpdateCar = () => {
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [carDetails, setCarDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    licensePlate: "",
    price: "",
    image: null,
  });

  useEffect(() => {
    const loadCarsDetail = async () => {
      setIsLoading(true);
      try {
        await detailsCarService(id, (status, data) => {
          if (status === "Success") {
            if (data && data.car) {
              setCarDetails(data);
              setImagePreview(data.car.fotoMobil);
              setFormData({
                name: data.car.name || "",
                year: data.car.tahun || "",
                licensePlate: data.car.noPlat || "",
                price: data.car.harga || "",
                image: null,
              });
            } else {
              setNotFound(true);
            }
          } else {
            setNotFound(true);
            console.error("Error fetching car details");
          }
        });
      } catch (error) {
        console.error("Error loading car details:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadCarsDetail();
  }, [id]);

  const handleImageUpdate = (e) => {
    const fileImage = e.target.files[0];
    if (fileImage) {
      const previewUrl = URL.createObjectURL(fileImage);
      setImagePreview(previewUrl);
      setFormData((prev) => ({
        ...prev,
        image: fileImage,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const submitFormData = new FormData();

    submitFormData.append("name", formData.name);
    submitFormData.append("tahun", formData.year);
    submitFormData.append("noPlat", formData.licensePlate);
    submitFormData.append("harga", formData.price);

    if (formData.image instanceof File) {
      submitFormData.append("fotoMobil", formData.image);
    }

    try {
      await updateCarService(id, submitFormData, (status, response) => {
        if (status === "Success") {
          console.log("Car updated successfully:", response);
          if (response.car?.fotoMobil) {
            setImagePreview(response.car.fotoMobil);
          }
          setFormData((prev) => ({
            ...prev,
            image: null,
          }));
        } else {
          console.error("Error updating car:", response);
          if (carDetails?.car?.fotoMobil) {
            setImagePreview(carDetails.car.fotoMobil);
          }
        }
      });
    } catch (error) {
      console.error("Error in update request:", error);
      if (carDetails?.car?.fotoMobil) {
        setImagePreview(carDetails.car.fotoMobil);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-gray-600">Processing update...</p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (notFound) {
    return <NotFoundPage />;
  }

  return (
    <ProtectedRoute>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl px-4 py-16 sm:px-6">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <form
              onSubmit={handleUpdate}
              encType="multipart/form-data"
              className="space-y-4"
            >
              <div>
                <label className="block mb-2" htmlFor="name">
                  Car Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Car Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text"
                  id="name"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block mb-2" htmlFor="year">
                  Year
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  type="text"
                  id="year"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block mb-2" htmlFor="licensePlate">
                  License Plate
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="License Plate"
                  name="licensePlate"
                  value={formData.licensePlate}
                  onChange={handleInputChange}
                  type="text"
                  id="licensePlate"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  type="text"
                  id="price"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block mb-2" htmlFor="carImage">
                  Car Image
                </label>
                {imagePreview && (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Car"
                      className="mt-4 w-full h-48 object-cover rounded-lg"
                    />
                    {isLoading && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                      </div>
                    )}
                  </div>
                )}
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm mt-2"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpdate}
                  id="carImage"
                  disabled={isLoading}
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-block w-full rounded-lg px-5 py-3 font-medium text-white sm:w-auto
                    ${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-black hover:bg-gray-800"
                    }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Updating...
                    </span>
                  ) : (
                    "Update"
                  )}
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
