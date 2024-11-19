import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import useFetchedCars from "../../hooks/useFetchedCars";
import useCarDeletion from "../../hooks/useCarDeletion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CarCardSkeleton = () => (
  <div className="flex flex-col items-center p-5 bg-gray-50 rounded-lg border border-gray-200 space-y-4">
    <div className="w-24 h-24 mb-4">
      <Skeleton
        circle
        height={96}
        width={96}
        baseColor="#e0e0e0"
        highlightColor="#f0f0f0"
      />
    </div>
    <div className="text-center space-y-2 w-full">
      <Skeleton
        height={24}
        width="70%"
        className="mx-auto mb-2"
        baseColor="#e0e0e0"
        highlightColor="#f0f0f0"
      />
      <Skeleton
        height={20}
        width="60%"
        className="mx-auto mb-2"
        baseColor="#e0e0e0"
        highlightColor="#f0f0f0"
      />
      <Skeleton
        height={20}
        width="90%"
        className="mx-auto mb-2"
        baseColor="#e0e0e0"
        highlightColor="#f0f0f0"
      />
      <Skeleton
        height={20}
        width="40%"
        className="mx-auto"
        baseColor="#e0e0e0"
        highlightColor="#f0f0f0"
      />
    </div>
  </div>
);

const CarsList = () => {
  const navigate = useNavigate();
  const { cars, pagination, getCars, loading } = useFetchedCars();
  const [filters] = useState({
    name: "",
    harga: "",
  });

  const { handleDelete } = useCarDeletion(() => {
    getCars(pagination.currentPage, filters);
  });

  useEffect(() => {}, [filters]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      getCars(newPage, filters);
    }
  };

  const handleCardClick = (carId) => {
    navigate(`/dashboard/cars/${carId}`);
  };

  const renderPagination = () => {
    if (!pagination.totalPages || pagination.totalPages <= 1) return null;

    return (
      <div>
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            className="px-4 sm:px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Prev
          </button>

          <div className="flex items-center gap-2">
            {[...Array(pagination.totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-md transition-colors ${
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
            className="px-4 sm:px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 mt-3">
          Page {pagination.currentPage} of {pagination.totalPages} (
          {pagination.totalData} total cars)
        </div>
      </div>
    );
  };

  const renderCarCard = (car) => (
    <li
      key={car.id}
      className="relative flex flex-col items-center p-5 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete({carId: car.id, carName: car.name, noPlat: car.noPlat});
        }}
        className="absolute top-2 right-2 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
        aria-label="Delete car"
      >
        <FaTrash size={16} />
      </button>

      <div
        onClick={() => handleCardClick(car.id)}
        className="w-full cursor-pointer"
      >
        <img
          src={car.fotoMobil}
          alt={car.name}
          className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-300 mx-auto"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/400x300?text=No+Image")
          }
        />
        <div className="text-center space-y-2">
          <p className="text-xl font-semibold text-gray-800">{car.name}</p>
          <p className="text-sm text-gray-600 truncate max-w-[200px] mx-auto">
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
      </div>
    </li>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <Skeleton
            height={48}
            width={200}
            className="mb-6"
            baseColor="#e0e0e0"
            highlightColor="#f0f0f0"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {[...Array(6)].map((_, index) => (
              <li key={index} className="w-full">
                <CarCardSkeleton />
              </li>
            ))}
          </ul>
        </>
      );
    }

    return (
      <>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Car List</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {cars.length === 0 ? (
            <p className="col-span-full text-gray-500 text-center">
              No cars found.
            </p>
          ) : (
            cars.map((car) => renderCarCard(car))
          )}
        </ul>
        {renderPagination()}
      </>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="bg-white p-6 rounded-lg shadow-sm">{renderContent()}</div>
    </div>
  );
};

export default CarsList;
