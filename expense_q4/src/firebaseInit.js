// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa3T5ixZA88XQYJMWXOQE0WCV7JNx4uq4",
  authDomain: "expense-tracker-3113f.firebaseapp.com",
  projectId: "expense-tracker-3113f",
  storageBucket: "expense-tracker-3113f.appspot.com",
  messagingSenderId: "830129463761",
  appId: "1:830129463761:web:39f9acb1e4b748987f00f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };