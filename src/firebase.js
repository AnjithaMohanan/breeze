// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOPN2Y5SjnGJSSIsY4UFhLX2Q_9RWufj0",
  authDomain: "breeze-2a6bf.firebaseapp.com",
  projectId: "breeze-2a6bf",
  storageBucket: "breeze-2a6bf.appspot.com",
  messagingSenderId: "233019053047",
  appId: "1:233019053047:web:fcc663f182d101156914f2",
//   measurementId: "G-1MENC6EL03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;
