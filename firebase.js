// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAayGrrBvr2qzI4rBTsq2L5qSvN9IdRkdE",
  authDomain: "react-auth-tutorial-25322.firebaseapp.com",
  projectId: "react-auth-tutorial-25322",
  storageBucket: "react-auth-tutorial-25322.appspot.com",
  messagingSenderId: "177809057842",
  appId: "1:177809057842:web:8b07f593a277ea75b6742b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth =  getAuth(app);

export { auth };