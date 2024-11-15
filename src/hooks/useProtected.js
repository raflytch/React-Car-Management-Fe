import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const useProtected = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        if (decodedToken.exp * 1000 < Date.now()) {
          Cookies.remove("token");
          navigate("/login", { state: { from: location } });
        } else {
          const role = decodedToken.role;

          if (role === "Superadmin" || role === "Admin") {
            if (location.pathname === "/login" || location.pathname === "/") {
              navigate("/dashboard");
            }
          } else {
            if (location.pathname === "/dashboard") {
              navigate("/");
            }
          }
        }
      } catch (error) {
        Cookies.remove("token");
        navigate("/login", { state: { from: location } });
      }
    } else if (location.pathname !== "/login") {
      navigate("/login", { state: { from: location } });
    }
  }, [location, navigate, token]);

  return token;
};

export default useProtected;
