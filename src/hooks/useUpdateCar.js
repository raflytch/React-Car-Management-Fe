import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  const [selectedImage, setSelectedImage] = useState(null);

  const currentYear = new Date().getFullYear();
  const startYear = 1900;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      year: "",
      licensePlate: "",
      price: "",
    },
    mode: "onBlur",
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
            reset({
              name: data.car.name || "",
              year: data.car.tahun || "",
              licensePlate: data.car.noPlat || "",
              price: data.car.harga || "",
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
        setSelectedImage(fileImage);
        setImageLoading(false);
      }, 500);
    }
  };

  const validateYear = (value) => {
    const yearNum = parseInt(value);
    if (isNaN(yearNum)) return "Please enter a valid year";
    if (yearNum > currentYear)
      return `Year cannot be greater than ${currentYear}`;
    if (yearNum < startYear) return `Year cannot be less than ${startYear}`;
    return true;
  };

  const validatePrice = (value) => {
    const priceNum = parseInt(value);
    if (isNaN(priceNum)) return "Please enter a valid price";
    if (priceNum <= 0) return "Price must be greater than 0";
    return true;
  };

  const onSubmit = async (formData) => {
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

    if (selectedImage instanceof File) {
      submitFormData.append("fotoMobil", selectedImage);
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
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleImageUpdate,
    loading,
    updateLoading,
    imageLoading,
    validateYear,
    validatePrice,
    currentYear,
    startYear,
  };
};
