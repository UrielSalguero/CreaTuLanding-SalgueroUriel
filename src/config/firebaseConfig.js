import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ3uOWcc6NCYfR6FRFN3qhBze5ohNOW80",
  authDomain: "proyectofinal-59080.firebaseapp.com",
  projectId: "proyectofinal-59080",
  storageBucket: "proyectofinal-59080.appspot.com",
  messagingSenderId: "521123644398",
  appId: "1:521123644398:web:9fa1250b138d513f8144ff",
  measurementId: "G-1LSR9NQG33"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
