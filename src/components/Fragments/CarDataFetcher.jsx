import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "../Elements/Buttons/Button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useFetchedCars from "../../hooks/useFetchedCars";
import { useNavigate } from "react-router-dom";

const CarDataFetcher = () => {
  const navigate = useNavigate();
  const { cars, pagination, getCars, loading, updateFilters, filters } =
    useFetchedCars();
  const [carName, setCarName] = useState(filters.name);
  const [carPrice, setCarPrice] = useState(filters.harga);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateFilters({
      name: carName,
      harga: carPrice ? carPrice.replace(/[^\d]/g, "") : "",
    });
  };

  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
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
      getCars(newPage, filters);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/car/${id}`);
  };

  return (
    <div>
      <div className="mb-6">
        <Navbar />
      </div>
      <section className="space-y-16 px-8">
        <div className="relative text-center py-20  from-blue-500 to-red-500 bg-gradient-to-br  text-white rounded-lg shadow-lg overflow-hidden ">
          <h1 className="text-4xl font-bold tracking-tight">Hallo</h1>
          <p className="mt-2 text-lg font-medium text-gray-100">
            Welcome to the car search application
          </p>
          <div className="mt-6 h-1 w-24 mx-auto bg-white rounded-full"></div>
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
      </section>

      <div className="py-6">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="p-4 bg-white border rounded-lg shadow-sm"
              >
                <Skeleton height={192} className="mb-4" />
                <Skeleton width="80%" height={24} className="mb-2" />
                <Skeleton width="60%" height={20} className="mb-1" />
                <Skeleton width="50%" height={20} className="mb-1" />
                <Skeleton width="40%" height={20} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            {cars.length > 0 ? (
              cars.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  onClick={() => handleCardClick(item.id)}
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
                    Price: Rp{" "}
                    {new Intl.NumberFormat({
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
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
            Prev
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

      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          Showing {pagination.totalData} car{pagination.totalData !== 1 && "s"}{" "}
          in {pagination.totalPages} page{pagination.totalPages !== 1 && "s"}.
        </p>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default CarDataFetcher;
