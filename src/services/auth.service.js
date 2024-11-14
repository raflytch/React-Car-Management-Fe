import axios from "axios";

const Login = async (data, callback) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URI}/auth/login`,
      data
    );
    callback("Success", response.data.data.token);
  } catch (err) {
    const errorMessage = err.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
  }
};

const Register = async (data, callback) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URI}/auth/register`,
      data
    );
    callback("Success", response.data.data.token);
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
  }
};

export { Login, Register };
