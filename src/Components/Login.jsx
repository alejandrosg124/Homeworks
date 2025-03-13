import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../Contexts/LoginContext';

const Login = () => {
    const { login } = useContext(LoginContext);
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login(username);
        navigate('/home');
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
