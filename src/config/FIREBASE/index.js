import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyAUGlCcrvx7d0Nbr03DhCuNGkSXeGMoPuA",
    authDomain: "noteapp-eac45.firebaseapp.com",
    projectId: "noteapp-eac45",
    storageBucket: "noteapp-eac45.appspot.com",
    messagingSenderId: "46958287021",
    appId: "1:46958287021:web:262fb53bbffcde4e124e24",
    measurementId: "G-TR6S8X7GWL"
});

const FIREBASE = firebase;

export default FIREBASE;