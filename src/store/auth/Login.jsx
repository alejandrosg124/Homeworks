import { React, useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmailPassword, loginWithGoogle, logoutAuth } from "./registerAuth";
import { Link } from "react-router-dom";
import { GestionCuenta } from "./GestionCuenta";

export const Login = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.auth);
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const onInputChange = (evt) => {
        const {name, value} = evt.target;
        setFormState({
            ...formState, [name]: value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(loginWithEmailPassword(formState.email, formState.password))
            .then(() => {
                setFormState({
                    email: '',
                    password: ''
                });
            });
    };

    return (
        <>
            <h1>Iniciar Sesión</h1>
            <hr />
            <h4>Ingresa tus datos para acceder</h4>
        
            <form onSubmit={onSubmit}>
                <input name='email' type='email' placeholder="Correo electrónico"
                    onChange={onInputChange} value={formState.email} />
                <input name='password' type='password' placeholder="Contraseña"
                    onChange={onInputChange} value={formState.password} />
                <button type='submit'>Iniciar Sesión</button>
            </form>

            <div className="flex">
                <img className="googleImg" src='src/assets/googleicon.png' alt='google icon' />
                <button onClick={() => dispatch(loginWithGoogle()).catch(error => {
                    console.error(error);
                })}>Iniciar sesión con Google</button>
            </div>

            {status === 'authenticated' && (
                <>
                    <GestionCuenta />
                    <button className="logout" onClick={async () => {
                        try {
                            await dispatch(logoutAuth());
                            alert("Cerraste sesión exitosamente");
                        } catch (error) {
                            console.error(error);
                        }
                    }}>
                        Cerrar sesión
                    </button>
                </>
            )}

            <p>¿No tienes cuenta? <Link to="/registro"><button>Registrarse</button></Link></p>
        </>
    );
};
