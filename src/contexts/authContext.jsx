import {createContext, useState, useContext, useEffect} from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  logoutRequest,
} from "../api/auth.js";

export const AuthContext = createContext({
  logged: false,
  admin: false,
});

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
  const [contextValue, setAuthContext] = useState({
    logged: false,
    admin: false,
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
      setAuthContext({logged: isAuthenticated, admin: user.isAdmin});
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
