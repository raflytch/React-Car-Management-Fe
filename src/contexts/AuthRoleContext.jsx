import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AuthRoleContext = createContext();

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "INITIALIZE":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export const AuthRoleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = () => {
      setIsLoading(true);
      const token = Cookies.get("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);

          if (decodedToken.exp * 1000 < Date.now()) {
            Cookies.remove("token");
            setIsLoading(false);
            return;
          }

          const user = {
            id: decodedToken.id,
            email: decodedToken.email,
            role: decodedToken.role,
            firstName: decodedToken.firstName,
            lastName: decodedToken.lastName,
            fotoProfil: decodedToken.fotoProfil,
          };

          dispatch({
            type: "INITIALIZE",
            payload: { user, token },
          });
        } catch (error) {
          console.error("Token initialization error:", error);
          Cookies.remove("token");
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = (user, token) => {
    Cookies.set("token", token);
    dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });

    if (
      user.role?.toLowerCase() === "admin" ||
      user.role?.toLowerCase() === "superadmin"
    ) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  const logout = () => {
    Cookies.remove("token");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <AuthRoleContext.Provider value={{ ...state, login, logout, isLoading }}>
      {children}
    </AuthRoleContext.Provider>
  );
};

export const useAuthRole = () => useContext(AuthRoleContext);
