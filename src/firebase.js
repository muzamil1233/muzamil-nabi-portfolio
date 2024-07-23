// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuuM8y65gYR6e3PA8iWd0q0UiHggcnfJI",
  authDomain: "reactportfolio-f7027.firebaseapp.com",
  projectId: "reactportfolio-f7027",
  storageBucket: "reactportfolio-f7027.appspot.com",
  messagingSenderId: "163310322374",
  appId: "1:163310322374:web:ce80d73f205374654e0dc7",
  measurementId: "G-1579NT369D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()
