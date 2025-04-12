import { React, useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from 'react-redux';
import { registerAuth, loginWithEmailPassword, loginWithGoogle, logoutAuth } from "./registerAuth";
import { Link } from "react-router-dom";


export const Registro = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [formState, setFormState] = useState({
        email: '',
        password: '',
    })

    const onInputChange = (evt) => {
        const {name, value} = evt.target;
        setFormState({
            ...formState, [name]: value
        })
    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        console.log(formState)
        dispatch(registerAuth(formState.email ,formState.password))
            .then(() => {
                setFormState({
                    email: '',
                    password: ''
                })
            })
    }

    return(
        <>
            <h1>Registrarse</h1>
            <hr />
            <h4>Ingresa tus datos, recuerda ingresar tu correo completo para registro correctamente</h4>
            <h4>Al iniciar sesión con google, deberás dar aceptar en la alerta de exito para cerrar la ventana pop up</h4>
            <h4>La contraseña deberá tener al menos 6 dígitos</h4>

            <form onSubmit={(event) => onSubmit(event)}>
                <input name='email' type='email' onChange={onInputChange} value={formState.email} />
                <input name='password' type='password' onChange={onInputChange} value={formState.password} />
                <button type='submit'> Registrar </button>
            </form>

            <div className="flex">
                <img className="googleImg" src='src/assets/googleicon.png' alt='google icon' />
                <button onClick={() => dispatch(loginWithGoogle()).catch(error => {
                    console.error(error);
                    setError('Error al loguearse con Google');
                })}> Iniciar sesión con Google </button>
            </div>
            <p>¿Ya tienes una cuenta? <Link to="/"><button>Iniciar sesión</button></Link></p>
        </>
    )
}
