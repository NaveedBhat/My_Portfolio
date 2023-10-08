// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIAgGlx5zEgyF-UnnrvLcnYSSozvPgLCw",
  authDomain: "codewithnaveed-4d1a1.firebaseapp.com",
  projectId: "codewithnaveed-4d1a1",
  storageBucket: "codewithnaveed-4d1a1.appspot.com",
  messagingSenderId: "65157912583",
  appId: "1:65157912583:web:c28651c1cb4ce08fdcb2a2",
  measurementId: "G-Y51QZ5S06H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);