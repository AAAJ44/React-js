import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA4n6k1K4ALPoLVwD4adOQcnx7O1RWUeSA",
  authDomain: "vintagetshirt-e94c3.firebaseapp.com",
  projectId: "vintagetshirt-e94c3",
  storageBucket: "vintagetshirt-e94c3.appspot.com",
  messagingSenderId: "1024955542737",
  appId: "1:1024955542737:web:94ef150385c3ce0fbb29f0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);