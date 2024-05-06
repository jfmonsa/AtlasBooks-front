import { createContext } from "react"


const LoginContext = createContext({

    logged: false,
    admin: false

})

export default LoginContext