import { useState } from "react";
import { Register as registerService } from "../services/auth.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const register = async (data, callback) => {
    if (
      !data.firstName ||
      !data.lastName ||
      !data.phone ||
      !data.email ||
      !data.password
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required",
      });
      return;
    }

    setLoading(true);
    await registerService(data, (status, response) => {
      setLoading(false);

      if (status === "Success") {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Your account has been created. Please login to continue.",
        }).then(() => {
          navigate("/login");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: response || "An error occurred during registration.",
        });
      }
    });
  };

  return { loading, register };
};

export default useRegister;
