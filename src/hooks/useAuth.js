import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";

/**
 * Custom hook to access the authentication context.
 *
 * This hook provides access to the authentication context, which includes
 * user information and authentication-related functions such as login, logout, and signup.
 *
 * @throws {Error} If the hook is used outside of an AuthProvider.
 * @returns {Object} The authentication context value.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
