import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAxGs_1ExjRMbdKOIfK1vY04wX-oYyWbw",
  authDomain: "chat-app-30d32.firebaseapp.com",
  projectId: "chat-app-30d32",
  storageBucket: "chat-app-30d32.appspot.com",
  messagingSenderId: "403449450731",
  appId: "1:403449450731:web:a64bdd07f82259be946eae",
  measurementId: "G-RMP0ELSBPJ",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, provider, db };
