import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  fetchDetailsCars as detailsCarService,
  updateCar as updateCarService,
} from "../services/cars.service";

export const useUpdateCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    licensePlate: "",
    price: "",
    image: null,
  });

  const loadCarsDetail = async () => {
    setImageLoading(true);
    setImagePreview(null);

    if (!id) {
      setNotFound(true);
      setImageLoading(false);
      return;
    }

    try {
      await detailsCarService(id, (status, data) => {
        if (status === "Success" && data?.car) {
          setCarDetails(data);
          setTimeout(() => {
            setImagePreview(data.car.fotoMobil);
            setFormData({
              name: data.car.name || "",
              year: data.car.tahun || "",
              licensePlate: data.car.noPlat || "",
              price: data.car.harga || "",
              image: null,
            });
            setImageLoading(false);
          }, 500);
        } else {
          setNotFound(true);
          setImageLoading(false);
        }
      });
    } catch (error) {
      setNotFound(true);
      setImageLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadCarsDetail().finally(() => {
      setLoading(false);
    });
  }, [id]);

  const handleImageUpdate = (e) => {
    const fileImage = e.target.files[0];
    if (fileImage) {
      setImageLoading(true);
      setImagePreview(null);
      setTimeout(() => {
        const previewUrl = URL.createObjectURL(fileImage);
        setImagePreview(previewUrl);
        setFormData((prev) => ({
          ...prev,
          image: fileImage,
        }));
        setImageLoading(false);
      }, 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Confirm Update",
      text: "Are you sure you want to update this car?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Update Car",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      focusCancel: true,
    });

    if (!result.isConfirmed) {
      return;
    }

    setUpdateLoading(true);
    setImageLoading(true);
    setImagePreview(null);

    if (!id) {
      setUpdateLoading(false);
      setImageLoading(false);
      return;
    }

    const submitFormData = new FormData();
    submitFormData.append("name", formData.name);
    submitFormData.append("tahun", formData.year);
    submitFormData.append("noPlat", formData.licensePlate);
    submitFormData.append("harga", formData.price);

    if (formData.image instanceof File) {
      submitFormData.append("fotoMobil", formData.image);
    }

    try {
      await updateCarService(id, submitFormData, async (status, response) => {
        if (status === "Success") {
          await Swal.fire({
            icon: "success",
            title: "Car Updated Successfully!",
            text: "The car details have been updated.",
          });

          setTimeout(async () => {
            await loadCarsDetail();
            navigate(`/dashboard/update-car/${id}`);
          }, 500);
        } else {
          await Swal.fire({
            icon: "error",
            title: "Update Failed",
            text:
              response?.message ||
              "Failed to update car details. Please try again.",
          });

          setImagePreview(null);
          setTimeout(() => {
            if (carDetails?.car?.fotoMobil) {
              setImagePreview(carDetails.car.fotoMobil);
            }
            setImageLoading(false);
          }, 500);
        }
      });
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Unexpected Error",
        text: "An unexpected error occurred. Please try again.",
      });

      setImagePreview(null);
      setTimeout(() => {
        if (carDetails?.car?.fotoMobil) {
          setImagePreview(carDetails.car.fotoMobil);
        }
        setImageLoading(false);
      }, 500);
    } finally {
      setUpdateLoading(false);
      setLoading(false);
    }
  };

  return {
    notFound,
    imagePreview,
    formData,
    handleImageUpdate,
    handleInputChange,
    handleUpdate,
    loading,
    updateLoading,
    imageLoading,
  };
};
