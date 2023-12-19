// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNGtGxMq0SplaNCEZKF02xSo6G8ZUPP5c",
    authDomain: "sihnode.firebaseapp.com",
    databaseURL: "https://sihnode-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sihnode",
    storageBucket: "sihnode.appspot.com",
    messagingSenderId: "213651984141",
    appId: "1:213651984141:web:8313e5d7faa2cac9b1ea44",
  };
  
  const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);