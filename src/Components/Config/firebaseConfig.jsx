// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnhn_E9DF4O-g_vCCVil2jRsrX1geqb-I",
  authDomain: "practice-database-f3376.firebaseapp.com",
  projectId: "practice-database-f3376",
  storageBucket: "practice-database-f3376.appspot.com",
  messagingSenderId: "153319585913",
  appId: "1:153319585913:web:aaacaeb3ea1d56d2913ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "gs://my-custom-bucket");

export {auth, database, storage}