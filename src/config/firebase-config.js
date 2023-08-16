// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApb_ScFEnEil9KmYfS9RUHZHjZ0dXHdm0",
  authDomain: "weather-forecast-react-a2b38.firebaseapp.com",
  projectId: "weather-forecast-react-a2b38",
  storageBucket: "weather-forecast-react-a2b38.appspot.com",
  messagingSenderId: "945129013157",
  appId: "1:945129013157:web:410f138abf21812a96b24c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);