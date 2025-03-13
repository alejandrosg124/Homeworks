import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoginContext } from '../Contexts/LoginContext';

const PrivateRoute = ({ component: Component }) => {
    const { user } = useContext(LoginContext);

    return user ? (
        <Component />
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateRoute;
