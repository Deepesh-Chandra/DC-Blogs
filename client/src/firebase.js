// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "dc-blogs2.firebaseapp.com",
  projectId: "dc-blogs2",
  storageBucket: "dc-blogs2.appspot.com",
  messagingSenderId: "94774059290",
  appId: "1:94774059290:web:a786d8d41d69777d208ca3",
  measurementId: "G-1L672N2TS9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);