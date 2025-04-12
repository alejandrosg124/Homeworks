import { auth, googleProvider } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut, deleteUser } from "firebase/auth";
import { register, login, logout, updateUser, deleteAccount } from "../slices/authSlice";

export const registerAuth = (email, password) => {
    return async(dispatch) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        if (response) {
            await updateProfile(auth.currentUser, {
                displayName: 'Zorro',
                photoURL: ''
            });
            const { email } = response.user;
            dispatch(register({ email }));
            alert("Registrasto exitoso")

        } else {
            throw new Error('Error al registrarse');
        }
    };
};

export const loginWithEmailPassword = (email, password) => {
    return async(dispatch) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const { uid, email: userEmail, displayName, photoURL } = response.user;
            dispatch(login({ uid, email: userEmail, displayName, photoURL }));
            alert("Iniciaste sesión exitosamente")
        } catch (error) {
            console.error(error);
            throw new Error('No se pudo iniciar sesion');
        }
    };
};

export const loginWithGoogle = () => {
    return async(dispatch) => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const { uid, email, displayName, photoURL } = result.user;
            dispatch(login({ uid, email, displayName, photoURL }));
            alert("Iniciaste sesión de google exitosamente");
        } catch (error) {
            console.error(error);
            throw new Error('Error al iniciar sesion con google');
        }
    };
};

export const logoutAuth = () => {
    return async(dispatch) => {
        await signOut(auth);
        dispatch(logout());
    };
};

export const updateEmailAuth = (newEmail) => {
    return async(dispatch) => {
        try {
            await updateEmail(auth.currentUser, newEmail);
            dispatch(updateUser({ email: newEmail }));
            alert("Email actualizado exitosamente");
        } catch (error) {
            console.error(error);
            throw new Error('Error al actualizar el email');
        }
    };
};

export const updatePasswordAuth = (newPassword) => {
    return async(dispatch) => {
        try {
            await updatePassword(auth.currentUser, newPassword);
            alert("Contraseña actualizada exitosamente");
        } catch (error) {
            console.error(error);
            throw new Error('Error al actualizar la contraseña');
        }
    };
};

export const deleteUserAccount = () => {
    return async(dispatch) => {
        try {
            const user = auth.currentUser;
            await deleteUser(user);
            dispatch(deleteAccount());
            alert("Cuenta eliminada exitosamente");
        } catch (error) {
            console.error(error);
            throw new Error('Error al eliminar la cuenta');
        }
    };
};

