import {createContext, useState, useContext, useEffect} from "react";
import {registerRequest, loginRequest} from "../api/auth.js";

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

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  

  return (
    <AuthContext.Provider
      value={{signup, user, isAuthenticated, errors, login}}
    >
      {children}
    </AuthContext.Provider>
  );
};
