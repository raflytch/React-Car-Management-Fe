import React, { useState, useEffect } from "react";
import Button from "../Elements/Buttons/Button";
import Loading from "../Elements/Loading/Loading";
import axiosInstance from "../../api/axiosInstance";

const CarDataFetcher = () => {
  const [carName, setCarName] = useState("");
  const [carPrice, setCarPrice] = useState("");  // Store raw price (without commas)
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      setError(null);  // Reset error before making the request
      try {
        const response = await axiosInstance.get("/cars");
        console.log(response);  // Check the response structure
        if (response.data.isSuccess) {
          setCarData(response.data.data.cars);  // Update carData with the correct response
        } else {
          setError("Failed to fetch cars");
        }
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError(err.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add search functionality if needed
  };

  const handlePriceChange = (e) => {
    // Remove non-numeric characters (only digits)
    const rawValue = e.target.value.replace(/\D/g, "");
    setCarPrice(rawValue);  // Set the raw price (without commas)
  };

  return (
    <>
      <form
        className="flex flex-col md:flex-row items-end justify-center gap-6 p-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
          <div className="w-full md:w-72">
            <label
              htmlFor="carName"
              className="block text-sm font-semibold text-gray-700"
            >
              Car Name
            </label>
            <input
              type="text"
              id="carName"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              placeholder="Enter car name"
              className="mt-2 block w-full px-5 py-3 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-40 relative">
            <label
              htmlFor="carPrice"
              className="block text-sm font-semibold text-gray-700"
            >
              Maximum Price
            </label>
            <div className="absolute left-3 top-9 text-gray-700">Rp</div>
            <input
              type="text"
              id="carPrice"
              value={carPrice}  // Display raw numeric value
              onChange={handlePriceChange}  // Handle raw input (no commas)
              placeholder="Enter price"
              className="mt-2 block w-full pl-10 px-5 py-3 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <Button type="submit" color="red" width="auto">
          {loading ? "Loading..." : "Search"}
        </Button>
      </form>

      <div className="py-6">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carData && carData.length > 0 ? (
              carData.map((item) => (
                <div key={item.id} className="p-4 bg-white border rounded-lg shadow-sm">
                  <img
                    src={item.fotoMobil}
                    alt={item.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                    }}
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">Price: Rp {item.harga.toLocaleString()}</p>
                  <p className="text-gray-400">Plate: {item.noPlat}</p>
                  <p className="text-gray-400">Year: {item.tahun}</p>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500">
                No cars found.
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CarDataFetcher;
