import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuthRole } from "../contexts/AuthRoleContext";

const useProtectedAll = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, login } = useAuthRole();
  const token = Cookies.get("token");

  useEffect(() => {
    const validateToken = () => {
      if (!token) {
        navigate("/login", { state: { from: location } });
        return;
      }

      try {
        const decodedToken = jwtDecode(token);

        if (decodedToken.exp * 1000 < Date.now()) {
          Cookies.remove("token");
          navigate("/login", { state: { from: location } });
          return;
        }

        if (!isAuthenticated) {
          const user = {
            firstName: decodedToken.firstName,
            role: decodedToken.role,
          };
          login(user, token);
        }
      } catch (error) {
        console.error("Token validation error:", error);
        Cookies.remove("token");
        navigate("/login", { state: { from: location } });
      }
    };

    validateToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, location.pathname]);

  return { isAuthenticated };
};

export default useProtectedAll;