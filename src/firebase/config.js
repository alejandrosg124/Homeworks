// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgmKd_Pp8q2LRNgcsXNcjH9AYs3ek5vqA",
  authDomain: "fir-proyect-22889.firebaseapp.com",
  databaseURL: "https://fir-proyect-22889-default-rtdb.firebaseio.com/",
  projectId: "fir-proyect-22889",
  storageBucket: "fir-proyect-22889.appspot.com",
  messagingSenderId: "959105407631",
  appId: "1:959105407631:web:f00e3c5124173ac50e6efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const db = getDatabase(app);

export { app, auth, googleProvider, db, firebaseConfig };
