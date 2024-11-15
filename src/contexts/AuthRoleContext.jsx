import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRoleContext = createContext();

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
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

  const login = (user, token) => {
    Cookies.set("token", token);
    dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });

    if (
      user.role === "Superadmin" ||
      user.role === "Admin" ||
      user.role === "admin" ||
      user.role === "superadmin"
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

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthRole = () => useContext(AuthRoleContext);
