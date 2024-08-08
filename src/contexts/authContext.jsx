import {createContext, useState, useEffect} from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
} from "../api/auth.js";
import Cookies from "js-cookie";

// create context
export const AuthContext = createContext({
  logged: false,
  admin: false,
});

// create provider
export const AuthProvider = ({children}) => {
  // user which can be read by every component in the app
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  // ??
  const [contextValue, setAuthContext] = useState({
    logged: false,
    admin: false,
  });
  // ?

  const signup = async userData => {
    try {
      const res = await registerRequest(userData);
      console.log(res.data);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      console.error(error.response.data);
      setErrors([error.response.data]);
    }
  };

  const login = async userData => {
    try {
      const res = await loginRequest(userData);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      setErrors([error.response.data]);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(false);
  };

  // clear errors after 5 seconds
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
      setAuthContext({logged: isAuthenticated, admin: user.isAdmin});
    }
  }, [isAuthenticated, user]);

  // check if user is logged in
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const cookie = Cookies.get();

        if (!cookie.token) {
          setIsAuthenticated(false);
          return setUser(false);
        }

        const res = await verifyTokenRequest(cookie.token);
        if (!res.data) {
          setIsAuthenticated(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(false);
        console.log(error);
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
