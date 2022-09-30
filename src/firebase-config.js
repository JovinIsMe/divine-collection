// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "divine-collection-9b2aa.firebaseapp.com",
  projectId: "divine-collection-9b2aa",
  storageBucket: "divine-collection-9b2aa.appspot.com",
  messagingSenderId: "545059384556",
  appId: "1:545059384556:web:968539c212134455ac09c9",
  measurementId: "G-0QVJ1ZWX5C"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();