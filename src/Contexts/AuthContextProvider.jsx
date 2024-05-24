import React, { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(true);

    const login = () => {
        setIsAuth(true);
    };

    const logOut = () => {
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
