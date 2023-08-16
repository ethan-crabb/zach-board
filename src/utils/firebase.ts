// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlJBHSXrbmmzdBp7OAzMNHwQxyajAJhX0",
    authDomain: "zach-board.firebaseapp.com",
    projectId: "zach-board",
    storageBucket: "zach-board.appspot.com",
    messagingSenderId: "964471177735",
    appId: "1:964471177735:web:b35915afe363a018b2e0a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const firestore = getFirestore()