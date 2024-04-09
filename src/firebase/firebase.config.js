// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeFJ77X17FMJGsyF2p-aUE5kdpGmjdyiY",
  authDomain: "real-estate-6114b.firebaseapp.com",
  projectId: "real-estate-6114b",
  storageBucket: "real-estate-6114b.appspot.com",
  messagingSenderId: "777383042788",
  appId: "1:777383042788:web:6b8aeeb3a2aaa179c296f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;