import { createContext } from "react"


const LoginContext = createContext({

    logged: true,
    admin: true

})

export default LoginContext