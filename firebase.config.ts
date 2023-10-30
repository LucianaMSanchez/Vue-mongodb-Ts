// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3_gJG6yz_Qd_b2tAqGaoHyAEm8zdNjS4",
  authDomain: "bookmarks-2b6e2.firebaseapp.com",
  projectId: "bookmarks-2b6e2",
  storageBucket: "bookmarks-2b6e2.appspot.com",
  messagingSenderId: "826214871007",
  appId: "1:826214871007:web:a880d28e820a9567579e6a",
  measurementId: "G-Z6XVJ79QS9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth : Auth = getAuth(app);
// const analytics = getAnalytics(app);