import { createContext, useContext, useState } from "react";
import { GetChangeEmail } from "../../features/auth/services/apiChangeEmail";

const ChangeEmailContext = createContext();

export const UseChangeEmail = () => {
  const context = useContext(ChangeEmailContext);

  if (!context) {
    throw new Error("ChangePass must be used within an ChangePassProvider");
  }

  return context;
};

export const ChangeEmailProvider = ({ children }) => {
  // TODO: revisar esto
  const [changeEmail, setChangeEmail] = useState([]);

  const createChangeEmail = async (emails) => {
    const res = GetChangeEmail(emails);
    setChangeEmail(res);
  };
  return (
    <ChangeEmailContext.Provider value={{ changeEmail, createChangeEmail }}>
      {children}
    </ChangeEmailContext.Provider>
  );
};
