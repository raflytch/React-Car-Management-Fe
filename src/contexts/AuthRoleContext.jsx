import { createContext, useContext, useReducer, useEffect } from "react";
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
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);

          if (decodedToken.exp * 1000 < Date.now()) {
            Cookies.remove("token");
            return;
          }

          const user = {
            email: decodedToken.email,
            role: decodedToken.role,
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

  return (
    <AuthRoleContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthRoleContext.Provider>
  );
};

export const useAuthRole = () => useContext(AuthRoleContext);
