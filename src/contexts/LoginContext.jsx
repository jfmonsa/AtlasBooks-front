import {createContext} from "react";

const LoginContext = createContext({
  logged: true,
  admin: false,
});

export default LoginContext;
