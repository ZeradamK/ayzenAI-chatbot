// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6RH0DBgG17DF7acU6HWYdoHRBW2crPjA",
    authDomain: "ayzenauth.firebaseapp.com",
    projectId: "ayzenauth",
    storageBucket: "ayzenauth.appspot.com",
    messagingSenderId: "191924540793",
    appId: "1:191924540793:web:563b86b8e961245cab8ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
