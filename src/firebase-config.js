// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getStorage } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALbVd_O1lUm_BAMKyHy0sOW0udWcO7qQk",
  authDomain: "gameshop-610be.firebaseapp.com",
  databaseURL: "https://gameshop-610be-default-rtdb.firebaseio.com",
  projectId: "gameshop-610be",
  storageBucket: "gameshop-610be.appspot.com",
  messagingSenderId: "86322725856",
  appId: "1:86322725856:web:2551ce37eca84442c5a185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage();