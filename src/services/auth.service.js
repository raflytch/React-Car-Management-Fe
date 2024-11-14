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

export default Login;
