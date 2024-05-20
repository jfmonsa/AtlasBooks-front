import {createContext} from "react";
import {useAuth} from "./authContext";

const LoginContext = () => {
  const {isAuthenticated, user} = useAuth();
  
  const Context = 
  createContext({
    logged: isAuthenticated,
    admin:  user.isAdmin ? true : false,
  });
  return Context
}


export default LoginContext;
