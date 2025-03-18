// Import the functions you need from the SDKs you need
// Import the necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2eQV-BiNABMIH6kZ_su7_MGpCcb9-4gg",
  authDomain: "asiabusiness-da5f1.firebaseapp.com",
  projectId: "asiabusiness-da5f1",
  storageBucket: "asiabusiness-da5f1.firebasestorage.app",
  messagingSenderId: "71198624166",
  appId: "1:71198624166:web:ed6bfdfd3271508e17e767",
  measurementId: "G-N1KHFT44ZF"
};

let app;
if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
}

// Initialize Firebase

const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };