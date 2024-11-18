import { useState, useEffect } from "react";
import { fetchCars } from "../services/cars.service";
import Swal from "sweetalert2";

const useFetchedCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalData: 0,
  });
  const [filters, setFilters] = useState({
    name: "",
    harga: "",
  });

  const getCars = async (page = 1) => {
    try {
      setLoading(true);

      // Format harga jika ada
      const harga = filters.harga ? filters.harga.replace(/[^\d]/g, "") : "";

      const params = {
        page,
        name: filters.name,
        // Pastikan harga hanya ditambahkan jika ada
        ...(harga && { harga }),
      };

      const response = await fetchCars(page, 6, params);

      if (response.success && response.data) {
        setCars(response.data.cars || []);
        setPagination({
          currentPage: parseInt(response.data.page),
          totalPages: parseInt(response.data.totalPages),
          totalData: parseInt(response.data.totalData),
        });
      } else {
        Swal.fire({
          title: "Error",
          text: response.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Failed to fetch cars",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    getCars(1);
  };

  useEffect(() => {
    getCars(1);
  }, []);

  return { cars, loading, pagination, getCars, updateFilters, filters };
};

export default useFetchedCars;
