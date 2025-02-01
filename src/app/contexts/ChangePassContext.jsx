import { createContext, useContext, useState } from "react";
import { GetChangePass } from "../../features/auth/services/apiChangePass";

const ChangePassContext = createContext();

export const UseChangePass = () => {
  const context = useContext(ChangePassContext);

  if (!context) {
    throw new Error("ChangePass must be used within an ChangePassProvider");
  }

  return context;
};

export const ChangePassProvider = ({ children }) => {
  const [changePass, setChangePass] = useState([]);

  // TODO: revisar esto
  const createChangePass = async (passwords) => {
    const res = GetChangePass(passwords);
    setChangePass(res);
  };
  return (
    <ChangePassContext.Provider value={{ changePass, createChangePass }}>
      {children}
    </ChangePassContext.Provider>
  );
};
