import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: 'checking',
        uid: null,
        email: null,          
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        register: (state, action) => {
            state.email = action.payload.email
        },
        updateUser: (state, action) => {
            const { email } = action.payload;
            state.email = email;
        },
        logout: (state) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        deleteAccount: (state) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = null;
        }
    }
})

export const { login, logout, checkingCredentials, register, updateUser, deleteAccount } = authSlice.actions
