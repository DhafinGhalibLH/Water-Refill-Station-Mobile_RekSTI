// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBazl2O46QL3t9UEt-SBplcsXBE7Ol1o6I",
  authDomain: "waterrefillstation-27f4b.firebaseapp.com",
  projectId: "waterrefillstation-27f4b",
  storageBucket: "waterrefillstation-27f4b.appspot.com",
  messagingSenderId: "78994317687",
  appId: "1:78994317687:web:02509100dd7d705f4c0172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);