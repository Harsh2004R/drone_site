
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(true);
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Check for token in local storage when the app initializes
        const storedToken = localStorage.getItem('token');
        console.log("token comming from ", storedToken)
        if (storedToken) {
            setIsAuth(true);
            setToken(storedToken);
        }
    }, []);

    const login = (newToken) => {
        setToken(newToken);
        setIsAuth(true);
        localStorage.setItem('token', newToken);
    };

    const logout = () => {
        setToken(null);
        setIsAuth(false);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isAuth, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
