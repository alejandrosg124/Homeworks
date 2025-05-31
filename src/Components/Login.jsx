import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../Contexts/LoginContext';
import styles from './Login.module.scss';

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
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <div className={styles.avatarContainer}>
                    <div className={styles.avatar}></div>
                    <div className={styles.avatar}></div>
                    <div className={styles.avatar}></div>
                </div>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Iniciar sesión</button>
                    <button type="button" className={styles.cancelButton}>Cancelar</button>
                </form>
                <a href="#" className={styles.forgotPasswordLink}>
                    Registrar / Recuperar contraseña
                </a>
            </div>
        </div>
    );
};

export default Login;
