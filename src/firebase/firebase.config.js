// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM_MrsOSQLMM6dt_Cu6osO9tukq64MQSY",
    authDomain: "cooking-service-39afd.firebaseapp.com",
    projectId: "cooking-service-39afd",
    storageBucket: "cooking-service-39afd.appspot.com",
    messagingSenderId: "618714428130",
    appId: "1:618714428130:web:043ab3d1ddf646622664bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;