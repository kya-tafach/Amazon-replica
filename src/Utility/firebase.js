import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6OomyI7eqxXSBVCeHx2iEX-v_LsbzdJ8",
  authDomain: "clone-17e9b.firebaseapp.com",
  projectId: "clone-17e9b",
  storageBucket: "clone-17e9b.firebasestorage.app",
  messagingSenderId: "559940966895",
  appId: "1:559940966895:web:d375013249b485a0abfe1a"
};

// Initialize the Firebase app. This creates a new instance of the Firebase app, which is the entry point for all  Firebase functionality
const app = firebase.initializeApp(firebaseConfig);

// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);

// Get the Firestore database for storing and retrieving data
export const db = app.firestore();