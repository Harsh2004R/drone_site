import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";
import LoadingSpinner from "../Components/LoadingSpinner";



const PrivateRoute = ({ children }) => {

    const { isAuth, loading } = useContext(AuthContext)
    if (loading) {
        // Optionally, you can render a loading spinner here
        return <LoadingSpinner/>;
    }
    return isAuth ? children : <Navigate to="/login" />;

}

export default PrivateRoute
