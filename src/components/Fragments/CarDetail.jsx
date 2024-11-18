import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import Button from "../Elements/Buttons/Button";
import Loading from "../Elements/Loading/Loading";

const CarDetail = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(`/cars/${id}`);
        console.log("Response Data:", response.data);

        if (response.data.isSuccess) {
          setCarDetails(response.data.data.car); // Adjusted to match the assumed API structure
        } else {
          setError(response.data.message || "Failed to fetch car details");
        }
      } catch (err) {
        console.error("Axios Error:", err);
        setError(err.response?.data?.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) return <Loading />; // Display a loading spinner/component
  if (error) return <p className="text-red-500">{error}</p>; // Display error message

  // If car details are not available
  if (!carDetails) return <p>Car details not found.</p>;

  return (
    <div className="border rounded shadow p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold">{carDetails.name}</h1>
      <img
        src={carDetails.fotoMobil}
        alt={carDetails.name}
        className="w-full h-auto rounded my-4"
      />
      <p>Year: {carDetails.tahun}</p>
      <p>License Plate: {carDetails.noPlat}</p>
      <p>Price: {carDetails.harga}</p>
      <Button onClick={() => alert("Clicked!")}>Take Action</Button>
    </div>
  );
};

export default CarDetail;
