// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuii_5d8b4GTIPtqzGkVgLTK_wU0Sxtkk",
  authDomain: "noteapp-auth-3b33f.firebaseapp.com",
  projectId: "noteapp-auth-3b33f",
  storageBucket: "noteapp-auth-3b33f.appspot.com",
  messagingSenderId: "101441421129",
  appId: "1:101441421129:web:863667b1f1c4866f69a498",
  measurementId: "G-5450XMCC09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app;