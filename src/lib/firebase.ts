// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyDagQyDlSIWydUTbmcyVHMfOVf8Ca1Xzxo",
    authDomain: "floppaloppa-e227b.firebaseapp.com",
    projectId: "floppaloppa-e227b",
    storageBucket: "floppaloppa-e227b.appspot.com",
    messagingSenderId: "764563520237",
    appId: "1:764563520237:web:215b88c393df853dffeae4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
