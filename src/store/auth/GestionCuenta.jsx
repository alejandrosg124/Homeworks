import { useDispatch, useSelector } from "react-redux";
import { deleteAccount, updateUser } from "../slices/authSlice";
import { useState } from "react";
import { updateEmail, updatePassword } from "firebase/auth";
import { auth } from "../../firebase/config";

export const GestionCuenta = () => {
    const dispatch = useDispatch();
    const { email } = useSelector(state => state.auth);
    const [modoEditar, setModoEditar] = useState(false);
    const [formData, setFormData] = useState({
        email: email || '',
        password: '',
        nuevaPassword: ''
    });

    const handleDelete = () => {
        try {
            dispatch(deleteAccount());
        } catch (error) {
            console.error("Error eliminando cuenta:", error);
            alert("Error al eliminar la cuenta");
        }
    };

    const handleEdit = () => {
        if (modoEditar) {
            try {
                if (formData.email !== email) {
                    dispatch(updateEmailAuth(formData.email));
                }
                if (formData.nuevaPassword) {
                    dispatch(updatePasswordAuth(formData.nuevaPassword));
                }
                alert("Cambios guardados exitosamente");
            } catch (error) {
                console.error("Error actualizando datos:", error);
                alert("Error al actualizar los datos. Por favor intenta nuevamente.");
            }
        }
        setModoEditar(!modoEditar);
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            {modoEditar ? (
                <div>
                    <input type="email" name="email" value={formData.email}
                        onChange={handleChange} placeholder="Correo electrónico"/>
                    <input type="password" name="password" value={formData.password}
                        onChange={handleChange} placeholder="Contraseña actual"/>
                    <input type="password" name="nuevaPassword" value={formData.nuevaPassword}
                        onChange={handleChange} placeholder="Nueva contraseña" />
                </div>
            ) : (
                <div>
                    <p>Bienvenido, {email || 'Usuario'}!</p>
                </div>
            )}
            <div>
                <button onClick={handleEdit}>
                    {modoEditar ? 'Guardar' : 'Editar Cuenta'}
                </button>
                <button onClick={handleDelete}>Eliminar Cuenta</button>
            </div>
        </div>
    );
};
