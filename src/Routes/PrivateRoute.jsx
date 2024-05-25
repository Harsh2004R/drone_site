import React,{ useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";






const PrivateRoute = ({ children }) => {

    const  {isAuth}  = useContext(AuthContext)
    return isAuth ? children : <Navigate to="/login" />;

}

export default PrivateRoute
