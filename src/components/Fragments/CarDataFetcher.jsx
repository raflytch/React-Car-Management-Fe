import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import Button from "../Elements/Buttons/Button";
import Loading from "../Elements/Loading/Loading";
import Navbar from "./Navbar";
import useProtectedAll from "../../hooks/useProtectedAll";
import Footer from "./Footer";

const CarDataFetcher = () => {
  useProtectedAll(["member"]);
  const [carName, setCarName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get(`/cars`);
        console.log("Response Data:", response.data);
        if (response.data.isSuccess) {
          setCarData(response.data.data.cars);
        } else {
          setError(response.data.message || "Failed to fetch cars");
        }
      } catch (err) {
        console.error("Axios Error:", err);
        setError(err.response?.data?.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Car Name:", carName);
    console.log("Submitted Car Price:", carPrice);
  };

  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setCarPrice(rawValue);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <Navbar />
      </div>
      {/* Form */}
      <form
        className="flex flex-col md:flex-row items-end justify-center gap-6"
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
              className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
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
              value={carPrice}
              onChange={handlePriceChange}
              placeholder="Enter price"
              className="mt-2 block w-full pl-10 px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <Button type="submit" color="red" width="auto">
          Search
        </Button>
      </form>

      <div className="py-6">
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carData.length > 0 ? (
              carData.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-white border rounded-lg shadow-sm"
                >
                  <img
                    src={item.fotoMobil}
                    alt={item.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/400x300?text=No+Image")
                    }
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">
                    Price: Rp {item.harga.toLocaleString()}
                  </p>
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
      <Footer />
    </div>
  );
};

export default CarDataFetcher;
