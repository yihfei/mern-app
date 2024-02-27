// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-app-35e5f.firebaseapp.com",
  projectId: "mern-app-35e5f",
  storageBucket: "mern-app-35e5f.appspot.com",
  messagingSenderId: "311188509716",
  appId: "1:311188509716:web:3757abb4149844ccbfc301"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

