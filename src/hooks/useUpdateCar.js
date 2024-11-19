import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchDetailsCars as detailsCarService,
  updateCar as updateCarService,
} from "../services/cars.service";

export const useUpdateCar = () => {
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [carDetails, setCarDetails] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    licensePlate: "",
    price: "",
    image: null,
  });

  useEffect(() => {
    const loadCarsDetail = async () => {
      if (!id) {
        setNotFound(true);
        return;
      }

      try {
        await detailsCarService(id, (status, data) => {
          if (status === "Success" && data?.car) {
            setCarDetails(data);
            setImagePreview(data.car.fotoMobil);
            setFormData({
              name: data.car.name || "",
              year: data.car.tahun || "",
              licensePlate: data.car.noPlat || "",
              price: data.car.harga || "",
              image: null,
            });
          } else {
            setNotFound(true);
          }
        });
      } catch (error) {
        console.error("Error loading car details:", error);
        setNotFound(true);
      }
    };

    loadCarsDetail();
  }, [id]);

  const handleImageUpdate = (e) => {
    const fileImage = e.target.files[0];
    if (fileImage) {
      const previewUrl = URL.createObjectURL(fileImage);
      setImagePreview(previewUrl);
      setFormData((prev) => ({
        ...prev,
        image: fileImage,
      }));
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

    if (!id) {
      console.error("No car ID provided");
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
      await updateCarService(id, submitFormData, (status, response) => {
        if (status === "Success") {
          console.log("Car updated successfully:", response);
          if (response.car?.fotoMobil) {
            setImagePreview(response.car.fotoMobil);
          }
          setFormData((prev) => ({
            ...prev,
            image: null,
          }));
        } else {
          console.error("Error updating car:", response);
          if (carDetails?.car?.fotoMobil) {
            setImagePreview(carDetails.car.fotoMobil);
          }
        }
      });
    } catch (error) {
      console.error("Error in update request:", error);
      if (carDetails?.car?.fotoMobil) {
        setImagePreview(carDetails.car.fotoMobil);
      }
    }
  };

  return {
    notFound,
    imagePreview,
    formData,
    handleImageUpdate,
    handleInputChange,
    handleUpdate,
  };
};

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   fetchDetailsCars as detailsCarService,
//   updateCar as updateCarService,
// } from "../services/cars.service";

// export const useUpdateCar = () => {
//   const { id } = useParams();
//   const [notFound, setNotFound] = useState(false);
//   const [carDetails, setCarDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     year: "",
//     licensePlate: "",
//     price: "",
//     image: null,
//   });

//   useEffect(() => {
//     const loadCarsDetail = async () => {
//       if (!id) {
//         setNotFound(true);
//         return;
//       }

//       setIsLoading(true);
//       try {
//         await detailsCarService(id, (status, data) => {
//           if (status === "Success" && data?.car) {
//             setCarDetails(data);
//             setImagePreview(data.car.fotoMobil);
//             setFormData({
//               name: data.car.name || "",
//               year: data.car.tahun || "",
//               licensePlate: data.car.noPlat || "",
//               price: data.car.harga || "",
//               image: null,
//             });
//           } else {
//             setNotFound(true);
//           }
//         });
//       } catch (error) {
//         console.error("Error loading car details:", error);
//         setNotFound(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadCarsDetail();
//   }, [id]);

//   const handleImageUpdate = (e) => {
//     const fileImage = e.target.files[0];
//     if (fileImage) {
//       const previewUrl = URL.createObjectURL(fileImage);
//       setImagePreview(previewUrl);
//       setFormData((prev) => ({
//         ...prev,
//         image: fileImage,
//       }));
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     if (!id) {
//       console.error("No car ID provided");
//       return;
//     }

//     setIsLoading(true);

//     const submitFormData = new FormData();
//     submitFormData.append("name", formData.name);
//     submitFormData.append("tahun", formData.year);
//     submitFormData.append("noPlat", formData.licensePlate);
//     submitFormData.append("harga", formData.price);

//     if (formData.image instanceof File) {
//       submitFormData.append("fotoMobil", formData.image);
//     }

//     try {
//       await updateCarService(id, submitFormData, (status, response) => {
//         if (status === "Success") {
//           console.log("Car updated successfully:", response);
//           if (response.car?.fotoMobil) {
//             setImagePreview(response.car.fotoMobil);
//           }
//           setFormData((prev) => ({
//             ...prev,
//             image: null,
//           }));
//         } else {
//           console.error("Error updating car:", response);
//           if (carDetails?.car?.fotoMobil) {
//             setImagePreview(carDetails.car.fotoMobil);
//           }
//         }
//       });
//     } catch (error) {
//       console.error("Error in update request:", error);
//       if (carDetails?.car?.fotoMobil) {
//         setImagePreview(carDetails.car.fotoMobil);
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     notFound,
//     isLoading,
//     imagePreview,
//     formData,
//     handleImageUpdate,
//     handleInputChange,
//     handleUpdate,
//   };
// };
