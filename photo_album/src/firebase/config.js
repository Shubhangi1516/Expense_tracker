// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
/*
//import * as firebase from 'firebase/app';
//import 'firebase/storage';
//import 'firebase/firestore';
*/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage,ref} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVwdPWkfALVQcaAmcK97Phjazky-Br6vo",
  authDomain: "firegram-74166.firebaseapp.com",
  projectId: "firegram-74166",
  storageBucket: "firegram-74166.appspot.com",
  messagingSenderId: "355334635143",
  appId: "1:355334635143:web:10464b0280218b40800222"
};

/*
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage=firebase.storage();
const projectFirestore=firebase.firestore();
*/

const app = initializeApp(firebaseConfig);
const projectFirestore= getFirestore(app);
const projectStorage= getStorage(app);

export {projectStorage,projectFirestore};