// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7n5k8QoCOuv_eQhl8FkuTyTvgsUPPDZY",
    authDomain: "bd-mart-manufacture-site.firebaseapp.com",
    projectId: "bd-mart-manufacture-site",
    storageBucket: "bd-mart-manufacture-site.appspot.com",
    messagingSenderId: "384987971811",
    appId: "1:384987971811:web:f42a990ec045605e7845d6"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth =getAuth(app);

export default auth;