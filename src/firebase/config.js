// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkXyYlEOEnvLGm4HNkamO4iqEusn3lrZk",
  authDomain: "guaf-coderhouse.firebaseapp.com",
  projectId: "guaf-coderhouse",
  storageBucket: "guaf-coderhouse.appspot.com",
  messagingSenderId: "922474583258",
  appId: "1:922474583258:web:5f2ff8e197fb0f1cdec1e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const data = getFirestore(app);
export default data