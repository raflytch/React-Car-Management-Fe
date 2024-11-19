import { fetchDetailsCars } from "../services/cars.service";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "autoprefixer";

const useFetchedDetailCar = () => {
  const { id } = useParams(); 
  const [carDetails, setCarDetails] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true); 
      setError(null); 

      try {
        const response = await fetchDetailsCars(id, (status, data) => {
            if (status === "Success" && data?.car) {
              setCarDetails(data);
              setImagePreview(data.car.fotoMobil) 
            } else {
              const errorMessage = response.message || "An Error Ocurred";
              setError(errorMessage);
              console.log(error)
    
              Swal.fire({
                icon: "error",
                title: "Failed to Get Car Details",
                text: errorMessage,
              });
            }
        }); 
        
      } catch (err) {
        const errorMessage = err?.message || "An unexpected error occurred";
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "An Error Occurred",
          text: errorMessage,
        });
        console.error("Error fetching car details:", err);
      } finally {
        setLoading(false); 
      }
    };

    if (id) {
      fetchCarDetails(); 
    } else {
      setError("Car ID is missing"); 
    }
  }, [id]); 

  return {
    carDetails,
    loading,
    error,
  };
};

export default useFetchedDetailCar;
