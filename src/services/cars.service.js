import axiosInstance from "../api/axiosInstance";

const fetchCars = async (page = 1, limit = 6, filters = {}) => {
  try {
    const response = await axiosInstance.get("/cars/filter", {
      params: {
        page: Number(page),
        limit: Number(limit),
        name: filters.name,
        harga: filters.harga,
      },
    });

    if (response.data.isSuccess) {
      return {
        success: true,
        data: response.data.data,
      };
    }
    return {
      success: false,
      message: response.data.message || "Failed to fetch cars",
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred",
    };
  }
};

const fetchDetailsCars = async (id) => {
  try {
    const response = await axiosInstance.get(`/cars/${id}`);
    const carsData = response.data.data.car;
    // Check if the response is successful
    if (response.status === 200 && carsData) {
      return {
        status: "Success",
        data: carsData, // Return the actual car details
      };
    } else {
      // Handle unexpected API structure or failure
      return {
        status: "Error",
        message: carsData?.message || "Failed to fetch car details",
      };
    }
  } catch (err) {
    // Catch and handle any errors
    const errorMessage = err.response?.data?.message || err.message || "An unexpected error occurred";
    return {
      status: "Error",
      message: errorMessage,
    };
  }
};


const updateCar = async (id, data, callback) => {
  try {
    const response = await axiosInstance.patch(`/cars/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const updatedCar = response.data.data;
    callback("Success", updatedCar);
  } catch (err) {
    const errorMessage = err.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
  }
};

export { fetchCars, fetchDetailsCars, updateCar };
