// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLAxlGegCdBg-_5qdp92ZqPao3oTXm5ks",
  authDomain: "phone-simple-firebase.firebaseapp.com",
  projectId: "phone-simple-firebase",
  storageBucket: "phone-simple-firebase.appspot.com",
  messagingSenderId: "514836540069",
  appId: "1:514836540069:web:e9f72c17e736c0acc77b4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;