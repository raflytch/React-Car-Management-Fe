import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuthRole } from "../contexts/AuthRoleContext";

const useProtected = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, login } = useAuthRole();
  const token = Cookies.get("token");

  useEffect(() => {
    const validateToken = () => {
      if (token) {
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

          const role = decodedToken.role?.toLowerCase();
          const isAdmin = role === "admin" || role === "superadmin";

          if (isAdmin) {
            if (location.pathname === "/login" || location.pathname === "/") {
              navigate("/dashboard");
            }
          } else {
            if (location.pathname === "/dashboard") {
              navigate("/");
            }
          }
        } catch (error) {
          console.error("Token validation error:", error);
          Cookies.remove("token");
          navigate("/login", { state: { from: location } });
        }
      } else if (location.pathname !== "/login") {
        navigate("/login", { state: { from: location } });
      }
    };

    validateToken();
  }, [location, navigate, token, isAuthenticated, login]);

  return token;
};

export default useProtected;
