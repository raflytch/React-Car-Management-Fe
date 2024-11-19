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

const fetchDetailsCars = async (id, callback) => {
  try {
    const response = await axiosInstance.get(`/cars/${id}`);
    const carsData = response.data.data;
    callback("Success", carsData);
  } catch (err) {
    const errorMessage = err.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
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

const createCar = async (data, callback) => {
  try {
    const response = await axiosInstance.post("/cars", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const newCar = response.data.data;
    callback("Success", newCar);
  } catch (err) {
    const errorMessage = err.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
  }
};

const deleteCar = async (id) => {
  try {
    const response = await axiosInstance.delete(`/cars/${id}`);
    return {
      success: true,
      message: response.data.message || "Car deleted successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Failed to delete car",
    };
  }
};

export { fetchCars, fetchDetailsCars, updateCar, createCar, deleteCar };
