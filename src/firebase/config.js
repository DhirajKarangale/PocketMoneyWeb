import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCqXp5-E40SNDkLh-uw3aLPZe1gcTQ561k",
  authDomain: "pocketmoney-a4b80.firebaseapp.com",
  projectId: "pocketmoney-a4b80",
  storageBucket: "pocketmoney-a4b80.firebasestorage.app",
  messagingSenderId: "978440924992",
  appId: "1:978440924992:web:8e8b42f7decf94bc4d94a5",
  measurementId: "G-CSKLLR163Z"
};

//init firebase
const app = initializeApp(firebaseConfig);

//init services
const auth = getAuth();
const projectFirestore = getFirestore(app)

export { auth, projectFirestore }