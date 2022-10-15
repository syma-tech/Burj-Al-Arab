// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6YS3rhQTwdidc7bd4AfiXEocZpGvBwBE",
  authDomain: "burj-al-arab8.firebaseapp.com",
  projectId: "burj-al-arab8",
  storageBucket: "burj-al-arab8.appspot.com",
  messagingSenderId: "689396967838",
  appId: "1:689396967838:web:4e47ddc94899103be00e8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
