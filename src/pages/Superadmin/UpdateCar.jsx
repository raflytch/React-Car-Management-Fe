import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useParams } from "react-router-dom";
import { fetchDetailsCars as detailsCarService } from "../../services/cars.service";
import { updateCar as updateCarService } from "../../services/cars.service";

const UpdateCar = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState([]);
  const [name, setName] = useState("");
  const [year, setYear] = useState();
  const [licensePlate, setLicensePlate] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [status, setStatus] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const loadCarsDetail = async () => {
      await detailsCarService(id, (status, data) => {
        if (status === "Success") {
          console.log(data);
          setCarDetails(data);
        } else {
          console.error("Error fetching car details");
        }
      });
    };
    loadCarsDetail();
  }, [id]);

  useEffect(() => {
    if (carDetails?.car) {
      setName(carDetails.car.name);
    }
  }, [carDetails]);
  
  useEffect(() => {
    if (carDetails?.car) {
      setLicensePlate(carDetails.car.noPlat);
    }
  }, [carDetails]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      noPlat: licensePlate,
    };
    try {
      await updateCarService(id, data, (status, response) => {
        if (status === "Success") {
          console.log("Car updated successfully:", response);
        } else {
          console.error("Error updating car:", response);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProtectedRoute>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl px-4 py-16 sm:px-6">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <form onSubmit={handleUpdate} action="#" className="space-y-4">
              <div>
                <label className="" htmlFor="carName">
                  Car Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder={carDetails?.car?.name || "Car"}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
                  placeholder={
                    carDetails?.car?.noPlat || "License Plate hilang"
                  }
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
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
