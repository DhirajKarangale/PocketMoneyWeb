import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBiZiuiYtTNgQkJLoyJ0tDuFYsbzcOo3xU",
  authDomain: "pocket-money-24.firebaseapp.com",
  projectId: "pocket-money-24",
  storageBucket: "pocket-money-24.appspot.com",
  messagingSenderId: "591572329838",
  appId: "1:591572329838:web:b5e02e5c5f2f236eb7cd7f",
  measurementId: "G-JTSBL8126F"
};

//init firebase
const app = initializeApp(firebaseConfig);

//init services
const auth = getAuth();
const projectFirestore = getFirestore(app)

export { auth, projectFirestore }