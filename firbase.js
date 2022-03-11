// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsIM5lyttAXlOQIbGfNNE0iVDyalApMKo",
  authDomain: "bot-z-870a0.firebaseapp.com",
  projectId: "bot-z-870a0",
  storageBucket: "bot-z-870a0.appspot.com",
  messagingSenderId: "702792021760",
  appId: "1:702792021760:web:0ed1ae1f074eb7551325e5",
  measurementId: "G-1HQX2BP493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);