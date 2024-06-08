import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/authContext.jsx";

export const ProtectedRoute = ({children}) => {

    const {contextValue} = useAuth()
    const context = contextValue;
    const user = context.logged
    const navigate = useNavigate();

    useEffect(() => {
        if (!user){
            navigate('/login')
        }
    }, [navigate,user]);

    return children;
}
