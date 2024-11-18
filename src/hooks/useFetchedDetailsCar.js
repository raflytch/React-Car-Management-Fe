import { fetchDetailsCars } from "../services/cars.service";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchedDetailCar = () => {
  const { id } = useParams(); // Fetch the car ID from the URL parameters
  const [carDetails, setCarDetails] = useState(null); // State to store car details
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true); // Start the loading indicator
      setError(null); // Clear any previous errors

      try {
        const response = await fetchDetailsCars(id); // API call to fetch car details
        
        if (response?.status === "Success") {
          // If the response is successful, update car details
          setCarDetails(response.data); // Assuming response.data contains car details
        } else {
          // Handle API-level errors
          const errorMessage = response.message || "COK ";
          setError(errorMessage);
          console.log(error)

          Swal.fire({
            icon: "error",
            title: "Failed to Get Car Details",
            text: errorMessage,
          });
        }
      } catch (err) {
        // Handle unexpected errors (e.g., network issues)
        const errorMessage = err?.message || "An unexpected error occurred";
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "An Error Occurred",
          text: errorMessage,
        });
        console.error("Error fetching car details:", err);
      } finally {
        setLoading(false); // Stop the loading indicator
      }
    };

    if (id) {
      fetchCarDetails(); // Fetch details only if the ID exists
    } else {
      setError("Car ID is missing"); // Handle missing ID gracefully
    }
  }, [id]); // Dependency on `id` to refetch if it changes

  return {
    carDetails,
    loading,
    error,
  };
};

export default useFetchedDetailCar;
