// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestone } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZQ7yftF4s9xsELGFNk4iKN7ezc_vdBFM",
  authDomain: "alquiler-casa-db.firebaseapp.com",
  projectId: "alquiler-casa-db",
  storageBucket: "alquiler-casa-db.appspot.com",
  messagingSenderId: "1005349118748",
  appId: "1:1005349118748:web:f2c04a2dcf0a725e7c50d9"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

 export const db= getFirestore(app);