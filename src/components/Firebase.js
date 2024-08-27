// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Add SDKs for Firebase products from here if required
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVGcCbkHB91vuZ-6QWSBqK8XEEwdp8Jfs",
  authDomain: "feast-finder-react.firebaseapp.com",
  projectId: "feast-finder-react",
  storageBucket: "feast-finder-react.appspot.com",
  messagingSenderId: "489613586211",
  appId: "1:489613586211:web:be293ebe8d3b67b14ce696",
  measurementId: "G-C17GM6FQK1",
};

// Initialize Firebase and get a reference to the Firebase app object
export const firebaseApp = initializeApp(firebaseConfig);

// export the analytics object so that it can be used to track user behavior in the app
export const analytics = getAnalytics(firebaseApp);

// export the auth object so that it can be used to authenticate users in the app
export const auth = getAuth(firebaseApp);

// export the db object so that it can be used to interact with the Firestore database in the app
export const db = getFirestore(firebaseApp);
