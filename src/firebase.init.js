import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDh4vG4C819IkVkQE3RAuCDVNpamAJ7eQ",
  authDomain: "eduhash-mentor.firebaseapp.com",
  projectId: "eduhash-mentor",
  storageBucket: "eduhash-mentor.appspot.com",
  messagingSenderId: "767085443087",
  appId: "1:767085443087:web:a21d90cf9c23d438714b7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;