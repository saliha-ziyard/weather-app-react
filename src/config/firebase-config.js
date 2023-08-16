// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd7FwWTqAX_bs_sS1mupNAo4MMEkZKdiY",
  authDomain: "weather-app-react-9900d.firebaseapp.com",
  projectId: "weather-app-react-9900d",
  storageBucket: "weather-app-react-9900d.appspot.com",
  messagingSenderId: "866908009769",
  appId: "1:866908009769:web:0eba88818106b148637338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);