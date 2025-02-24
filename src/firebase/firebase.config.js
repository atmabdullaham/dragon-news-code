// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz4VjUERF_knzQxRIr3qhmPB2OZr3tFbU",
  authDomain: "dragon-news-code-84956.firebaseapp.com",
  projectId: "dragon-news-code-84956",
  storageBucket: "dragon-news-code-84956.firebasestorage.app",
  messagingSenderId: "622610598399",
  appId: "1:622610598399:web:a410a089af1a8a231affca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app