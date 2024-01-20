import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDwO-Nf0SGL4-8Tg-tMa56cfpXCbOF2fOI",
  authDomain: "pocketmoney-1a05a.firebaseapp.com",
  projectId: "pocketmoney-1a05a",
  storageBucket: "pocketmoney-1a05a.appspot.com",
  messagingSenderId: "441558599825",
  appId: "1:441558599825:web:ee0f7fc51930fc0dcf5730",
  measurementId: "G-DDJCJG681M"
};

//init firebase
const app = initializeApp(firebaseConfig);

//init services
const auth = getAuth();
const projectFirestore = getFirestore(app)

export { auth, projectFirestore }