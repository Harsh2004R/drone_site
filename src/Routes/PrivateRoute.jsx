import React,{ useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";






const PrivateRoute = ({ children }) => {

    const  {isAuth}  = useContext(AuthContext)
    if (!isAuth) {
        console.log(isAuth)
        return <Navigate to="/login" />
    }
   
    return children

}

export default PrivateRoute
