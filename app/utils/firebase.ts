import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCoe3gvcnHmPDyOPM14kGxEfJ077264PZc",
  authDomain: "next-js-project-fe927.firebaseapp.com",
  projectId: "next-js-project-fe927",
  storageBucket: "next-js-project-fe927.firebasestorage.app",
  messagingSenderId: "266124427926",
  appId: "1:266124427926:web:8161cb3d3f5415d688f8b7",
  measurementId: "G-R2V0SYYEE9"
};

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
const dataBase = getFirestore(app)

 export {app, auth, dataBase};