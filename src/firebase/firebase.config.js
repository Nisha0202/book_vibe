//// export default app;

import { getAuth } from "firebase/auth"; 
//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaDDpsg_KTe9uBXXfGH4C4NzA8A05tJlk",
  authDomain: "ph-project8.firebaseapp.com",
  projectId: "ph-project8",
  storageBucket: "ph-project8.appspot.com",
  messagingSenderId: "610658512110",
  appId: "1:610658512110:web:0886fd76ebb5602e7d17ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
