import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5Aln_A94IUHi2jZlSYjQexcC2_8ssRx4",
  authDomain: "react-netflix-clone-77147.firebaseapp.com",
  projectId: "react-netflix-clone-77147",
  storageBucket: "react-netflix-clone-77147.appspot.com",
  messagingSenderId: "250950988060",
  appId: "1:250950988060:web:d1dc56e2f2994e9209cad9",
  measurementId: "G-0911G8KHE4"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);