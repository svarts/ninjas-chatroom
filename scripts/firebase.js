// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiY1N2AKrI4eXGEVyaZASi7UgsjD-PQKc",
    authDomain: "ninjas-modern-javascript.firebaseapp.com",
    projectId: "ninjas-modern-javascript",
    storageBucket: "ninjas-modern-javascript.appspot.com",
    messagingSenderId: "878288388850",
    appId: "1:878288388850:web:31a3f50cb3a1646819466b",
    measurementId: "G-GEJXL2JNEV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };