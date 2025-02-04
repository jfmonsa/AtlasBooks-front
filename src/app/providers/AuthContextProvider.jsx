import { useState, useEffect, useCallback } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  logoutRequest,
} from "../../features/auth/services/auth.js";

import { AuthContext } from "@contexts/AuthContext.js";

/**
 * AuthProvider component that provides authentication context to its children.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that will have access to the authentication context.
 * @returns {React.ReactNode} The provider component that wraps its children with authentication context.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);

  /**
   * Checks if the user is already logged in by verifying the token.
   * If the token is valid, sets the user state.
   */
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await verifyTokenRequest();
        if (!response.data?.data?.user) {
          return;
        }
        setUser(response.data.data.user);
      } catch {
        setUser(null);
      }
    };
    checkLogin();
  }, []);

  /**
   * Registers a new user.
   *
   * @param {Object} userData - The user data for registration.
   */
  const signup = useCallback(async (userData) => {
    try {
      const response = await registerRequest(userData);
      setUser(response.data.data.user);
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Registration failed";
      setErrors([errorMessage]);
    }
  }, []);

  /**
   * Logs in a user.
   *
   * @param {Object} userData - The user data for login.
   */
  const login = useCallback(async (userData) => {
    try {
      const response = await loginRequest(userData);
      setUser(response.data.data.user);
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Registration failed";
      setErrors([errorMessage]);
    }
  }, []);

  /** Logs out the current user. */
  const logout = useCallback(() => {
    logoutRequest();
    setUser(null);
  }, []);

  /** clear errors after 5 seconds */
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
      value={{
        signup,
        user,
        errors,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
