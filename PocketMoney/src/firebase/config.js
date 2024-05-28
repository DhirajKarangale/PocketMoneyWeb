import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDswl9oilXED5Syguhuto7-ToYg2UGCe6o",
  authDomain: "pocketmoney-5c987.firebaseapp.com",
  projectId: "pocketmoney-5c987",
  storageBucket: "pocketmoney-5c987.appspot.com",
  messagingSenderId: "418851442769",
  appId: "1:418851442769:web:f84178c930fbee8ce92870",
  measurementId: "G-VT789ZB1QZ"
};

//init firebase
const app = initializeApp(firebaseConfig);

//init services
const auth = getAuth();
const projectFirestore = getFirestore(app)

export { auth, projectFirestore }