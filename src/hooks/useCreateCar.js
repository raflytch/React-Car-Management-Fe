import { useState } from "react";
import { createCar as createCarService } from "../services/cars.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useCreateCar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    tahun: "",
    noPlat: "",
    harga: "",
    fotoMobil: null,
  });
  const [imagePreview, setImagePreview] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleCreate = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
      setImagePreview(URL.createObjectURL(file)); 
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.tahun ||
      !formData.noPlat ||
      !formData.harga ||
      !formData.fotoMobil
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required",
      });
      return;
    }
    setLoading(true);
    const carData = new FormData();
    carData.append("name", formData.name);
    carData.append("tahun", formData.tahun);
    carData.append("noPlat", formData.noPlat);
    carData.append("harga", formData.harga);
    carData.append("fotoMobil", formData.fotoMobil);
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
    formData,
    imagePreview, 
    handleCreate,
    handleSubmit,
    loading,
  };
};

export default useCreateCar;
