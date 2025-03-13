import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser(username);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <LoginContext.Provider value={{ user, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};
