import axiosInstance from "../api/axiosInstance";

const updateCar = async (id, data, callback) => {
  try {
    const response = await axiosInstance.patch(`/cars${id}`, data);
    const updatedCar = response.data.data;
    callback("Success", updatedCar);
  } catch (error) {
    const errorMessage = err.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
  }
};

export default { updateCar };
