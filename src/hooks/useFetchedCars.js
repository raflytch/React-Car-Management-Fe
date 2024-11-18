import { useEffect, useState } from "react";
import { carById } from "../services/cars.service";
import Swal from "sweetalert2";

const useFetchedCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalData: 0,   
  });

  const getCars = async (page = 1) => {
    try {
      setLoading(true);
      
      await carById(page, (status, data) => {
        if (status === "Success" && data) {
          setCars(data.cars || []);
          setPagination({
            currentPage: parseInt(data.page),
            totalPages: parseInt(data.totalPages),
            totalData: parseInt(data.totalData),
          });
        } else {
          Swal.fire({
            title: "Error",
            text: data || "Failed to fetch cars",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      });
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

  useEffect(() => {
    getCars(1);
  }, []);

  return { cars, loading, pagination, getCars };
};

export default useFetchedCars;
