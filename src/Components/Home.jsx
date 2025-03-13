import React, { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

const Home = () => {
    const { user, logout } = useContext(LoginContext);

    return (
        <>
            <h2>Bienvenido a Fake Loginn</h2>
            {user && <h3>Bienvenido, {user}</h3>}
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default Home;
