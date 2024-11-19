import { useState } from "react";
import { useAuthRole } from "../contexts/AuthRoleContext";
import Cookies from "js-cookie";
import { Login as loginService } from "../services/auth.service";
import Swal from "sweetalert2";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { login: authLogin } = useAuthRole();

  const login = async (email, password) => {
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email and password are required",
      });
      return;
    }

    const data = {
      email: email.trim(),
      password: password,
    };

    setLoading(true);
    await loginService(data, (status, response) => {
      setLoading(false);

      if (status === "Success") {
        Cookies.set("token", response.token);
        authLogin(response, response.token);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You have successfully logged in.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: response,
        });
      }
    });
  };

  return {
    login,
    loading,
  };
};

export default useLogin;
