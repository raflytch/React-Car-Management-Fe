import axiosInstance from "../api/axiosInstance";

const carById = async (params, callback ) => {
  try {
    const response = await axiosInstance.get("/cars", {
      params: {
        id: params,
      },
    });
    const carData = response.data.data;
    callback("Success", carData);
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
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
    const response = await axiosInstance.patch(`/cars/${id}`, data);
    const updatedCar = response.data.data;
    callback("Success", updatedCar);
  } catch (err) {
    const errorMessage = err.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
  }
};

export { carById, fetchDetailsCars, updateCar };
