import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../utils/useAuth.js";

export const Route = ({children}) => {
  const {contextValue} = useAuth();
  const user = contextValue.logged;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return children;
};
