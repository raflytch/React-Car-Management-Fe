import axiosInstance from "../api/axiosInstance";

const Login = async (data, callback) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    const userData = response.data.data;
    callback("Success", userData);
  } catch (err) {
    const errorMessage = err.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
  }
};

const Register = async (data, callback) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    const userData = response.data.data;
    console.log(userData);
    callback("Success", userData);
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
  }
};

export { Login, Register };
