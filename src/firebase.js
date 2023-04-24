// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQXWlz9PjOJRJ_58tqaJiYja7fX5u33jI",
  authDomain: "chat-app-6856b.firebaseapp.com",
  projectId: "chat-app-6856b",
  storageBucket: "chat-app-6856b.appspot.com",
  messagingSenderId: "702845239098",
  appId: "1:702845239098:web:cffa12f4ee7ecbc1edda03",
  measurementId: "G-SM01BC8ZLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);