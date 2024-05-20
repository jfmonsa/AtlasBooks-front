import {createContext, useState, useContext, useEffect} from "react";
import {registerRequest, loginRequest, verifyTokenRequest} from "../api/auth.js";
import Cookies from "js-cookie";

export const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (userData) => {
    try {
      const res = await registerRequest(userData);
      if (res.status === 201) {
        setIsAuthenticated(true);
        setUser(res.data);
      }
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const login = async userData => {
    try {
      const res = await loginRequest(userData);
      setIsAuthenticated(true);
      setUser(res.data);
      
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(false);
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
    const checkLogin = async () => {
      const cookie = Cookies.get();

      if (!cookie.token) {
        setIsAuthenticated(false);
        return setUser(false);
      }

      try {
        const res = await verifyTokenRequest(cookie.token);
        if (!res.data) {
        setIsAuthenticated(false);
        return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
      }catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{signup, user, isAuthenticated, errors, login,logout}}
    >
      {children}
    </AuthContext.Provider>
  );
};
