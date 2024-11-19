import { useState } from "react";
import { createCar as createCarService } from "../services/cars.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useCreateCar = (setValue) => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [carImage, setCarImage] = useState(null);

  const handleCreate = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCarImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    if (!carImage) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Car image is required",
      });
      return;
    }

    setLoading(true);
    const carData = new FormData();
    carData.append("name", data.name);
    carData.append("tahun", data.tahun);
    carData.append("noPlat", data.noPlat);
    carData.append("harga", data.harga.replace(/[^0-9]/g, ""));
    carData.append("fotoMobil", carImage);

    try {
      await createCarService(carData, (status, response) => {
        setLoading(false);
        if (status === "Success") {
          Swal.fire({
            icon: "success",
            title: "Car Created Successfully",
            text: "The car has been added.",
          }).then(() => {
            navigate("/");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Car Creation Failed",
            text: response || "An error occurred during car creation.",
          });
        }
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Car Creation Failed",
        text: error.message || "An error occurred.",
      });
    }
  };

  return {
    imagePreview,
    handleCreate,
    onSubmit,
    loading,
  };
};

export default useCreateCar;
