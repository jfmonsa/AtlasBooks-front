import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.js";

/**
 * Guard (HoC) component ensures that only authenticated users can access the wrapped routes.
 * If the user is not authenticated, they are redirected to the login page.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render if the user is authenticated.
 * @returns {React.ReactNode} The child components if the user is authenticated, otherwise redirects to login.
 */
export const ProtectedRoute = ({children}) => {
  const {user} = useAuth();
  // const context = contextValue;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return children;
};
