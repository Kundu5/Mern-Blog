// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-80973.firebaseapp.com",
  projectId: "blog-80973",
  storageBucket: "blog-80973.appspot.com",
  messagingSenderId: "242235658859",
  appId: "1:242235658859:web:8e33c7b4163325555b572e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);