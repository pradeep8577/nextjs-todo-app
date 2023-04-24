import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // apiKey: "AIzaSyBC6fgVwFz-PUsosoveTW1sgof_xqWNZes",
    // authDomain: "todo-app-f769a.firebaseapp.com",
    // projectId: "todo-app-f769a",
    // storageBucket: "todo-app-f769a.appspot.com",
    // messagingSenderId: "127294715055",
    // appId: "1:127294715055:web:d4a9149bef3e243784105a",
    // measurementId: "G-Q79Z1PGGC6",

    apiKey: "AIzaSyDHR_rt5i0jFMm7qaKhmVxrI7L6oqvW6BA",
    authDomain: "next-auth-app-e0042.firebaseapp.com",
    projectId: "next-auth-app-e0042",
    storageBucket: "next-auth-app-e0042.appspot.com",
    messagingSenderId: "971289168",
    appId: "1:971289168:web:c8b132e66b19e5db545755",
    measurementId: "G-MM4S478898"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
