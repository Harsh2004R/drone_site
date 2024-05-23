import React, { useState, createContext } from "react";

export const AuthContext = createContext();


function AuthContextProvider(props) {
    return (
        <AuthContext.Provider>
            {props.childern}
        </AuthContext.Provider>

    )


}


export default AuthContextProvider;