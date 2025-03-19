import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2eQV-BiNABMIH6kZ_su7_MGpCcb9-4gg",
  authDomain: "asiabusiness-da5f1.firebaseapp.com",
  projectId: "asiabusiness-da5f1",
  storageBucket: "asiabusiness-da5f1.appspot.com",
  messagingSenderId: "71198624166",
  appId: "1:71198624166:web:ed6bfdfd3271508e17e767",
  measurementId: "G-N1KHFT44ZF"
};

// Ensure Firebase is initialized only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Initialize analytics only on the client side
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db };

