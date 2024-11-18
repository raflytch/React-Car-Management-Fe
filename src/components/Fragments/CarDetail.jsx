import React, { useEffect, useState } from "react";
import Button from "../Elements/Buttons/Button";
import Loading from "../Elements/Loading/Loading";
import useFetchedDetailCar from "../../hooks/useFetchedDetailsCar";

const CarDetail = () => {

  const { carDetails, loading, error } = useFetchedDetailCar()

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
