// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBOCtlcEgCXWHPRdppVHGQLDEjean7hr10",
  authDomain: "book-sell-next-level.firebaseapp.com",
  projectId: "book-sell-next-level",
  storageBucket: "book-sell-next-level.appspot.com",
  messagingSenderId: "480049335470",
  appId: "1:480049335470:web:0ea0bd2cc634ee5788b13f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

