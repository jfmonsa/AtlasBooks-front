import { createContext, useContext } from "react";
import {ChangePass} from "../api/apiAccount";


const AccountContext = createContext();

export const useAccount = () => {
    const context = useContext(AccountContext);

    if (!context) {
        throw new Error("useAccount must be used within an AccountProvider");
    }

    return context;
}

const getChangePass = async (currentPassword, newPassword, confirmPassword) => {

    const res = await ChangePass(currentPassword, newPassword, confirmPassword)
    console.log(res);

    return (
        <AccountContext.Provider
            value={{
                getChangePass
            }}
        >
        </AccountContext.Provider>
    )
}

export const AccountProvider = ({ children }) => {
    return (
        <AccountContext.Provider value={{}}>
            {children}
        </AccountContext.Provider>
    );
}