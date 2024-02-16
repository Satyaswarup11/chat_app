import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDndhVvXp4Cs6gPHrCY0fUKUQ7zEq-5xJY",
  authDomain: "chat-app-690ab.firebaseapp.com",
  projectId: "chat-app-690ab",
  storageBucket: "chat-app-690ab.appspot.com",
  messagingSenderId: "1035669469460",
  appId: "1:1035669469460:web:5745556cd7bfde6100aa01"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
console.log(auth);
export const database = getFirestore();
