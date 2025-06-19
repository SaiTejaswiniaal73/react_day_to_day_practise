// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALP2PCBxjMANFgGdUlS7Gr3x3JG43MGGM",
  authDomain: "r-react-p-a1ec8.firebaseapp.com",
  projectId: "r-react-p-a1ec8",
  storageBucket: "r-react-p-a1ec8.firebasestorage.app",
  messagingSenderId: "482421187806",
  appId: "1:482421187806:web:ffe5901f05032155a50e4f",
  measurementId: "G-J1BB6QGVWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const authentication=getAuth(app)
export  const db=getFirestore(app)