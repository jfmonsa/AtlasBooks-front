import { createContext, useContext, useState } from "react";
import { GetChangePass} from "../api/apiChangePass";


const ChangePassContext = createContext();

export const UseChangePass = () => {
    const context = useContext(ChangePassContext);

    if (!context) {
        throw new Error("UseAccount must be used within an AccountProvider");
    }

    return context;
}


export const ChangePassProvider = ({ children }) => {

    const [changePass, setChangePass] = useState([]);

    const createChangePass = async (currentPassword, newPassword, confirmPassword) => {
        
        const res = await GetChangePass(currentPassword, newPassword, confirmPassword);
        console.log(res);
    }
    return (
        <ChangePassContext.Provider value={{changePass, createChangePass}}>
            {children}
        </ChangePassContext.Provider>
    );
}