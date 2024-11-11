import {createContext, useState, useEffect} from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  logoutRequest,
} from "../api/auth.js";

export const AuthContext = createContext({
  logged: false,
  role: null, // Cambiado a null para indicar que inicialmente no tiene rol
});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contextValue, setAuthContext] = useState({
    logged: false,
    role: null,
  });
  const [errors, setErrors] = useState([]);

  const signup = async userData => {
    try {
      await registerRequest(userData).then(res => {
        setIsAuthenticated(true);
        setUser(res.data);
      });
    } catch (error) {
      setErrors([error.response.data]);
    }
  };

  const login = async userData => {
    try {
      await loginRequest(userData).then(res => {
        setIsAuthenticated(true);
        setUser(res.data);
      });
    } catch (error) {
      setErrors([error.response.data]);
    }
  };

  const logout = () => {
    logoutRequest();
    setIsAuthenticated(false);
    setUser(false);
    setAuthContext({logged: false, role: null});
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    if (user) {
      setAuthContext({logged: isAuthenticated, role: user.data.user.role});
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await verifyTokenRequest();
        if (!res.data) {
          setIsAuthenticated(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
        errors,
        login,
        logout,
        contextValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
