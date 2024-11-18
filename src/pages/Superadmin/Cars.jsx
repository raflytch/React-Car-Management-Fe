import React, { useState, useEffect } from "react";
import useFetchedCars from "../../hooks/useFetchedCars";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CarsList = () => {
  const { cars, pagination, getCars, loading } = useFetchedCars();
  const [filters] = useState({
    name: "",
    harga: "",
  });

  useEffect(() => {
  }, [filters]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      getCars(newPage, filters);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {loading ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {[...Array(6)].map((_, index) => (
              <li
                key={index}
                className="flex flex-col items-center p-5 bg-gray-50 rounded-lg border border-gray-200"
              >
                <Skeleton circle={true} height={96} width={96} className="mb-4" />
                <Skeleton width="80%" height={24} className="mb-2" />
                <Skeleton width="60%" height={20} className="mb-2" />
                <Skeleton width="50%" height={20} className="mb-2" />
                <Skeleton width="40%" height={20} />
              </li>
            ))}
          </ul>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Car List</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              {cars.length === 0 ? (
                <p className="col-span-full text-gray-500 text-center">
                  No cars found.
                </p>
              ) : (
                cars.map((car) => (
                  <li
                    key={car.id}
                    className="flex flex-col items-center p-5 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow"
                  >
                    {/* Actual Car Image */}
                    <img
                      src={car.fotoMobil}
                      alt={car.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-300"
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/400x300?text=No+Image")
                      }
                    />
                    <div className="text-center space-y-2">
                      <p className="text-xl font-semibold text-gray-800">
                        {car.name}
                      </p>
                      <p className="text-sm text-gray-600 truncate max-w-[200px]">
                        {car.noPlat}
                      </p>
                      <p className="text-sm text-gray-500">
                        Price:{" "}
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(car.harga)}
                      </p>
                      <p className="text-sm text-gray-500">Year: {car.tahun}</p>
                    </div>
                  </li>
                ))
              )}
            </ul>

            {pagination.totalPages > 1 && (
              <>
                <div className="flex items-center justify-center gap-3 mt-6">
                  <button
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1}
                    className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Prev
                  </button>

                  <div className="flex items-center gap-2">
                    {[...Array(pagination.totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
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
                    className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500 mt-3">
                  Page {pagination.currentPage} of {pagination.totalPages} (
                  {pagination.totalData} total cars)
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CarsList;
