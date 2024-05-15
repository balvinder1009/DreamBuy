// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "dreambuy-a24e3.firebaseapp.com",
  projectId: "dreambuy-a24e3",
  storageBucket: "dreambuy-a24e3.appspot.com",
  messagingSenderId: "94738586707",
  appId: "1:94738586707:web:e535e3dabe2a1180a87aa6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
