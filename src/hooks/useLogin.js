import { useState } from "react";
import { useAuthRole } from "../contexts/AuthRoleContext";
import Cookies from "js-cookie";
import { Login as loginService } from "../services/auth.service";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login: authLogin } = useAuthRole();

  const login = async (email, password) => {
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }

    const data = {
      email: email.trim(),
      password: password,
    };

    setLoading(true);
    setErrorMessage("");

    await loginService(data, (status, response) => {
      setLoading(false);
      if (status === "Success") {
        Cookies.set("token", response.token);
        authLogin(response, response.token);
      } else {
        setErrorMessage(response);
      }
    });
  };

  return {
    login,
    loading,
    errorMessage,
  };
};

export default useLogin;
