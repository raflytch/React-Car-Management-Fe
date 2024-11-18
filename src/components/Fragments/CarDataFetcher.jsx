import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import Button from "../Elements/Buttons/Button";
import Loading from "../Elements/Loading/Loading";
import Navbar from "./Navbar";
import useProtectedAll from "../../hooks/useProtectedAll";
import Footer from "./Footer";
import useFetchedCars from "../../hooks/useFetchedCars";

const CarDataFetcher = () => {
  useProtectedAll(["member"]);
  const [carName, setCarName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { cars, pagination, getCars } = useFetchedCars();

  const fetchCars = async (name, price) => {
    setLoading(true);
    setError(null);
    try {
      const rawPrice = price ? price.replace(/[^\d]/g, '') : '';
      const params = {
        name: name || '', 
        harga: rawPrice || '',
      };
      const response = await axiosInstance.get(`/cars/filter`, {
        params
      });
      if (response.data.isSuccess) {
        setCarData(response.data.data.cars);
      } else {
        setError(response.data.message || "Failed to fetch cars");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCars(carName, carPrice);
  };

  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, ''); 
    const formattedValue = rawValue
      ? new Intl.NumberFormat("id-ID", {
          style: "decimal",
          currency: "IDR",
        }).format(rawValue)
      : "";
    setCarPrice(formattedValue);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      getCars(newPage);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <Navbar />
      </div>
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
                    Price: Rp {new Intl.NumberFormat({ 
                      style: 'currency', 
                      currency: 'IDR',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0
                    }).format(item.harga)}
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

      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="flex items-center gap-1">
            {[...Array(pagination.totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  pagination.currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      <div className="text-center text-sm text-gray-500 mt-2">
        Page {pagination.currentPage} of {pagination.totalPages} (
        {pagination.totalData} total cars)
      </div>
      
      <Footer />
    </div>
  );
};

export default CarDataFetcher;
