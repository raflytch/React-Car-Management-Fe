import { Navigate, useLocation } from "react-router-dom";
import { useAuthRole } from "../contexts/AuthRoleContext";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const ProtectedRoute = ({
  children,
  allowedRoles = ["admin", "superadmin"],
}) => {
  const location = useLocation();
  const { isAuthenticated } = useAuthRole();
  const token = Cookies.get("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role?.toLowerCase();

    if (!allowedRoles.includes(userRole)) {
      return <Navigate to="/" replace />;
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
  } catch (error) {
    console.error("Token validation error:", error);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
