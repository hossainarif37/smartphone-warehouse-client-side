// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEMz1l6g7iXql4STuXoPFYKE3Skib61_s",
    authDomain: "smartphone-warehouse-62a4e.firebaseapp.com",
    projectId: "smartphone-warehouse-62a4e",
    storageBucket: "smartphone-warehouse-62a4e.appspot.com",
    messagingSenderId: "783180544140",
    appId: "1:783180544140:web:befe9a5602f60e66b023a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;