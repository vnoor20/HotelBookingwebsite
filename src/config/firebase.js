// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth ,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD-OIEFrEpgUTJKHVGh9mI1GD9Wo71OMVY",
  authDomain: "hotel-recommendation-sys-3215e.firebaseapp.com",
  projectId: "hotel-recommendation-sys-3215e",
  storageBucket: "hotel-recommendation-sys-3215e.appspot.com",
  messagingSenderId: "271826313224",
  appId: "1:271826313224:web:01e07ed40913a0be26b1bd",
  measurementId: "G-GSSJM6G5XY"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider=new GoogleAuthProvider;